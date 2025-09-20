import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { Mail, Phone, GraduationCap, Award, Calendar, CheckCircle } from "lucide-react"

interface DoctorProfilePageProps {
  params: Promise<{ id: string }>
}

export default async function DoctorProfilePage({ params }: DoctorProfilePageProps) {
  const { id } = await params
  const supabase = await createClient()

  const { data: doctor } = await supabase.from("doctors").select("*").eq("id", id).single()

  if (!doctor) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Doctor Profile Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="aspect-square max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={doctor.image_url || "/placeholder.svg?height=400&width=400"}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{doctor.name}</h1>
              <Badge variant="secondary" className="text-lg px-4 py-2 mb-6">
                {doctor.specialty}
              </Badge>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">{doctor.bio}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <Link href="/book-appointment">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  <Link href="/contact">Contact Office</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Education & Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                    Education & Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Years of Experience</h4>
                    <p className="text-gray-600">
                      {doctor.years_experience} years in {doctor.specialty}
                    </p>
                  </div>
                  {doctor.education && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                      <p className="text-gray-600">{doctor.education}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Certifications */}
              {doctor.certifications && doctor.certifications.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      Certifications & Specializations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {doctor.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-gray-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Availability */}
              {doctor.available_days && doctor.available_days.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                        <div
                          key={day}
                          className={`p-2 text-center rounded ${
                            doctor.available_days.includes(day)
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {day.slice(0, 3)}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Available days are shown in green. Please call to schedule specific appointment times.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* {doctor.phone && (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">{doctor.phone}</p>
                      </div>
                    </div>
                  )} */}
                  {/* {doctor.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600 break-all">{doctor.email}</p>
                      </div>
                    </div>
                  )} */}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href="/book-appointment">Book Appointment</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services">View Services</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/contact">Contact Office</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Emergency Only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
