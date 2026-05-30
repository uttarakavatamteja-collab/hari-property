import Link from 'next/link'
import SectionHeader from './SectionHeader'

export default function HomeContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Premium Consultation CTA */}
      <div className="rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-12 shadow-2xl lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-5 py-2.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gold"></span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">Let&apos;s Talk Real Estate</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">
                Our expert team is ready to help you navigate the real estate market with confidence. Schedule a consultation with our specialists today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold hover:bg-gold/90 px-8 py-4 font-semibold text-slate-950 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Schedule Consultation</span>
              </Link>
              <a 
                href="https://wa.me/919000012345" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold/50 hover:border-gold hover:bg-white/10 px-8 py-4 font-semibold text-white transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.567.897-2.925 2.216-3.822 3.804C2.36 9.368 2 10.857 2 12.355c0 1.504.36 2.993 1.04 4.335l-1.09 3.993 4.086-1.07c1.276.737 2.738 1.124 4.24 1.124h.004c5.541 0 10.032-4.509 10.032-10.037C22.032 6.444 17.54 1.979 12.051 1.979zm8.856 7.6c-.384-1.002-1.588-1.893-2.769-1.971-1.04-.062-2.153.264-3.72 2.851-.719 1.187-1.475 2.45-1.741 2.71-.624.563-2.02.436-3.356.436-.547 0-.98-.08-1.226-.19-1.556-.71-2.699-2.59-3.119-4.912-.167-.913-.121-1.265.304-2.556.431-1.34 1.644-3.071 2.952-3.922 1.487-.975 2.9-.536 3.830.384.586.546 1.299 1.588 1.758 2.656.188.448.474 1.104.747 1.557.273.453 1.004.942 1.542 1.053 1.08.22 2.15-.165 2.91-1.05z" />
                </svg>
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6 rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
            {/* Office */}
            <div className="rounded-lg bg-white/5 border border-white/10 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Our Office</p>
              <p className="mt-3 text-lg font-bold text-white">Mysuru, Karnataka</p>
              <p className="mt-2 text-sm text-slate-400">12 Prestige Plaza, Kuvempunagar</p>
            </div>

            {/* Email */}
            <div className="rounded-lg bg-white/5 border border-white/10 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Email Us</p>
              <a href="mailto:hello@hariproperties.in" className="mt-3 text-lg font-bold text-white hover:text-gold transition">hello@hariproperties.in</a>
            </div>

            {/* Phone */}
            <div className="rounded-lg bg-white/5 border border-white/10 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Call Us</p>
              <a href="tel:+919000012345" className="mt-3 text-lg font-bold text-white hover:text-gold transition">+91 90000 12345</a>
              <p className="mt-2 text-xs text-slate-400">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
