'use client'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Featured Projects', href: '/featured-projects' },
  { label: 'Compare', href: '/compare' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-brand">
          Hari Properties
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-primary" aria-label="Schedule a consultation">
            Schedule a consultation
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-gold hover:text-brand md:hidden"
        >
          <span className="text-base font-semibold">Menu</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200/70 bg-white/95 px-6 py-5 shadow-soft md:hidden animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-3xl px-4 py-3 text-sm font-semibold text-brand transition hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90" onClick={() => setMenuOpen(false)}>
              Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
