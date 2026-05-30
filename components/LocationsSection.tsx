import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { featuredLocations } from '../lib/data'

export default function LocationsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeader 
        title="Featured Locations" 
        subtitle="Premium real estate advisory across key Karnataka markets with strong growth potential." 
      />

      <div className="grid gap-8 lg:grid-cols-4">
        {featuredLocations.map((location, index) => (
          <div 
            key={location.name} 
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg hover:border-gold/30"
          >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden bg-slate-100">
              <Image
                src={location.image}
                alt={`${location.name} featured market`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"></div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">{location.name}</p>
                <h3 className="mt-3 text-2xl font-bold text-brand">{location.name}</h3>
              </div>

              <p className="text-sm text-slate-600 leading-7">{location.description}</p>

              {/* Properties Count */}
              <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{location.properties} Listings</span>
                <svg className="h-5 w-5 text-gold opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Market Insights Section */}
      <div className="mt-16 rounded-[2rem] border border-slate-200/80 bg-gradient-to-r from-blue-50/50 to-slate-50 p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Market Opportunity</p>
            <h3 className="mt-4 text-2xl font-bold text-brand">Growing Demand</h3>
            <p className="mt-3 text-slate-600">Karnataka&apos;s real estate market is experiencing significant growth with increased demand for residential, commercial, and investment properties.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Investment Potential</p>
            <h3 className="mt-4 text-2xl font-bold text-brand">Strong Returns</h3>
            <p className="mt-3 text-slate-600">Properties in these markets have shown consistent appreciation, making them ideal for long-term wealth building and portfolio diversification.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Expert Guidance</p>
            <h3 className="mt-4 text-2xl font-bold text-brand">Local Knowledge</h3>
            <p className="mt-3 text-slate-600">Our team provides detailed market analysis, neighborhood insights, and strategic recommendations to help you make informed investment decisions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
