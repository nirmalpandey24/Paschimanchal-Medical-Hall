"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>9851197512</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@paschimanchalmedicalhall.com.np" className="hover:underline">
                  info@paschimanchalmedicalhall.com.np
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Emergency: 9841630190</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12  rounded-full flex items-center justify-center">
                <img src="/logo.png" alt="" />
              </div>
              <span className="font-bold text-xl text-gray-900">Paschimanchal Medical Hall</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/doctors"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Doctors
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-blue-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                Services
              </Link>
              <Link href="/doctors" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Doctors
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/book-appointment">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
