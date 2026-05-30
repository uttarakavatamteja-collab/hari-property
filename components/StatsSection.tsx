import SectionHeader from './SectionHeader'
import { companyStats } from '../lib/data'

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader title="Company Statistics" subtitle="Trusted performance and market leadership from our Karnataka team." />

      <div className="grid gap-6 sm:grid-cols-3">
        {companyStats.map((stat) => (
          <div key={stat.label} className="rounded-[2rem] border border-slate-200/80 bg-white p-8 text-center shadow-soft">
            <p className="text-4xl font-semibold text-brand">{stat.value}</p>
            <p className="mt-3 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
