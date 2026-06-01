import Link from 'next/link'

export default function HomeContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-slate-200/50">
      {/* Concierge Booking Billboard */}
      <div className="rounded-[3rem] border border-gold/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10 shadow-2xl lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            {/* Elegant Luxury Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-gold">Private Concierge</span>
            </div>

            {/* Headline in Cormorant Display */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white text-force-white leading-tight font-serif">
                Begin Your Property Journey
              </h2>
              <p className="max-w-xl text-base text-slate-300 text-force-slate-300 leading-relaxed font-medium">
                Schedule a private, one-on-one consultation with our dedicated real estate advisors. Let us help you navigate Karnataka&apos;s prime markets with absolute ease and confidentiality.
              </p>
            </div>

            {/* Custom Contact Channels */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/contact" 
                className="btn-primary cursor-pointer text-center"
              >
                Schedule Private Consultation
              </Link>
              <a 
                href="https://wa.me/919000012345?text=Hi%20Hari%20Properties%2C%20I%20would%20like%20to%20schedule%20a%20consultation." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-ghost cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.567.897-2.925 2.216-3.822 3.804C2.36 9.368 2 10.857 2 12.355c0 1.504.36 2.993 1.04 4.335l-1.09 3.993 4.086-1.07c1.276.737 2.738 1.124 4.24 1.124h.004c5.541 0 10.032-4.509 10.032-10.037C22.032 6.444 17.54 1.979 12.051 1.979zm8.856 7.6c-.384-1.002-1.588-1.893-2.769-1.971-1.04-.062-2.153.264-3.72 2.851-.719 1.187-1.475 2.45-1.741 2.71-.624.563-2.02.436-3.356.436-.547 0-.98-.08-1.226-.19-1.556-.71-2.699-2.59-3.119-4.912-.167-.913-.121-1.265.304-2.556.431-1.34 1.644-3.071 2.952-3.922 1.487-.975 2.9-.536 3.83.384.586.546 1.299 1.588 1.758 2.656.188.448.474 1.104.747 1.557.273.453 1.004.942 1.542 1.053 1.08.22 2.15-.165 2.91-1.05z" />
                </svg>
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Luxury Concierge Address Card */}
          <div className="space-y-6 rounded-[2.5rem] bg-white/5 border border-white/10 p-8 backdrop-blur-md">
            {/* Office */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold">Executive Office</p>
              <p className="mt-2 text-xl font-bold text-white font-serif tracking-wide">Mysuru, Karnataka</p>
              <p className="mt-1 text-sm text-slate-400 font-medium">12 Prestige Plaza, Kuvempunagar</p>
            </div>

            {/* Email */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold">Electronic Mail</p>
              <a href="mailto:hello@hariproperties.in" className="mt-2 block text-lg font-bold text-white font-serif tracking-wide hover:text-gold transition">
                hello@hariproperties.in
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold">Direct Hotline</p>
              <a href="tel:+919000012345" className="mt-2 block text-xl font-bold text-white font-serif tracking-wide hover:text-gold transition">
                +91 90000 12345
              </a>
              <p className="mt-1 text-xs text-slate-400 font-medium">Monday to Saturday, 9:00 AM to 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
