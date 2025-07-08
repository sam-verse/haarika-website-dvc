"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import Image from "next/image"

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you with your insurance needs today?", sender: "bot" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [showInitialPopup, setShowInitialPopup] = useState(false)

  useEffect(() => {
    // Show initial popup after 5 seconds
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowInitialPopup(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isOpen])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: newMessage, sender: "user" }])
    setNewMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you with that! Could you provide more details?",
        "Thank you for your question. One of our insurance experts will contact you shortly.",
        "We offer various insurance plans that might suit your needs. Would you like to schedule a call with our team?",
        "For this specific query, it would be best to speak with our customer service team. You can reach them at +91 98765 43210.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      setMessages((prev) => [...prev, { text: randomResponse, sender: "bot" }])
    }, 1000)
  }

  return (
    <>
      {/* Initial popup */}
      <AnimatePresence>
        {showInitialPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-4 z-40 max-w-xs"
          >
            <button
              onClick={() => setShowInitialPopup(false)}
              className="absolute -top-2 -right-2 bg-haarika-primary text-white rounded-full p-1"
            >
              <X size={16} />
            </button>
            <div className="flex items-start">
              <div className="mr-3">
                <Image src="/logo-haarika.png" alt="Haarika Logo" width={30} height={30} />
              </div>
              <div>
                <p className="text-sm font-medium text-haarika-gray">Need help with insurance?</p>
                <p className="text-xs text-haarika-gray/70 mt-1">Chat with our virtual assistant!</p>
                <button
                  onClick={() => {
                    setIsOpen(true)
                    setShowInitialPopup(false)
                  }}
                  className="mt-2 text-xs bg-haarika-primary text-white px-3 py-1 rounded-full"
                >
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-haarika-primary hover:bg-haarika-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl z-50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-6 bg-white rounded-xl shadow-2xl w-80 sm:w-96 z-40 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-haarika-primary to-haarika-dark text-white p-4">
              <div className="flex items-center">
                <Image src="/logo-haarika.png" alt="Haarika Logo" width={32} height={32} className="mr-3" />
                <div>
                  <h3 className="font-bold">Haarika Assistant</h3>
                  <p className="text-xs text-white/80">Online | Typically replies instantly</p>
                </div>
              </div>
            </div>

            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div key={index} className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-haarika-primary text-white"
                        : "bg-white text-haarika-gray border border-gray-200"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-haarika-primary/50 focus:border-haarika-primary"
                />
                <button
                  type="submit"
                  className="ml-2 bg-haarika-primary hover:bg-haarika-dark text-white p-2 rounded-full transition-all duration-300"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
