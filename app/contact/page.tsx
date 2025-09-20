import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our medical team. We're here to help with your healthcare needs and answer any questions
              you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>
                      <strong>Main Line:</strong> 9851197512
                    </p>
                    <p>
                      <strong>Emergency:</strong> 014980049
                    </p>
                    <p>
                      {/* <strong>Appointments:</strong> (555) 123-4567 */}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    Email Addresses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>
                      <strong>General Info:</strong> info@paschimanchalmedicalhall.com.np
                    </p>
                    {/* <p>
                      <strong>Appointments:</strong> appointments@paschimanchalmedicalhall.com.np
                    </p> */}
                    {/* <p>
                      <strong>Billing:</strong> billing@medicalcenter.com
                    </p> */}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>Kathmandu, Nepal</p>
                    <p>Nayabazar-17, Medical Chowk</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    Hours of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>
                      <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                    </p>
                    <p>
                      <strong>Saturday:</strong> 9:00 AM - 4:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> Emergency Only
                    </p>
                    <p>
                      <strong>Emergency Services:</strong> 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1506000000003!2d85.3003449!3d27.7195397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f92bb1578b%3A0x32fbd6dd7e6d4125!2sPaschimanchal%20Medical%20Hall!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Directions</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>From Downtown:</strong> Take Highway 101 North, exit at Medical Drive
                  </p>
                  <p>
                    <strong>Public Transit:</strong> Bus routes 15, 22, and 45 stop at Medical Center
                  </p>
                  <p>
                    <strong>Parking:</strong> Free parking available in our main lot and parking garage
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Emergency Information</h2>
            <p className="text-lg text-red-700 mb-6">For life-threatening emergencies, call 911 immediately.</p>
            <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">When to Seek Emergency Care</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Chest pain or difficulty breathing</li>
                <li>• Severe bleeding or trauma</li>
                <li>• Loss of consciousness</li>
                <li>• Severe allergic reactions</li>
                <li>• Signs of stroke or heart attack</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Our emergency department is staffed 24/7 with board-certified emergency physicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
