import SectionHeader from './SectionHeader'

const services = [
  {
    title: 'Property Buying',
    description: 'Curated residential and investment opportunities with expert negotiation and professional closing assistance.',
    svg: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Property Selling',
    description: 'Strategic marketing, premium listing presentation, buyer validation, and maximum return optimization.',
    svg: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
      </svg>
    ),
  },
  {
    title: 'Property Rental',
    description: 'Comprehensive tenant screening, professional rental management, and seamless lease support services.',
    svg: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
      </svg>
    ),
  },
  {
    title: 'Investment Advisory',
    description: 'Market insights, development due diligence, portfolio guidance, and long-term return optimization.',
    svg: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Property Valuation',
    description: 'Professional property assessment, market analysis, legal compliance verification, and documentation support.',
    svg: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Commercial Real Estate',
    description: 'Corporate workspace solutions, office leasing, retail spaces, and strategic business property advisory.',
    svg: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-slate-200/50">
      <SectionHeader 
        title="Our Services" 
        subtitle="Bespoke advisory and real estate solutions designed for sophisticated buyers." 
      />

      {/* Luxury Editorial Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div 
            key={service.title} 
            className="group rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft transition-all duration-300 hover:shadow-2xl hover:border-gold/40 flex flex-col justify-between h-full"
          >
            <div>
              {/* SVG Geometric Badge */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-slate-950">
                {service.svg}
              </div>

              {/* Header & Body */}
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-brand font-serif transition-colors duration-200 group-hover:text-gold">
                {service.title}
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>

            {/* Learn More Luxury Trigger */}
            <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold opacity-80 group-hover:opacity-100 transition-opacity duration-200">
              <span>Learn more</span>
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Elegant Luxury CTA Panel */}
      <div className="mt-24 rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10 text-center lg:p-16 shadow-2xl">
        <h3 className="text-3xl font-bold text-white text-force-white font-serif leading-snug max-w-xl mx-auto sm:text-4xl">
          Ready to Find Your Perfect Property?
        </h3>
        <p className="mt-4 text-base text-slate-300 text-force-slate-300 max-w-2xl mx-auto">
          Our expert real estate advisors are ready to assist you with every step of your residential or investment property acquisition.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="btn-primary">
            Schedule Private Consultation
          </a>
          <a href="/featured-projects" className="btn-ghost">
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  )
}
