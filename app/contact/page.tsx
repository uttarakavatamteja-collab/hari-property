import InquiryForm from '../../components/InquiryForm'

export const metadata = {
  title: 'Contact Our Concierge | Hari Properties',
  description: 'Reach our executive real estate office in Kuvempunagar, Mysuru. Schedule a private consultation or send a secure property acquisition query.',
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Editorial Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">Intake Office</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light font-serif text-brand leading-tight tracking-tight">
          Connect with Our <span className="italic font-normal">Advisors</span>
        </h1>
        <div className="h-px w-20 bg-gold mx-auto mt-6"></div>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium pt-4">
          Whether you are looking to acquire a luxury family estate in Mysuru, lease a tech workspace in Whitefield, or seek a legal RERA due diligence title audit.
        </p>
      </header>

      {/* Main Grid: Info Cards on Left, Inquiry Form on Right */}
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start mb-24">
        {/* Info Column */}
        <div className="space-y-8">
          {/* WhatsApp & Instant Concierge Card */}
          <div className="rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10 text-white shadow-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse"></span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-gold">24/7 Digital Concierge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light font-serif text-white leading-snug">
              Instant Consultation via WhatsApp
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Connect directly with our managing team for rapid property updates, off-market portfolio requests, or initial query structuring.
            </p>
            <div>
              <a 
                href="https://wa.me/919000012345?text=Hi%20Hari%20Properties%2C%20I%20would%20like%20to%20schedule%20a%20private%20real%20estate%20consultation."
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-gold hover:bg-[#c29e2f] px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                aria-label="Contact our concierge via WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.567.897-2.925 2.216-3.822 3.804C2.36 9.368 2 10.857 2 12.355c0 1.504.36 2.993 1.04 4.335l-1.09 3.993 4.086-1.07c1.276.737 2.738 1.124 4.24 1.124h.004c5.541 0 10.032-4.509 10.032-10.037C22.032 6.444 17.54 1.979 12.051 1.979zm8.856 7.6c-.384-1.002-1.588-1.893-2.769-1.971-1.04-.062-2.153.264-3.72 2.851-.719 1.187-1.475 2.45-1.741 2.71-.624.563-2.02.436-3.356.436-.547 0-.98-.08-1.226-.19-1.556-.71-2.699-2.59-3.119-4.912-.167-.913-.121-1.265.304-2.556.431-1.34 1.644-3.071 2.952-3.922 1.487-.975 2.9-.536 3.83.384.586.546 1.299 1.588 1.758 2.656.188.448.474 1.104.747 1.557.273.453 1.004.942 1.542 1.053 1.08.22 2.15-.165 2.91-1.05z" />
                </svg>
                <span>WhatsApp Intake Support</span>
              </a>
            </div>
          </div>

          {/* Official Coordinates Card */}
          <div className="rounded-[2.5rem] border border-slate-200/80 bg-white p-8 sm:p-10 shadow-soft space-y-6">
            <h2 className="text-2xl font-light font-serif text-brand">Office Coordinates</h2>
            <div className="grid gap-6 border-t border-slate-100 pt-6 text-sm">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Direct Hotline</p>
                <a href="tel:+919000012345" className="mt-1 block text-lg font-bold text-brand font-serif hover:text-gold transition">
                  +91 90000 12345
                </a>
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Electronic Mail</p>
                <a href="mailto:hello@hariproperties.in" className="mt-1 block text-lg font-bold text-brand font-serif hover:text-gold transition">
                  hello@hariproperties.in
                </a>
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Executive Suite</p>
                <p className="mt-1 text-slate-600 font-semibold leading-relaxed">
                  12 Prestige Plaza, Kuvempunagar, Mysuru, Karnataka 570023
                </p>
              </div>
            </div>
          </div>

          {/* Visual Google Maps Embed Locator Card */}
          <div className="group rounded-[2.5rem] border border-slate-200/80 bg-white p-8 sm:p-10 shadow-soft hover:border-gold/40 transition-all duration-300 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Location Map</p>
              <h3 className="text-xl font-bold font-serif text-brand">Kuvempunagar, Mysuru</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold max-w-sm">
                Located centrally on the high street, Prestige Plaza hosts our luxury consultations and legal handovers.
              </p>
              <div className="pt-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=12+Prestige+Plaza+Kuvempunagar+Mysuru+Karnataka"
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-[#c29e2f] px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md transition"
                  aria-label="Open Kuvempunagar office on Google Maps"
                >
                  <span>Open Directions Map</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Ambient Background Circle */}
            <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-slate-50 border border-slate-100 group-hover:scale-110 transition duration-300"></div>
          </div>
        </div>

        {/* Lead Intake Form Column */}
        <div>
          <InquiryForm 
            heading="Private Property Inquiry" 
            subtext="Please specify your investment requirements, locality preferences, and timeline, and Rohan Hari or a director manager will reach out within one business day." 
          />
        </div>
      </div>
    </main>
  )
}
