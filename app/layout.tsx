import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MedicalCenter - Professional Healthcare Services",
  description:
    "Comprehensive medical care with experienced professionals. Book appointments, meet our doctors, and access quality healthcare services.",
  generator: "v0.app",
  keywords: "medical, healthcare, doctors, appointments, clinic, hospital, medical services",
  authors: [{ name: "MedicalCenter" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable} scrollbar-thin`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
