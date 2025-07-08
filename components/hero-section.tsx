"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Globe, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      heroRef.current.style.setProperty("--mouse-x", `${x}`)
      heroRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-10 overflow-hidden" // Reduced top padding since navbar is removed
      style={{
        background:
          "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(13, 157, 88, 0.08), transparent 50%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-haarika-light/30 to-transparent opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Hero Section - Similar to swimming pool website */}
        <section className="pt-10 md:pt-20 pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            {/* Updated profile picture with new image */}
            <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-lg transition-all duration-300 hover:shadow-md hover:border-haarika-primary/50">
              <Image
                src="bhoopathy-p.png"
                alt="Bhoopathy P"
                fill
                className="object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-haarika-primary mb-2">Bhoopathy P </h1>
            <div className="h-1 w-20 bg-haarika-secondary mx-auto my-4 rounded-full"></div>
            <h2 className="text-xl text-haarika-gray font-medium mb-4">Director</h2>
            <div className="flex justify-center my-4">
              <Image
                src="https://res.cloudinary.com/dlnwacm5j/image/upload/v1745693689/harika_Logo_v1-04_v5htsx.png"
                alt="Haarika Insurance Logo"
                width={240}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="text-haarika-gray/80 max-w-2xl mx-auto italic flex items-center justify-center gap-3 mt-4 text-sm md:text-base px-4">
              India's Premier Insurance Provider, Delivering Peace of Mind with Comprehensive Coverage and Exceptional
              Service
            </p>
          </motion.div>
        </section>

        {/* Contact Buttons - 2x2 grid on mobile */}
        <section className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 max-w-md md:max-w-none mx-auto">
            <ContactButton
              icon={<Phone className="h-5 w-5" />}
              label="Call"
              value="+91 98843 93055"
              href="tel:+919884393055"
              color="from-haarika-primary to-haarika-dark hover:from-haarika-dark hover:to-haarika-primary"
            />
            <ContactButton
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="gabhoopathy @yahoo.co.in"
              href="mailto:gabhoopathy@yahoo.co.in"
              color="from-haarika-primary to-haarika-dark hover:from-haarika-dark hover:to-haarika-primary"
            />
            <ContactButton
              icon={<Globe className="h-5 w-5" />}
              label="Website"
              value="haarikainsurance services.com"
              href="https://www.haarikainsuranceservices.com/"
              color="from-haarika-primary to-haarika-dark hover:from-haarika-dark hover:to-haarika-primary"
            />
            <ContactButton
              icon={<MapPin className="h-5 w-5" />}
              label="Address"
              value="Nanganallur, Chennai, Tamil Nadu"
              href="https://maps.app.goo.gl/QCFX5yCVjkXFUQ7U7"
              color="from-haarika-primary to-haarika-dark hover:from-haarika-dark hover:to-haarika-primary"
            />
          </div>
        </section>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#E6F4EA"
            fillOpacity="0.5"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

interface ContactButtonProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  onClick?: () => void
  color: string
}

function ContactButton({ icon, label, value, href, onClick, color }: ContactButtonProps) {
  const buttonContent = (
    <>
      <div className="bg-black/20 backdrop-blur-sm p-3 rounded-full mb-2 group-hover:bg-black/40 transition-all transform group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium group-hover:text-haarika-secondary transition-all duration-300">
          {label}
        </div>
        <div className="text-xs opacity-80 break-words group-hover:opacity-100 transition-all duration-300">
          {value}
        </div>
      </div>
    </>
  )

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`bg-gradient-to-br ${color} text-white rounded-xl p-4 flex flex-col items-center text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-haarika-secondary/50 active:scale-95`}
      >
        {buttonContent}
      </button>
    )
  }

  return (
    <Link
      href={href || "#"}
      className={`bg-gradient-to-br ${color} text-white rounded-xl p-4 flex flex-col items-center text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-haarika-secondary/50 active:scale-95`}
    >
      {buttonContent}
    </Link>
  )
}
