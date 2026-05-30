import SectionHeader from './SectionHeader'

const services = [
  {
    title: 'Property Buying',
    description: 'Curated residential and investment opportunities with expert negotiation and professional closing assistance.',
    icon: '🏠',
    color: 'from-blue-50 to-blue-100/50',
    accent: 'text-blue-600',
  },
  {
    title: 'Property Selling',
    description: 'Strategic marketing, premium listing presentation, buyer validation, and maximum return optimization.',
    icon: '📈',
    color: 'from-emerald-50 to-emerald-100/50',
    accent: 'text-emerald-600',
  },
  {
    title: 'Property Rental',
    description: 'Comprehensive tenant screening, professional rental management, and seamless lease support services.',
    icon: '🔑',
    color: 'from-purple-50 to-purple-100/50',
    accent: 'text-purple-600',
  },
  {
    title: 'Investment Advisory',
    description: 'Market insights, development due diligence, portfolio guidance, and long-term return optimization.',
    icon: '💰',
    color: 'from-gold-50/80 to-gold-100/50',
    accent: 'text-gold',
  },
  {
    title: 'Property Valuation',
    description: 'Professional property assessment, market analysis, legal compliance verification, and documentation support.',
    icon: '📊',
    color: 'from-amber-50 to-amber-100/50',
    accent: 'text-amber-600',
  },
  {
    title: 'Commercial Real Estate',
    description: 'Corporate workspace solutions, office leasing, retail spaces, and strategic business property advisory.',
    icon: '🏢',
    color: 'from-slate-50 to-slate-100/50',
    accent: 'text-slate-600',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeader 
        title="Our Services" 
        subtitle="Complete real estate solutions designed for discerning clients and sophisticated investors." 
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <div 
            key={service.title} 
            className={`group rounded-[2rem] border border-slate-200/80 bg-gradient-to-br ${service.color} p-8 shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg hover:border-gold/30`}
          >
            {/* Icon */}
            <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md text-2xl transition-transform group-hover:scale-110`}>
              {service.icon}
            </div>

            {/* Content */}
            <h3 className="mt-6 text-2xl font-bold text-brand">{service.title}</h3>
            <p className="mt-4 text-slate-600 leading-7">{service.description}</p>

            {/* Learn More Link */}
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold opacity-0 transition-all group-hover:opacity-100">
              <span>Learn more</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-[2rem] border border-gold/20 bg-gradient-to-r from-slate-950 to-slate-900 p-10 text-center lg:p-16">
        <h3 className="text-3xl font-bold text-white">Ready to find your perfect property?</h3>
        <p className="mt-4 text-lg text-slate-300">Our expert team is ready to assist you with every step of your real estate journey.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold hover:bg-gold/90 px-8 py-4 font-semibold text-slate-950 transition-all shadow-lg hover:shadow-xl">
            Schedule Consultation
          </a>
          <a href="/featured-projects" className="inline-flex items-center justify-center rounded-full border-2 border-gold/50 hover:border-gold hover:bg-white/10 px-8 py-4 font-semibold text-white transition-all">
            View Properties
          </a>
        </div>
      </div>
    </section>
  )
}
