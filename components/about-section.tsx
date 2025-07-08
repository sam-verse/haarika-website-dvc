"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Clock,
  Heart,
  Activity,
  Car,
  Home,
  Plane,
  Settings,
} from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const stats = [
    {
      icon: <Clock className="h-5 w-5 md:h-6 md:w-6 text-haarika-primary" />,
      value: 23,
      label: "Years of expertise",
      suffix: "+",
    },
    {
      icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-haarika-primary" />,
      value: 2000,
      label: "Claims settled",
      suffix: "+",
    },
    {
      icon: <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-haarika-primary" />,
      value: 60,
      label: "Crores disbursed",
      suffix: "+",
    },
    {
      icon: <Award className="h-5 w-5 md:h-6 md:w-6 text-haarika-primary" />,
      value: 98,
      label: "Approval rate",
      suffix: "%",
    },
    {
      icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-haarika-primary" />,
      value: 10000,
      label: "Clients",
      suffix: "+",
    },
    {
      icon: <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-haarika-primary" />,
      value: 15,
      label: "Partners",
      suffix: "+",
    },
  ]

  const services = [
    {
      icon: <Heart className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Life Insurance",
      description: "Secure your family's future with term and investment-based plans.",
    },
    {
      icon: <Activity className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Health Insurance",
      description: "Comprehensive coverage for individuals, families and seniors against medical expenses.",
    },
    {
      icon: <Car className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Motor Insurance",
      description: "Protection for personal and commercial vehicles with fast claim support.",
    },
    {
      icon: <Home className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Home and Property Insurance",
      description: "Coverage against fire, theft, natural disasters and unforeseen damages.",
    },
    {
      icon: <Plane className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Travel Insurance",
      description: "Global coverage for trip delays, medical emergencies and baggage loss.",
    },
    {
      icon: <Briefcase className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Business Insurance",
      description: "Solutions including liability, employee health, property and cyber risk coverage.",
    },
    {
      icon: <Settings className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Customised Plans",
      description: "Personalized insurance packages tailored to your unique lifestyle and goals.",
    },
  ]

  const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
      if (!hasAnimated) return

      let start = 0
      const end = target
      // Speed up animation when hovered
      const duration = isHovered ? 1000 : 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        setCount(Math.min(Math.floor(start), end))

        if (start >= end) {
          clearInterval(timer)
        }
      }, 16)

      return () => clearInterval(timer)
    }, [hasAnimated, target, isHovered])

    return (
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="transition-all duration-300 hover:text-haarika-primary"
      >
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-haarika-light/50 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-haarika-accent/30 rounded-tr-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-w-4 aspect-h-3 w-full h-[300px] md:h-[400px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-haarika-primary to-haarika-dark opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                    <div className="text-white text-center">
                      <h3 className="text-center text-xl md:text-2xl font-bold mb-4">Why choose Haarika?</h3>

                      <div className="flex justify-center">
                        <div className="inline-block px-4 md:px-6 py-2 border-2 border-white rounded-full font-medium text-sm md:text-base">
                          Trusted Since 2000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-haarika-secondary rounded-lg z-0"></div>
              <div className="absolute -top-6 -left-6 w-16 md:w-24 h-16 md:h-24 border-4 border-haarika-primary rounded-lg z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left" // Center align on mobile, left align on larger screens
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" // Increased text size
            >
              Our Core <span className="text-haarika-primary">Services</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-haarika-gray mb-4 md:mb-6 text-sm md:text-base"
            >
              We provide comprehensive insurance solutions, carefully designed to meet individual and business needs:
            </motion.p>

            <div className="space-y-3 md:space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="flex items-start bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:border-haarika-primary/20 transition-all duration-300 hover:shadow-md cursor-pointer"
                >
                  <div className="bg-haarika-light p-2 rounded-full mr-3 text-haarika-primary flex-shrink-0 transition-all duration-300 hover:bg-haarika-primary hover:text-white">
                    {service.icon}
                  </div>
                  <div className="text-left">
                    {" "}
                    {/* Keep text left-aligned within the card */}
                    <h4 className="font-bold text-haarika-gray text-base md:text-lg">{service.title}</h4>{" "}
                    {/* Increased text size */}
                    <p className="text-xs md:text-sm text-haarika-gray/80">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10"
        >
          Why choose <span className="text-haarika-primary"> Haarika ?</span>
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg p-4 md:p-6 text-center shadow-lg border border-gray-100 hover:border-haarika-primary/20 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="bg-haarika-light w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-haarika-primary group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-haarika-gray mb-1 md:mb-2">
                {hasAnimated ? <CountUp target={stat.value} suffix={stat.suffix} /> : "0"}
              </h3>
              <p className="text-xs md:text-sm text-haarika-gray/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
