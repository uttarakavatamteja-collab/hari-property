'use client'

import React from 'react'

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Call Button */}
      <a
        href="tel:+919000012345"
        className="group relative flex h-14 w-14 animate-pulse-slow items-center justify-center rounded-full bg-gold shadow-lg transition-all duration-300 hover:scale-115 hover:shadow-2xl active:scale-95"
        aria-label="Call Hari Properties"
      >
        <span className="absolute -left-28 scale-0 rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all duration-300 group-hover:scale-100">
          Call Specialist
        </span>
        <svg
          className="h-6 w-6 text-slate-950 transition-transform duration-300 group-hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/919000012345?text=Hi%20Hari%20Properties%2C%20I%20am%20interested%20in%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 animate-float-slow items-center justify-center rounded-full bg-emerald shadow-lg transition-all duration-300 hover:scale-115 hover:shadow-2xl active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -left-28 scale-0 rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all duration-300 group-hover:scale-100">
          WhatsApp Chat
        </span>
        <svg
          className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.567.897-2.925 2.216-3.822 3.804C2.36 9.368 2 10.857 2 12.355c0 1.504.36 2.993 1.04 4.335l-1.09 3.993 4.086-1.07c1.276.737 2.738 1.124 4.24 1.124h.004c5.541 0 10.032-4.509 10.032-10.037C22.032 6.444 17.54 1.979 12.051 1.979zm8.856 7.6c-.384-1.002-1.588-1.893-2.769-1.971-1.04-.062-2.153.264-3.72 2.851-.719 1.187-1.475 2.45-1.741 2.71-.624.563-2.02.436-3.356.436-.547 0-.98-.08-1.226-.19-1.556-.71-2.699-2.59-3.119-4.912-.167-.913-.121-1.265.304-2.556.431-1.34 1.644-3.071 2.952-3.922 1.487-.975 2.9-.536 3.830.384.586.546 1.299 1.588 1.758 2.656.188.448.474 1.104.747 1.557.273.453 1.004.942 1.542 1.053 1.08.22 2.15-.165 2.91-1.05z" />
        </svg>
      </a>
    </div>
  )
}
