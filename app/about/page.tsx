import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, Building } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MedicalCenter</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dedicated to providing exceptional healthcare services with compassion, innovation, and excellence for
              over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At MedicalCenter, our mission is to provide comprehensive, compassionate healthcare services that
                improve the quality of life for our patients and their families. We are committed to excellence in
                medical care, education, and research.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every patient deserves personalized attention, respect, and the highest standard of
                medical care. Our team of dedicated professionals works tirelessly to ensure that each patient receives
                the best possible treatment in a comfortable and caring environment.
              </p>
            </div>
            <div>
              <img src="/medical-team-in-modern-hospital-setting.jpg" alt="Medical team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Compassion</h3>
                <p className="text-gray-600">We treat every patient with empathy, kindness, and understanding.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for the highest standards in medical care and service.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
                <p className="text-gray-600">We work together as a team to provide comprehensive care.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600">We embrace new technologies and treatment methods.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/modern-medical-center-building-exterior.jpg" alt="MedicalCenter building" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg">2000 - Foundation</h3>
                  <p className="text-gray-600">
                    MedicalCenter was founded with a vision to provide accessible, high-quality healthcare to our
                    community.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg">2010 - Expansion</h3>
                  <p className="text-gray-600">
                    We expanded our facilities and added specialized departments including cardiology and orthopedics.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg">2020 - Innovation</h3>
                  <p className="text-gray-600">
                    Introduced telemedicine services and state-of-the-art diagnostic equipment.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg">2024 - Today</h3>
                  <p className="text-gray-600">
                    Continuing to serve our community with over 50 medical professionals and comprehensive services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
