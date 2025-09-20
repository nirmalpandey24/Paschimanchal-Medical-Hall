import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Mail, Phone, GraduationCap, Award } from "lucide-react"

export default async function DoctorsPage() {
  const supabase = await createClient()
  const { data: doctors } = await supabase.from("doctors").select("*").order("name", { ascending: true })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our experienced team of board-certified physicians and specialists dedicated to providing exceptional
              healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors?.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={doctor.image_url || "/placeholder.svg?height=400&width=400"}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {doctor.specialty}
                    </Badge>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{doctor.bio}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {/* <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{doctor.years_experience} years experience</span>
                    </div> */}

                    {doctor.education && (
                      <div className="flex items-start text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-2 text-blue-600 mt-0.5" />
                        <span className="line-clamp-2">{doctor.education}</span>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 pt-2">
                      {/* {doctor.phone && (
                        // <div className="flex items-center text-sm text-gray-600">
                        //   <Phone className="h-4 w-4 mr-2 text-blue-600" />
                        //   <span>{doctor.phone}</span>
                        // </div>
                      )} */}
                      {/* {doctor.email && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="truncate">{doctor.email}</span>
                        </div>
                      )} */}
                    </div>

                    <div className="pt-4 space-y-2">
                      <Button asChild className="w-full">
                        <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href="/book-appointment">Book Appointment</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {(!doctors || doctors.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No doctors found. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Schedule an Appointment?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our medical professionals are here to provide you with the best possible care. Schedule your appointment
            today.
          </p>
          <Button asChild size="lg">
            <Link href="/book-appointment">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
