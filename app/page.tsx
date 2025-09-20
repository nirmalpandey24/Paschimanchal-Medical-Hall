import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Shield, Users, Clock, Star, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative medical-gradient text-white"
        style={{ backgroundColor: "#1e3a8a", backgroundImage: "linear-gradient(to right, #1e3a8a, #1d4ed8)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#ffffff" }}>
                Your Health, Our Priority
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: "#dbeafe" }}>
                Experience exceptional healthcare with our team of dedicated professionals. We provide comprehensive
                medical services with compassion and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <Link href="/book-appointment">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white hover:bg-white hover:text-blue-900 bg-transparent"
                  style={{ color: "#ffffff", borderColor: "#ffffff" }}
                >
                  <Link href="/services" style={{ color: "inherit" }}>
                    Our Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-2xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {[
                    { src: "/one.jpg", alt: "Medical professionals providing care" },
                    { src: "/two.jpg", alt: "Medical team in modern hospital setting" },
                    { src: "/three.jpg", alt: "Modern medical center building exterior" },
                    // { src: "/modern-medical-facility-with-doctors-and-patients.jpg", alt: "Modern medical facility with doctors and patients" },
                  ].map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video overflow-hidden rounded-lg shadow-2xl">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MedicalCenter?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the highest quality healthcare services with a patient-centered approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Compassionate Care</h3>
                <p className="text-gray-600">
                  Personalized treatment with empathy and understanding for every patient.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Advanced Technology</h3>
                <p className="text-gray-600">State-of-the-art medical equipment and innovative treatment methods.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                <p className="text-gray-600">Board-certified physicians and specialists with years of experience.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">24/7 Emergency</h3>
                <p className="text-gray-600">Round-the-clock emergency services for urgent medical needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-lg text-gray-600">Comprehensive healthcare services tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Cardiology", description: "Heart and cardiovascular care", icon: Heart },
              { name: "Orthopedics", description: "Bone and joint treatment", icon: Shield },
              { name: "Pediatrics", description: "Children's healthcare", icon: Users },
              { name: "Dermatology", description: "Skin and cosmetic care", icon: Star },
              { name: "General Medicine", description: "Primary healthcare services", icon: CheckCircle },
              { name: "Emergency Care", description: "24/7 urgent medical care", icon: Clock },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <service.icon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="medical-gradient text-white py-16"
        style={{ backgroundColor: "#1e3a8a", backgroundImage: "linear-gradient(to right, #1e3a8a, #1d4ed8)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#dbeafe" }}>
            Take the first step towards better health. Our medical professionals are here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white hover:bg-white hover:text-blue-900 bg-transparent"
              style={{ color: "#ffffff", borderColor: "#ffffff" }}
            >
              <Link href="/contact" style={{ color: "inherit" }}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
