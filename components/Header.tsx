'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Featured Projects', href: '/featured-projects' },
  { label: 'Compare', href: '/compare' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = typeof globalThis !== 'undefined' ? (globalThis as any).scrollY : 0
      if (scrollPos > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    // Set initial scrolled state on mount/route change
    handleScroll()
    
    if (typeof globalThis !== 'undefined') {
      (globalThis as any).addEventListener('scroll', handleScroll)
      return () => (globalThis as any).removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  // Determine if header should have a dark background or be transparent
  // On homepage: transparent at top, translucent white when scrolled
  // On other pages: always translucent white
  const isTransparent = isHome && !scrolled

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'border-b border-transparent bg-transparent' 
          : 'border-b border-slate-200/50 bg-white/90 backdrop-blur-xl shadow-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-brand to-blue-700">
            <span className="text-sm font-bold text-white">HP</span>
          </div>
          <span 
            className={`text-xl font-bold tracking-tight transition-colors duration-300 font-serif ${
              isTransparent 
                ? 'text-white group-hover:text-gold' 
                : 'text-brand group-hover:text-gold'
            }`}
          >
            Hari Properties
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className={`hidden items-center gap-8 text-xs font-bold uppercase tracking-wider md:flex transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-slate-600'
          }`}
        >
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`transition-all duration-200 hover:text-gold relative group ${
                pathname === item.href
                  ? (isTransparent ? 'text-white font-extrabold' : 'text-brand font-extrabold')
                  : ''
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a 
            href="https://wa.me/919000012345" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
              isTransparent ? 'text-white hover:text-gold' : 'text-slate-600 hover:text-gold'
            }`}
            aria-label="Message on WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.567.897-2.925 2.216-3.822 3.804C2.36 9.368 2 10.857 2 12.355c0 1.504.36 2.993 1.04 4.335l-1.09 3.993 4.086-1.07c1.276.737 2.738 1.124 4.24 1.124h.004c5.541 0 10.032-4.509 10.032-10.037C22.032 6.444 17.54 1.979 12.051 1.979zm8.856 7.6c-.384-1.002-1.588-1.893-2.769-1.971-1.04-.062-2.153.264-3.72 2.851-.719 1.187-1.475 2.45-1.741 2.71-.624.563-2.02.436-3.356.436-.547 0-.98-.08-1.226-.19-1.556-.71-2.699-2.59-3.119-4.912-.167-.913-.121-1.265.304-2.556.431-1.34 1.644-3.071 2.952-3.922 1.487-.975 2.9-.536 3.83.384.586.546 1.299 1.588 1.758 2.656.188.448.474 1.104.747 1.557.273.453 1.004.942 1.542 1.053 1.08.22 2.15-.165 2.91-1.05z" />
            </svg>
          </a>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full bg-gold hover:bg-[#c29e2f] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md hover:shadow-lg transition-all duration-200" 
            aria-label="Schedule a consultation"
          >
            Consult Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`inline-flex items-center justify-center rounded-full border p-3 transition-colors duration-300 md:hidden cursor-pointer ${
            isTransparent 
              ? 'border-white/20 text-white bg-transparent hover:bg-white/10' 
              : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
          }`}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200/70 bg-white/95 px-6 py-5 shadow-soft md:hidden animate-fade-in-up">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-brand hover:bg-slate-100 transition" 
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-slate-200 pt-4 mt-2 space-y-3">
              <a 
                href="https://wa.me/919000012345" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-slate-100 hover:bg-slate-200 px-5 py-3 text-sm font-semibold text-brand transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.567.897-2.925 2.216-3.822 3.804C2.36 9.368 2 10.857 2 12.355c0 1.504.36 2.993 1.04 4.335l-1.09 3.993 4.086-1.07c1.276.737 2.738 1.124 4.24 1.124h.004c5.541 0 10.032-4.509 10.032-10.037C22.032 6.444 17.54 1.979 12.051 1.979zm8.856 7.6c-.384-1.002-1.588-1.893-2.769-1.971-1.04-.062-2.153.264-3.72 2.851-.719 1.187-1.475 2.45-1.741 2.71-.624.563-2.02.436-3.356.436-.547 0-.98-.08-1.226-.19-1.556-.71-2.699-2.59-3.119-4.912-.167-.913-.121-1.265.304-2.556.431-1.34 1.644-3.071 2.952-3.922 1.487-.975 2.9-.536 3.83.384.586.546 1.299 1.588 1.758 2.656.188.448.474 1.104.747 1.557.273.453 1.004.942 1.542 1.053 1.08.22 2.15-.165 2.91-1.05z" />
              </svg>
              <span>WhatsApp</span>
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center w-full rounded-full bg-gold hover:bg-gold/90 px-5 py-3 text-sm font-semibold text-slate-950 transition" 
                onClick={() => setMenuOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
