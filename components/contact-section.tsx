"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Our Location",
      details: "123 Insurance Plaza, Financial District, Hyderabad, India 500032",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Number",
      details: "+91 40 1234 5678",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Address",
      details: "info@haarikainsurance.com",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-haarika-light/30"></div>
      <div className="absolute -top-10 left-0 w-40 h-40 bg-haarika-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 right-0 w-40 h-40 bg-haarika-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Contact <span className="text-haarika-primary">Us</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "80px" } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-haarika-secondary mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-haarika-gray max-w-2xl mx-auto"
          >
            Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels
            below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="bg-haarika-light p-3 rounded-full mr-4">
                        <div className="text-haarika-primary">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-haarika-gray">{item.title}</h4>
                        <p className="text-haarika-gray/80">{item.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                      <motion.a
                        key={social}
                        href={`#${social}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className="bg-haarika-light hover:bg-haarika-primary text-haarika-primary hover:text-white p-2 rounded-full transition-all duration-300"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-haarika-gray mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-haarika-primary/50 focus:border-haarika-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-haarika-gray mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-haarika-primary/50 focus:border-haarika-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-haarika-gray mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-haarika-primary/50 focus:border-haarika-primary"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-haarika-gray mb-1">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-haarika-primary/50 focus:border-haarika-primary"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-haarika-primary hover:bg-haarika-dark text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-xl overflow-hidden shadow-xl h-[400px] relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3176195767!2d78.24323135!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Haarika Insurance Location"
          ></iframe>

          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="bg-haarika-primary p-2 rounded-full mr-3">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-haarika-gray">Haarika Insurance</h4>
                <p className="text-sm text-haarika-gray/80">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
