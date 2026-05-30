import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/20 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <p className="text-xl font-bold text-white">Hari Properties</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">Premium real estate advisory serving buyers, sellers, investors and tenants across Karnataka with integrity, expertise, and trusted partnership.</p>
            <div className="mt-6 flex items-center gap-3">
              <a aria-label="Instagram" href="https://instagram.com" className="rounded-full bg-white/10 p-2.5 text-white hover:bg-gold/20 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 11-2.881-.001 1.44 1.44 0 012.881.001z" />
                </svg>
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" className="rounded-full bg-white/10 p-2.5 text-white hover:bg-gold/20 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a aria-label="Facebook" href="https://facebook.com" className="rounded-full bg-white/10 p-2.5 text-white hover:bg-gold/20 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white">Company</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link href="/about" className="transition hover:text-white hover:translate-x-1">About Us</Link></li>
              <li><Link href="/featured-projects" className="transition hover:text-white hover:translate-x-1">Featured Projects</Link></li>
              <li><Link href="/services" className="transition hover:text-white hover:translate-x-1">Services</Link></li>
              <li><Link href="/compare" className="transition hover:text-white hover:translate-x-1">Compare Properties</Link></li>
              <li><Link href="/contact" className="transition hover:text-white hover:translate-x-1">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-white">Services</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><a href="#" className="transition hover:text-white hover:translate-x-1">Property Buying</a></li>
              <li><a href="#" className="transition hover:text-white hover:translate-x-1">Property Selling</a></li>
              <li><a href="#" className="transition hover:text-white hover:translate-x-1">Property Rental</a></li>
              <li><a href="#" className="transition hover:text-white hover:translate-x-1">Investment Advisory</a></li>
              <li><a href="#" className="transition hover:text-white hover:translate-x-1">Commercial Real Estate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white">Get in Touch</h4>
            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Email</p>
                <a href="mailto:hello@hariproperties.in" className="mt-1 text-slate-300 hover:text-white transition">hello@hariproperties.in</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Phone</p>
                <a href="tel:+919000012345" className="mt-1 text-slate-300 hover:text-white transition">+91 90000 12345</a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Address</p>
                <p className="mt-1 text-slate-300">12 Prestige Plaza<br />Kuvempunagar, Mysuru<br />Karnataka 570023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-slate-800/50"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">© {currentYear} Hari Properties. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition">Terms & Conditions</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
