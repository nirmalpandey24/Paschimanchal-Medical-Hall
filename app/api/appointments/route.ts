import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import { getAdminNotificationEmail, getPatientConfirmationEmail } from "@/lib/email-templates"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      patient_name,
      patient_email,
      patient_phone,
      patient_age,
      doctor_id,
      service_id,
      appointment_date,
      appointment_time,
      message,
    } = body

    // Validate required fields
    if (!patient_name || !patient_email || !patient_phone || !appointment_date || !appointment_time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(patient_email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate date is not in the past
    const selectedDate = new Date(appointment_date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      return NextResponse.json({ error: "Cannot book appointments in the past" }, { status: 400 })
    }

    const supabase = await createClient()

    let doctorName = "General Consultation"
    let serviceName = "General Service"

    if (doctor_id) {
      const { data: doctor } = await supabase.from("doctors").select("name").eq("id", doctor_id).single()
      if (doctor) doctorName = doctor.name
    }

    if (service_id) {
      const { data: service } = await supabase.from("services").select("name").eq("id", service_id).single()
      if (service) serviceName = service.name
    }

    // Insert appointment into database
    const { data, error } = await supabase
      .from("appointments")
      .insert({
        patient_name,
        patient_email,
        patient_phone,
        patient_age: patient_age || null,
        doctor_id: doctor_id || null,
        service_id: service_id || null,
        appointment_date,
        appointment_time,
        message: message || null,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to book appointment" }, { status: 500 })
    }

    const appointmentData = {
      patientName: patient_name,
      email: patient_email,
      phone: patient_phone,
      age: patient_age,
      doctorName,
      serviceName,
      appointmentDate: appointment_date,
      appointmentTime: appointment_time,
      message: message || null,
    }

    try {
      // Send admin notification email
      const adminEmail = getAdminNotificationEmail(appointmentData)
      await fetch(`${request.nextUrl.origin}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "nirmalpandey055@gmail.com",
          subject: adminEmail.subject,
          html: adminEmail.html,
          type: "admin_notification",
        }),
      })

      // Send patient confirmation email
      const patientEmail = getPatientConfirmationEmail(appointmentData)
      await fetch(`${request.nextUrl.origin}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: patient_email,
          subject: patientEmail.subject,
          html: patientEmail.html,
          type: "patient_confirmation",
        }),
      })

      console.log("[v0] Email notifications sent successfully")
    } catch (emailError) {
      console.error("[v0] Email sending failed:", emailError)
      // Don't fail the appointment booking if email fails
    }

    return NextResponse.json(
      {
        message: "Appointment booked successfully! You will receive a confirmation email shortly.",
        appointment: data,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
