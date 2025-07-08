"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Home, Car, Heart, Briefcase, Plane, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const services = [
    {
      icon: <Home className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Home Insurance",
      description: "Protect your home and belongings against damage, theft, and other unforeseen events.",
      color: "from-haarika-primary to-haarika-dark",
      delay: 0.1,
    },
    {
      icon: <Car className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Auto Insurance",
      description: "Comprehensive coverage for your vehicles with competitive rates and quick claim processing.",
      color: "from-haarika-secondary to-amber-500",
      delay: 0.2,
    },
    {
      icon: <Heart className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Health Insurance",
      description: "Quality healthcare coverage for individuals and families with access to top medical facilities.",
      color: "from-haarika-primary to-haarika-dark",
      delay: 0.3,
    },
    {
      icon: <Briefcase className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Business Insurance",
      description: "Tailored insurance solutions to protect your business assets, employees, and operations.",
      color: "from-haarika-secondary to-amber-500",
      delay: 0.4,
    },
    {
      icon: <Plane className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Travel Insurance",
      description: "Stay protected during your travels with comprehensive coverage for medical emergencies and more.",
      color: "from-haarika-primary to-haarika-dark",
      delay: 0.5,
    },
    {
      icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Life Insurance",
      description: "Secure your family's financial future with our flexible and affordable life insurance plans.",
      color: "from-haarika-secondary to-amber-500",
      delay: 0.6,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-20 bg-haarika-light/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white"></div>
      <div className="absolute -top-10 right-0 w-40 h-40 bg-haarika-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 left-0 w-40 h-40 bg-haarika-primary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4"
          >
            Our <span className="text-haarika-primary">Services</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "80px" } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-haarika-secondary mx-auto mb-4 md:mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-haarika-gray max-w-2xl mx-auto text-sm md:text-base px-2"
          >
            We offer a wide range of insurance solutions to meet your personal and business needs. Our expert team will
            help you find the right coverage at competitive rates.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: service.delay }}
              className="service-card bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 group bg-gradient-to-r hover:from-haarika-primary hover:to-haarika-dark"
            >
              <div className="bg-gradient-to-r w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 text-white group-hover:bg-white group-hover:text-haarika-primary transition-all transform group-hover:scale-110 bg-gradient-to-r from-haarika-primary to-haarika-dark">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-haarika-gray mb-4 md:mb-6 group-hover:text-white/90 transition-colors duration-300 text-sm md:text-base">
                {service.description}
              </p>
              <Link
                href="#home"
                className="inline-flex items-center text-haarika-primary font-medium group-hover:text-white transition-colors duration-300 text-sm md:text-base"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
