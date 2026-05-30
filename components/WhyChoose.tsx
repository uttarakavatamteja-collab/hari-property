import SectionHeader from './SectionHeader'

const reasons = [
  {
    num: '01',
    title: 'Local Market Expertise',
    description: 'Deep experience across Mysuru and Karnataka ensures every property is vetted for quality, value and growth potential.',
  },
  {
    num: '02',
    title: 'Verified Properties',
    description: 'All listings undergo rigorous verification and compliance checks for total transparency and buyer confidence.',
  },
  {
    num: '03',
    title: 'Transparent Advisory',
    description: 'Clear insights, honest proposals, and consistent communication at every stage of your property journey.',
  },
  {
    num: '04',
    title: 'End-to-End Support',
    description: 'Legal, finance, staging and handover services backed by a dedicated Hari Properties relationship manager.',
  },
]

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-slate-200/50">
      <SectionHeader 
        title="Why Choose Hari Properties" 
        subtitle="Premium service backed by local expertise and proven results." 
      />

      {/* Luxury Reasons Grid */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <div 
            key={reason.title} 
            className="group relative flex flex-col justify-between border-t border-slate-200 pt-8 transition-all duration-300 hover:border-gold"
          >
            <div>
              {/* Gold Cormorant Number */}
              <p className="text-4xl font-light font-serif text-gold/80 group-hover:text-gold transition-colors duration-300">
                {reason.num}
              </p>
              
              {/* Header */}
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-brand font-serif">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-medium">
                {reason.description}
              </p>
            </div>

            {/* Subtle Slide Accent */}
            <div className="mt-8 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-16"></div>
          </div>
        ))}
      </div>

      {/* Editorial Trust Banner */}
      <div className="mt-20 border-t border-b border-gold/40 py-12 text-center max-w-4xl mx-auto">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-gold">Our Promise</p>
        <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light font-serif text-brand leading-relaxed max-w-3xl mx-auto italic">
          &ldquo;Helping families and businesses discover exceptional properties with complete and absolute confidence.&rdquo;
        </h3>
      </div>
    </section>
  )
}
