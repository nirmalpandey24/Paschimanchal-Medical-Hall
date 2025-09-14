"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface Doctor {
  id: string
  name: string
  specialty: string
}

interface Service {
  id: string
  name: string
  price: number
  duration_minutes: number
  category: string
}

export default function BookAppointmentPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    patientAge: "",
    doctorId: "",
    serviceId: "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient()

      // Fetch doctors
      const { data: doctorsData } = await supabase.from("doctors").select("id, name, specialty").order("name")

      // Fetch services
      const { data: servicesData } = await supabase.from("services").select("*").order("category", { ascending: true })

      if (doctorsData) setDoctors(doctorsData)
      if (servicesData) setServices(servicesData)
    }

    fetchData()
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Validate required fields
      if (
        !formData.patientName ||
        !formData.patientEmail ||
        !formData.patientPhone ||
        !formData.appointmentDate ||
        !formData.appointmentTime
      ) {
        throw new Error("Please fill in all required fields")
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.patientEmail)) {
        throw new Error("Please enter a valid email address")
      }

      // Validate date is not in the past
      const selectedDate = new Date(formData.appointmentDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        throw new Error("Please select a future date")
      }

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patient_name: formData.patientName,
          patient_email: formData.patientEmail,
          patient_phone: formData.patientPhone,
          patient_age: formData.patientAge ? Number.parseInt(formData.patientAge) : null,
          doctor_id: formData.doctorId || null,
          service_id: formData.serviceId || null,
          appointment_date: formData.appointmentDate,
          appointment_time: formData.appointmentTime,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to book appointment")
      }

      setIsSubmitted(true)
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Appointment Booked Successfully!</h1>
                <p className="text-gray-600 mb-6">
                  Thank you for booking your appointment. We have received your request and will contact you shortly to
                  confirm the details.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Appointment Details:</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Patient:</strong> {formData.patientName}
                    </p>
                    <p>
                      <strong>Date:</strong> {new Date(formData.appointmentDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Time:</strong> {formData.appointmentTime}
                    </p>
                    {formData.doctorId && (
                      <p>
                        <strong>Doctor:</strong> {doctors.find((d) => d.id === formData.doctorId)?.name}
                      </p>
                    )}
                    {formData.serviceId && (
                      <p>
                        <strong>Service:</strong> {services.find((s) => s.id === formData.serviceId)?.name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.location.reload()}>Book Another Appointment</Button>
                  <Button variant="outline" onClick={() => (window.location.href = "/")}>
                    Return Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Schedule your visit with our medical professionals. We're here to provide you with the best healthcare
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Schedule Your Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="patientName" className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-blue-600" />
                      Full Name *
                    </Label>
                    <Input
                      id="patientName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.patientName}
                      onChange={(e) => handleInputChange("patientName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patientPhone" className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      Phone Number *
                    </Label>
                    <Input
                      id="patientPhone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.patientPhone}
                      onChange={(e) => handleInputChange("patientPhone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="patientEmail" className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      Email Address *
                    </Label>
                    <Input
                      id="patientEmail"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.patientEmail}
                      onChange={(e) => handleInputChange("patientEmail", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patientAge" className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-blue-600" />
                      Age (Optional)
                    </Label>
                    <Input
                      id="patientAge"
                      type="number"
                      placeholder="Enter your age"
                      value={formData.patientAge}
                      onChange={(e) => handleInputChange("patientAge", e.target.value)}
                      min="1"
                      max="120"
                    />
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="doctorId">Preferred Doctor (Optional)</Label>
                    <Select value={formData.doctorId} onValueChange={(value) => handleInputChange("doctorId", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id}>
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceId">Service (Optional)</Label>
                    <Select value={formData.serviceId} onValueChange={(value) => handleInputChange("serviceId", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name} - ${service.price} ({service.duration_minutes} min)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="appointmentDate" className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="appointmentDate"
                      type="date"
                      value={formData.appointmentDate}
                      onChange={(e) => handleInputChange("appointmentDate", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appointmentTime" className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      Preferred Time *
                    </Label>
                    <Select
                      value={formData.appointmentTime}
                      onValueChange={(value) => handleInputChange("appointmentTime", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "08:00",
                          "08:30",
                          "09:00",
                          "09:30",
                          "10:00",
                          "10:30",
                          "11:00",
                          "11:30",
                          "12:00",
                          "12:30",
                          "13:00",
                          "13:30",
                          "14:00",
                          "14:30",
                          "15:00",
                          "15:30",
                          "16:00",
                          "16:30",
                          "17:00",
                          "17:30",
                        ].map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your symptoms, concerns, or any special requests..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-700 text-sm">
                    <strong>Please note:</strong> This is a request for an appointment. You will receive a confirmation
                    email immediately, and our staff will contact you within 24 hours to confirm your appointment time
                    and provide any additional instructions.
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "Booking Appointment..." : "Book Appointment"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
