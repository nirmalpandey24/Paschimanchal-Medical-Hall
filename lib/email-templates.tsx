export function getAdminNotificationEmail(appointmentData: any) {
  return {
    subject: `New Appointment Booking - ${appointmentData.patientName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1e40af; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            🏥 New Appointment Booking
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Patient Information:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.patientName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Age:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.age}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Appointment Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Doctor:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.doctorName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.serviceName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Date:</td>
                <td style="padding: 8px 0; color: #1f2937;">${new Date(appointmentData.appointmentDate).toLocaleDateString()}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Time:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.appointmentTime}</td>
              </tr>
            </table>
          </div>

          ${
            appointmentData.message
              ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Additional Message:</h3>
              <p style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; color: #1f2937; margin: 0;">
                ${appointmentData.message}
              </p>
            </div>
          `
              : ""
          }

          <div style="background-color: #dbeafe; padding: 15px; border-radius: 6px; margin-top: 20px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Action Required:</strong> Please contact the patient to confirm the appointment and provide any additional instructions.
            </p>
          </div>
        </div>
      </div>
    `,
  }
}

export function getPatientConfirmationEmail(appointmentData: any) {
  return {
    subject: `Appointment Confirmation - ${appointmentData.doctorName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1e40af; margin-bottom: 20px; text-align: center;">
            ✅ Appointment Confirmation
          </h2>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 25px;">
            Dear ${appointmentData.patientName},
          </p>
          
          <p style="color: #374151; margin-bottom: 25px;">
            Thank you for booking an appointment with us. Your appointment has been successfully scheduled and is pending confirmation from our medical team.
          </p>

          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #1e40af; margin-bottom: 15px; margin-top: 0;">Appointment Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Doctor:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.doctorName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.serviceName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Date:</td>
                <td style="padding: 8px 0; color: #1f2937;">${new Date(appointmentData.appointmentDate).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Time:</td>
                <td style="padding: 8px 0; color: #1f2937;">${appointmentData.appointmentTime}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; margin-bottom: 25px;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>Important:</strong> Our medical team will contact you within 24 hours to confirm your appointment and provide any additional instructions.
            </p>
          </div>

          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin-bottom: 15px;">What to Expect:</h3>
            <ul style="color: #4b5563; padding-left: 20px;">
              <li style="margin-bottom: 8px;">You will receive a confirmation call from our staff</li>
              <li style="margin-bottom: 8px;">Please arrive 15 minutes before your scheduled time</li>
              <li style="margin-bottom: 8px;">Bring a valid ID and any relevant medical records</li>
              <li style="margin-bottom: 8px;">If you need to reschedule, please call us at least 24 hours in advance</li>
            </ul>
          </div>

          <div style="text-align: center; margin-bottom: 25px;">
            <p style="color: #374151; margin-bottom: 10px;">For any questions or to reschedule:</p>
            <p style="color: #1e40af; font-weight: bold; font-size: 18px; margin: 0;">📞 +977-1-4567890</p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Thank you for choosing our medical services. We look forward to providing you with excellent healthcare.
            </p>
          </div>
        </div>
      </div>
    `,
  }
}
