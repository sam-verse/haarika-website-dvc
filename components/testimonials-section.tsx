"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Haarika Insurance made finding the right home insurance policy so easy. Their team was incredibly helpful and found me a great rate with excellent coverage. The claims process was smooth when I needed it. Highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "As a small business owner, I needed comprehensive coverage that wouldn't break the bank. Haarika delivered exactly what I needed with personalized service that made me feel valued. Their expertise in business insurance is unmatched.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Family of Four",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "We've been with Haarika for our auto and health insurance for over 5 years. Their customer service is exceptional, and they've always been there when we needed them. The peace of mind they provide is priceless.",
      rating: 4,
    },
    {
      name: "David Wilson",
      role: "Frequent Traveler",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Haarika's travel insurance has been a lifesaver during my international trips. When I had a medical emergency abroad, their 24/7 support team guided me through the entire process. I wouldn't travel without their coverage.",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-haarika-light/50 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-haarika-accent/30 rounded-tr-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4"
          >
            Client <span className="text-haarika-primary">Testimonials</span>
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
            className="text-haarika-gray max-w-2xl mx-auto text-sm md:text-base"
          >
            Don't just take our word for it. Hear what our clients have to say about their experience with Haarika
            Insurance.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-haarika-primary/10 hidden md:block">
            <Quote size={80} />
          </div>

          <div className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-gray-100 p-1 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="bg-gradient-to-r from-haarika-primary/10 to-haarika-secondary/10 rounded-lg p-4 md:p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-4 md:mb-6 flex justify-center">
                    <motion.div
                      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="flex justify-center mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < testimonials[activeIndex].rating
                            ? "text-haarika-secondary fill-haarika-secondary"
                            : "text-gray-300"
                        } transition-all duration-300 hover:scale-125`}
                      />
                    ))}
                  </div>

                  <p className="text-base md:text-lg lg:text-xl italic text-haarika-gray mb-4 md:mb-6 px-2 md:px-0">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <motion.h3 className="text-lg md:text-xl font-bold text-haarika-primary" whileHover={{ scale: 1.05 }}>
                    {testimonials[activeIndex].name}
                  </motion.h3>
                  <p className="text-haarika-gray/80 text-sm md:text-base">{testimonials[activeIndex].role}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-6 md:mt-8 space-x-4">
            <motion.button
              onClick={handlePrev}
              className="bg-white hover:bg-haarika-light text-haarika-primary p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setActiveIndex(index)
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-haarika-primary scale-125" : "bg-haarika-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="bg-white hover:bg-haarika-light text-haarika-primary p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
