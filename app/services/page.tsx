import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Heart, Bone, Baby, Stethoscope, Shield, Clock } from "lucide-react"

const categoryIcons = {
  Cardiology: Heart,
  Orthopedics: Bone,
  Pediatrics: Baby,
  General: Stethoscope,
  Dermatology: Shield,
  Emergency: Clock,
}

export default async function ServicesPage() {
  const supabase = await createClient()
  const { data: services } = await supabase.from("services").select("*").order("category", { ascending: true })

  // Group services by category
  const servicesByCategory =
    services?.reduce(
      (acc, service) => {
        const category = service.category || "General"
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(service)
        return acc
      },
      {} as Record<string, typeof services>,
    ) || {}

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by our team of experienced medical professionals using the
              latest technology and treatment methods.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(servicesByCategory).map(([category, categoryServices]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Stethoscope

            return (
              <div key={category} className="mb-16">
                <div className="flex items-center mb-8">
                  <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <Card key={service.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <p className="text-2xl font-bold text-blue-600">${service.price}</p>
                            <p className="text-sm text-gray-500">{service.duration_minutes} minutes</p>
                          </div>
                        </div>
                        <Button asChild className="w-full">
                          <Link href="/book-appointment">Book Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing a Service?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our medical professionals are here to help you determine the best treatment plan for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/book-appointment">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
