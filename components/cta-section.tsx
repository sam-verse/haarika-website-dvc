"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Shield } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  return (
    <section id="get-quote" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background with gradient animation */}
      <div className="absolute inset-0 gradient-animation"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-6"
              >
                <div className="bg-haarika-primary p-2 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Get Protected Today</h3>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                Ready to Secure Your <span className="text-haarika-primary">Future</span>?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-haarika-gray mb-8"
              >
                Get a personalized insurance quote in minutes. Our expert team will help you find the perfect coverage
                for your needs at competitive rates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                {[
                  "No obligation quotes",
                  "Compare multiple options",
                  "Expert advice from licensed agents",
                  "Fast and easy process",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-haarika-light p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-haarika-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  className="bg-haarika-primary hover:bg-haarika-dark text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium w-full sm:w-auto inline-flex"
                >
                  Get Your Free Quote <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-haarika-primary to-haarika-dark p-8 md:p-12 lg:p-16 text-white">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6"
              >
                Request a Quote
              </motion.h3>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="insurance-type" className="block text-sm font-medium mb-1">
                    Insurance Type
                  </label>
                  <select
                    id="insurance-type"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                  >
                    <option value="" className="bg-haarika-dark">
                      Select Insurance Type
                    </option>
                    <option value="home" className="bg-haarika-dark">
                      Home Insurance
                    </option>
                    <option value="auto" className="bg-haarika-dark">
                      Auto Insurance
                    </option>
                    <option value="health" className="bg-haarika-dark">
                      Health Insurance
                    </option>
                    <option value="business" className="bg-haarika-dark">
                      Business Insurance
                    </option>
                    <option value="travel" className="bg-haarika-dark">
                      Travel Insurance
                    </option>
                    <option value="life" className="bg-haarika-dark">
                      Life Insurance
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                    placeholder="Tell us more about your insurance needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-haarika-accent text-haarika-primary font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
