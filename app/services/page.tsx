import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Video,
  X,
  FlaskConical,
  Heart,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Users,
  Shield,
  Award,
} from "lucide-react"



export default async function ServicesPage() {
  const services = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Doctor Checkups",
      description: "Comprehensive health examinations with experienced physicians",
      features: ["General Health Assessment", "Preventive Care", "Health Screening", "Medical Consultation"],
      price: "Starting from $150",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Consultations",
      description: "Remote medical consultations from the comfort of your home",
      features: ["24/7 Availability", "Secure Video Calls", "Digital Prescriptions", "Follow-up Care"],
      price: "Starting from $75",
    },
    {
      icon: <X className="h-8 w-8" />,
      title: "X-Ray Services",
      description: "Advanced digital imaging for accurate diagnosis",
      features: ["Digital X-Ray", "Same-day Results", "Expert Radiologist Review", "CD/Digital Copies"],
      price: "Starting from $200",
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Lab & Pathology",
      description: "Comprehensive laboratory testing and pathology services",
      features: ["Blood Tests", "Urine Analysis", "Biopsy Services", "Quick Results"],
      price: "Starting from $50",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cardiology",
      description: "Specialized heart care and cardiovascular health services",
      features: ["ECG Testing", "Heart Monitoring", "Cardiac Consultation", "Preventive Care"],
      price: "Starting from $300",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Family Medicine",
      description: "Comprehensive healthcare for patients of all ages",
      features: ["Pediatric Care", "Adult Medicine", "Geriatric Care", "Family Planning"],
      price: "Starting from $120",
    },
  ]

  const testimonials = [
    {
      name: "Sanjay Shrestha",
      rating: 5,
      comment: "Excellent service and caring staff. The video consultation was very convenient!",
    },
    {
      name: "Pratik Gurung",
      rating: 5,
      comment: "Quick lab results and professional service. Highly recommend this clinic.",
    },
    {
      name: "Binod Adhikari",
      rating: 5,
      comment: "The doctors are knowledgeable and take time to explain everything clearly.",
    },
  ]
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              From routine checkups to specialized care, we provide quality healthcare services with modern technology
              and compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Video className="mr-2 h-5 w-5" />
                Video Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Medical Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of medical services to meet all your healthcare needs
            </p>
          </div>

        
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose HealthCare Plus?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing exceptional healthcare with modern facilities and experienced professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Trusted Care</h4>
              <p className="text-muted-foreground">
                Over 20 years of experience providing quality healthcare services to our community
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Expert Doctors</h4>
              <p className="text-muted-foreground">
                Board-certified physicians and specialists dedicated to your health and wellbeing
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">24/7 Support</h4>
              <p className="text-muted-foreground">
                Round-the-clock emergency services and telemedicine consultations available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Patients Say</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from our satisfied patients who trust us with their healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

   

      <Footer />
    </div>
  )
}
