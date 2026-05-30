import Image from 'next/image'
import { builders } from '../lib/data'
import SectionHeader from './SectionHeader'

export default function BuilderShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeader 
        title="Our Strategic Partners" 
        subtitle="We collaborate with trusted builders, developers, and industry leaders who share our commitment to excellence." 
      />

      {/* Partners Grid */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {builders.map((builder, index) => (
          <div 
            key={builder.name} 
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg hover:border-gold/30"
          >
            {/* Accent Background */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 transition-all group-hover:scale-150 group-hover:bg-gold/10"></div>

            {/* Logo Container */}
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-md">
              <Image 
                src={builder.logo} 
                alt={`${builder.name} logo`} 
                width={56} 
                height={56} 
                className="object-contain" 
              />
            </div>

            {/* Content */}
            <h3 className="relative text-xl font-bold text-brand">{builder.name}</h3>
            <p className="relative mt-2 text-sm font-semibold text-gold">{builder.tagline}</p>
            <p className="relative mt-4 text-slate-600 leading-7">{builder.description}</p>

            {/* Learn More Link */}
            <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold opacity-0 transition-all group-hover:opacity-100">
              <span>Learn more</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Highlight */}
      <div className="mt-16 rounded-[2rem] border border-slate-200/80 bg-gradient-to-r from-slate-50 to-slate-100/50 p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-3 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Experience</p>
            <h4 className="mt-3 text-3xl font-bold text-brand">500+</h4>
            <p className="mt-2 text-slate-600">Projects Developed Together</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Trust</p>
            <h4 className="mt-3 text-3xl font-bold text-brand">15+</h4>
            <p className="mt-2 text-slate-600">Years of Partnership</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Impact</p>
            <h4 className="mt-3 text-3xl font-bold text-brand">10K+</h4>
            <p className="mt-2 text-slate-600">Happy Homeowners</p>
          </div>
        </div>
      </div>
    </section>
  )
}
