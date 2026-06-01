import Link from 'next/link'
import SectionHeader from '../../components/SectionHeader'

export const metadata = {
  title: 'Bespoke Real Estate Services | Hari Properties',
  description: 'Explore our full suite of luxury property services in Karnataka: residential acquisitions, developer sales, investment advisory, and RERA title compliance support.',
}

const detailedServices = [
  {
    title: 'Residential Buying',
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    what: 'Tailored residential acquisition. We analyze micro-market trends, schedule private home viewings, and manage transaction negotiations to acquire your ideal home.',
    who: 'Discerning families, executive professionals, and NRI buyers looking for high-end villas or apartments in Mysuru and Bengaluru.',
    why: 'We do not push standard templates. We source off-market properties, negotiate on your behalf, and conduct independent title and zoning validation beforehand.',
  },
  {
    title: 'Developer Sales & Marketing',
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
      </svg>
    ),
    what: 'Corporate-grade listing, marketing, and transaction management. We stage your premium property, structure visual media, qualify active buyers, and secure optimal market prices.',
    who: 'Property owners and boutique developers in Karnataka seeking qualified buyers and rapid, compliant liquidations.',
    why: 'Our extensive buyer network, professional marketing media assets, and targeted digital distribution maximize listing value with absolute speed.',
  },
  {
    title: 'Investment Advisory',
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    what: 'Rigorous financial and strategic property structuring. We analyze historical market appreciations, infrastructure timelines, rental yield profiles, and exit horizons.',
    who: 'High-net-worth investors, family offices, and NRIs seeking to establish capital-appreciating real estate portfolios.',
    why: 'We deliver objective, risk-adjusted financial models. We do not promise empty returns; we back every recommendation with local municipality data.',
  },
  {
    title: 'Legal & RERA Compliance',
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    what: 'Exhaustive title search and municipal validation. We coordinate title clearances, RERA registration reviews, tax document audits, and handover safety checks.',
    who: 'Any buyer requiring independent, third-party legal validation to avoid developer delays, legal disputes, or title complications.',
    why: 'Our specialized legal team acts with absolute independence. We identify title disputes, zoning blocks, and encumbrances long before you sign.',
  },
  {
    title: 'Commercial Real Estate',
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    what: 'Corporate space procurement and asset acquisition. We secure office layouts, retail units, tech park suites, and logistics lands built to custom corporate standards.',
    who: 'Tech firms, corporate offices, retailers, and commercial tenants scaling operations in Bengaluru or Mysuru.',
    why: 'We coordinate flexible lease terms, evaluate corporate building services, and verify commercial municipal zoning clearances.',
  },
  {
    title: 'Exclusive Project Sourcing',
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2a2 2 0 012 2m-5-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
      </svg>
    ),
    what: 'Off-market access to pre-launch layouts and premium villa projects. We secure premier allocation placements, initial investor pricing, and ideal land plots.',
    who: 'Discerning investors wanting early entry and maximum equity margins in prime residential gated communities.',
    why: 'Our close founder-level developer partnerships across Karnataka grant you direct allocations before listings enter the public market.',
  },
]

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Page Header Banner */}
      <header className="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">Our Capabilities</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light font-serif text-brand leading-tight tracking-tight">
          Tailored Real Estate <span className="italic font-normal">Solutions</span>
        </h1>
        <div className="h-px w-20 bg-gold mx-auto mt-6"></div>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium pt-4">
          Hari Properties delivers bespoke real estate advisory, legal due diligence, and commercial acquisitions across Mysuru and Bengaluru, prioritizing client compliance and safety.
        </p>
      </header>

      {/* High-Contrast Premium Services Grid */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {detailedServices.map((service) => (
          <div 
            key={service.title} 
            className="group rounded-[2.5rem] border border-slate-200/80 bg-white p-8 sm:p-10 shadow-soft hover:shadow-2xl hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Geometric SVG Icon Badge */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-slate-950">
                {service.icon}
              </div>

              {/* Service Title */}
              <h2 className="mt-8 text-2xl font-light text-brand font-serif group-hover:text-gold transition-colors duration-200">
                {service.title}
              </h2>

              <div className="mt-6 space-y-5 border-t border-slate-100 pt-5 text-sm leading-relaxed">
                {/* What it is */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand">What It Is</h3>
                  <p className="mt-1 text-slate-600 font-medium">{service.what}</p>
                </div>

                {/* Who it helps */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand">Who It Helps</h3>
                  <p className="mt-1 text-slate-600 font-medium">{service.who}</p>
                </div>

                {/* Why choose us */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-gold">Why Hari Properties</h3>
                  <p className="mt-1 text-slate-600 font-semibold">{service.why}</p>
                </div>
              </div>
            </div>

            {/* Premium CTA Link */}
            <div className="mt-8 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              >
                <span>Book Intake Consultation</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Premium Dark Trust & Action Banner */}
      <section className="rounded-[3rem] border border-gold/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10 lg:p-16 text-white text-center shadow-2xl">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">Secure Your Transaction</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-light font-serif text-white max-w-xl mx-auto leading-snug">
          Bespoke Real Estate Structuring & Protection
        </h2>
        <p className="mt-4 text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-medium">
          Whether acquiring a luxury residential estate in Gokulam or negotiating a long-term corporate office lease in Bengaluru, our advisors deliver uncompromised safety.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">
            Speak with an Advisor
          </Link>
          <Link href="/featured-projects" className="btn-ghost">
            View Curated Catalog
          </Link>
        </div>
      </section>
    </main>
  )
}
