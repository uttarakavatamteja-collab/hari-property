import Link from 'next/link'
import SectionHeader from '../../components/SectionHeader'

export const metadata = {
  title: 'Services | Hari Properties',
  description: 'Explore Hari Properties real estate services for buying, selling, renting and investment advisory in Karnataka.',
}

const services = [
  {
    title: 'Residential Buying',
    description: 'Curated homes across Mysuru, Bengaluru and premium neighbourhoods with personalised search support.',
  },
  {
    title: 'Sales & Marketing',
    description: 'Strategic listing services, premium staging and buyer qualification to maximise value for sellers.',
  },
  {
    title: 'Leasing & Rentals',
    description: 'Tenant screening, lease negotiation and property management guidance for landlords and renters.',
  },
  {
    title: 'Investment Advisory',
    description: 'Market analysis, project evaluation and portfolio guidance focused on long-term capital growth.',
  },
  {
    title: 'Legal & Documentation',
    description: 'Transparent transaction support including due diligence, agreements and handover coordination.',
  },
  {
    title: 'Project Sourcing',
    description: 'Exclusive access to pre-launch and premium projects selected for performance and lifestyle.',
  },
]

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <header className="rounded-[2.5rem] border border-slate-200/80 bg-white p-10 shadow-soft">
        <SectionHeader title="Our Services" subtitle="Full-service real estate solutions designed for discerning clients." />
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          Hari Properties delivers personalised property services across Karnataka, with a premium experience for buyers, sellers, investors and tenants.
        </p>
      </header>

      <section className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-8 text-white shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-gold/20 bg-slate-950/95 p-10 text-white shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-gold">Premium support</p>
            <h2 className="mt-4 text-3xl font-semibold">One partner for every real estate need.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Work with our team for tailored property advisory, negotiation support and seamless transaction management across Karnataka.
            </p>
          </div>
          <div className="space-y-3 text-slate-300">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Book a consultation</p>
            <p className="text-lg font-semibold text-white">hello@hariproperties.in</p>
            <p className="text-lg font-semibold text-white">+91 90000 12345</p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
