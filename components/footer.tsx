"use client"
import Link from "next/link"
import { ArrowUp, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const contactInfo = [
    {
      icon: <MapPin size={16} />,
      text: "Nanganallur, Chennai, Tamil Nadu",
      href: "https://maps.app.goo.gl/QCFX5yCVjkXFUQ7U7",
    },
  ]

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#facebook", label: "Facebook" },
    { icon: <Twitter size={18} />, href: "#twitter", label: "Twitter" },
    { icon: <Instagram size={18} />, href: "#instagram", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#linkedin", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-haarika-dark text-white relative overflow-hidden">
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-32 pb-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center mb-4">
            <Image src="https://res.cloudinary.com/dlnwacm5j/image/upload/v1745693690/logo-haarika_o7gfnt.png" alt="Haarika Insurance Logo" width={40} height={40} className="mr-3" />
            <span className="text-xl md:text-2xl font-bold text-white">Haarika Insurance</span>
          </div>

          <p className="text-white/80 max-w-md text-sm md:text-base mb-6">
            Comprehensive insurance solutions tailored to your unique needs. Experience peace of mind with our expert
            coverage and exceptional service.
          </p>

          <div className="flex space-x-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="bg-haarika-primary/20 hover:bg-haarika-primary text-secondary p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-2 mb-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="mr-2 text-haarika-secondary">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

       

        <hr className="border-white/10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Haarika Insurance. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-haarika-primary hover:bg-haarika-secondary text-white p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
