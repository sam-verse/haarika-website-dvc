"use client"

import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        {/* Soft animated pulse ring */}
        <span className="absolute w-36 h-36 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#0D9D58]/30 to-[#FFCC00]/20 animate-pulse-ring" />
        {/* Animated logo with scale, fade-in, and slow rotation */}
        <div className="relative z-10">
          <Image
            src="/logo-haarika.png"
            alt="Haarika Logo"
            width={140}
            height={140}
            className="w-24 h-24 sm:w-36 sm:h-36 animate-logo-pop animate-logo-rotate"
            priority
          />
        </div>
      </div>
      <style jsx global>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2.4s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @keyframes logo-pop {
          0% { opacity: 0; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-logo-pop {
          animation: logo-pop 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes logo-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(2deg); }
        }
        .animate-logo-rotate {
          animation: logo-rotate 3.5s ease-in-out infinite alternate;
        }
      `}</style>
    </main>
  )
}
