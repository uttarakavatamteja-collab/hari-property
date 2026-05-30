import SectionHeader from './SectionHeader'
import { companyStats } from '../lib/data'

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeader 
        title="Our Track Record" 
        subtitle="Proven expertise delivering exceptional results for our clients across Karnataka." 
      />

      <div className="grid gap-8 sm:grid-cols-3">
        {companyStats.map((stat, index) => (
          <div 
            key={stat.label} 
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-10 text-center shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg hover:border-gold/30"
          >
            {/* Accent Circle Background */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 transition-all group-hover:scale-150 group-hover:bg-gold/10"></div>

            {/* Stat Value */}
            <p className="relative text-5xl sm:text-6xl font-bold bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
              {stat.value}
            </p>

            {/* Stat Label */}
            <p className="relative mt-4 text-slate-600 font-semibold text-sm">{stat.label}</p>

            {/* Divider Line */}
            <div className="relative mt-6 h-1 w-12 mx-auto bg-gradient-to-r from-gold to-transparent rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Trust Statement */}
      <div className="mt-16 rounded-[2rem] border border-slate-200/80 bg-gradient-to-r from-slate-50 to-slate-100/50 p-10 lg:p-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Why Hari Properties</p>
        <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-brand">
          We turn real estate dreams into reality with integrity, expertise, and personalized service.
        </h3>
      </div>
    </section>
  )
}
