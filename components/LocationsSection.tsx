import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { featuredLocations } from '../lib/data'

export default function LocationsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-slate-200/50">
      <SectionHeader 
        title="Featured Locations" 
        subtitle="Explore premium real estate markets across prime Karnataka destinations." 
      />

      {/* Luxury Destination Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {featuredLocations.map((location) => (
          <div 
            key={location.name} 
            className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:shadow-2xl hover:border-gold/40"
          >
            {/* Immersive Image Container */}
            <div className="relative h-80 overflow-hidden bg-slate-100">
              <Image
                src={location.image}
                alt={`${location.name} lifestyle destination`}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              {/* Gold glassmorphic count badge */}
              <div className="absolute right-4 top-4 rounded-full bg-slate-950/80 border border-white/10 px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-widest text-gold shadow-lg backdrop-blur-md">
                {location.properties} Listings
              </div>
            </div>

            {/* Content Brochure Panel */}
            <div className="space-y-4 p-8">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold">Prime Market</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-brand font-serif transition-colors duration-200 group-hover:text-gold">
                  {location.name}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {location.description}
              </p>

              {/* Browse Destination Trigger */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  View brochure
                </span>
                <svg className="h-4 w-4 text-gold opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Luxury Market Opportunity Highlight Billboard */}
      <div className="mt-20 rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-r from-slate-50 via-gold-50/10 to-slate-50 p-10 lg:p-14 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold">Market Opportunity</p>
            <h3 className="text-2xl font-bold text-brand font-serif">Growing Demand</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Karnataka&apos;s premium real estate sector is experiencing robust, long-term appreciation with elevated demand for luxury residential properties and smart workspaces.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold">Investment Potential</p>
            <h3 className="text-2xl font-bold text-brand font-serif">Strong Returns</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Prime holdings in Mysuru and Bengaluru showcase a historical trend of stable capital growth and high yields, delivering exceptional value for high-net-worth portfolios.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold">Expert Guidance</p>
            <h3 className="text-2xl font-bold text-brand font-serif">Local Knowledge</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Our seasoned advisory specialists provide in-depth micro-market statistics, legal compliance auditing, and strategic buying counsel to ensure absolute transactional success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
