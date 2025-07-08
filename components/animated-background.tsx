"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      // Reduce particle count for better performance, especially on mobile
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 50)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1, // Smaller particles for a more subtle effect
          speedX: (Math.random() - 0.5) * 0.3, // Slower movement
          speedY: (Math.random() - 0.5) * 0.3, // Slower movement
          opacity: Math.random() * 0.3 + 0.05, // More subtle opacity
          color: Math.random() > 0.5 ? "#0D9D58" : "#FFCC00", // Keep the green and yellow theme
        })
      }
    }

    // Update the drawParticles function to make it more interactive
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create a more dynamic gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(250, 250, 250, 1)")
      gradient.addColorStop(1, "rgba(240, 248, 244, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle pulse effect to particles
      const time = Date.now() * 0.001

      particles.current.forEach((particle, index) => {
        // Pulse size based on time
        const pulseFactor = Math.sin(time + index * 0.1) * 0.2 + 1
        const currentSize = particle.size * pulseFactor

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)

        // Pulse opacity based on time (different frequency)
        const opacityPulse = Math.sin(time * 0.5 + index * 0.05) * 0.1 + 0.9
        const currentOpacity = particle.opacity * opacityPulse

        ctx.fillStyle = particle.color.replace(")", `, ${currentOpacity})`)
        ctx.fill()

        // Update position with slight wave motion
        particle.x += particle.speedX + Math.sin(time + index) * 0.05
        particle.y += particle.speedY + Math.cos(time + index * 0.5) * 0.05

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      // Connect particles with lines if they're close enough
      connectParticles(ctx)

      animationFrameId.current = requestAnimationFrame(drawParticles)
    }

    // Update the connectParticles function to make connections more dynamic
    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 120
      const time = Date.now() * 0.001

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Dynamic opacity based on distance and time
            const opacity = (1 - distance / maxDistance) * (0.8 + Math.sin(time * 0.5) * 0.2)

            // Alternate between green and yellow connections
            const colorIndex = (i + j) % 2
            const connectionColor =
              colorIndex === 0 ? `rgba(13, 157, 88, ${opacity * 0.15})` : `rgba(255, 204, 0, ${opacity * 0.1})`

            ctx.beginPath()
            ctx.strokeStyle = connectionColor
            ctx.lineWidth = 0.5 + (1 - distance / maxDistance) * 0.5
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
          }
        }
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" />
}
