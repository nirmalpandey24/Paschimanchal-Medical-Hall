import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                {/* <span className="text-white font-bold text-sm">MC</span> */}
                {/* <img src="/logo.png" alt="" className="rounded-full w-12 h-12" /> */}
              </div>
              <span className="font-bold text-xl">Paschimanchal Medical Center</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing exceptional healthcare services with compassion, expertise, and cutting-edge medical technology.
              Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>9851197512</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@paschimanchalmedicalhall.com.np</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Kathmandu, Nepal</p>
                  <p className="text-gray-300">Nayabazar-17 , Medical Chowk</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 MedicalCenter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
