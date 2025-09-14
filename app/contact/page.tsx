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
                      <strong>Main Line:</strong> (555) 123-CARE
                    </p>
                    <p>
                      <strong>Emergency:</strong> (555) 911-HELP
                    </p>
                    <p>
                      <strong>Appointments:</strong> (555) 123-4567
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
                      <strong>General Info:</strong> info@medicalcenter.com
                    </p>
                    <p>
                      <strong>Appointments:</strong> appointments@medicalcenter.com
                    </p>
                    <p>
                      <strong>Billing:</strong> billing@medicalcenter.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>123 Medical Drive</p>
                    <p>Healthcare City, HC 12345</p>
                    <p>United States</p>
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

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Medical Drive, Healthcare City</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
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
              </div>
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
