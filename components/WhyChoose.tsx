import SectionHeader from './SectionHeader'

const reasons = [
  {
    title: 'Trusted Local Expertise',
    description: 'Deep experience across Mysuru and Karnataka ensures every property is vetted for quality, value and growth.',
  },
  {
    title: 'Transparent Advisory',
    description: 'Clear insights, honest proposals, and consistent communication at every stage of your property journey.',
  },
  {
    title: 'Premium Buyer Experience',
    description: 'From curated visits to negotiation support, we make real estate feel effortless and secure.',
  },
  {
    title: 'End-to-End Support',
    description: 'Legal, finance, staging and handover services backed by a dedicated Hari Properties relationship manager.',
  },
]

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader title="Why Hari Properties" subtitle="Experience real estate with a premium, local partner." />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason) => (
          <div key={reason.title} className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
            <div className="mb-4 inline-flex rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Premium
            </div>
            <h3 className="text-xl font-semibold text-brand">{reason.title}</h3>
            <p className="mt-4 text-slate-600 leading-7">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
