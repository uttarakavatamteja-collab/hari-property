import SectionHeader from './SectionHeader'

const reasons = [
  {
    title: 'Local Market Expertise',
    description: 'Deep experience across Mysuru and Karnataka ensures every property is vetted for quality, value and growth potential.',
    icon: '🗺️',
  },
  {
    title: 'Verified Properties',
    description: 'All listings undergo rigorous verification and compliance checks for total transparency and buyer confidence.',
    icon: '✓',
  },
  {
    title: 'Transparent Advisory',
    description: 'Clear insights, honest proposals, and consistent communication at every stage of your property journey.',
    icon: '🎯',
  },
  {
    title: 'End-to-End Support',
    description: 'Legal, finance, staging and handover services backed by a dedicated Hari Properties relationship manager.',
    icon: '🤝',
  },
]

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeader 
        title="Why Choose Hari Properties" 
        subtitle="Premium service backed by local expertise and proven results." 
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason, index) => (
          <div 
            key={reason.title} 
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg hover:border-gold/30"
          >
            {/* Background Accent */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/5 transition-all group-hover:scale-150 group-hover:bg-gold/10"></div>

            {/* Icon */}
            <div className="relative inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-slate-100 text-2xl">
              {reason.icon}
            </div>

            {/* Content */}
            <h3 className="relative mt-6 text-xl font-bold text-brand">{reason.title}</h3>
            <p className="relative mt-3 text-slate-600 leading-7">{reason.description}</p>

            {/* Bottom Accent */}
            <div className="relative mt-6 h-1 w-8 bg-gradient-to-r from-gold to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Trust Banner */}
      <div className="mt-16 rounded-[2rem] border border-slate-200/80 bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50 p-10 lg:p-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Our Promise</p>
          <h3 className="mt-4 text-3xl font-bold text-brand">
            Helping families and businesses discover exceptional properties with complete confidence.
          </h3>
        </div>
      </div>
    </section>
  )
}
