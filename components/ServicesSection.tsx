import SectionHeader from './SectionHeader'

const services = [
  {
    title: 'Property Buying',
    description: 'Curated residential and investment opportunities with negotiation and closing assistance.',
  },
  {
    title: 'Property Selling',
    description: 'Strategic marketing, premium listing presentation and buyer validation for top value.',
  },
  {
    title: 'Property Rental',
    description: 'Tenant screening, rental management and lease support tailored to landlords and tenants.',
  },
  {
    title: 'Investment Consulting',
    description: 'Market insights, development due diligence and portfolio advisory for long-term returns.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader title="Our Services" subtitle="Full-service real estate solutions designed for discerning clients." />

      <div className="grid gap-6 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-8 text-white shadow-soft">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
