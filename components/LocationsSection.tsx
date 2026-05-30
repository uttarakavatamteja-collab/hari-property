import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { featuredLocations } from '../lib/data'

export default function LocationsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader title="Featured Locations" subtitle="Premium real estate advisory across key Karnataka markets." />

      <div className="grid gap-6 lg:grid-cols-4">
        {featuredLocations.map((location) => (
          <div key={location.name} className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950/95 shadow-soft">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={location.image}
                alt={`${location.name} featured market`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="space-y-3 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-gold">{location.name}</p>
              <h3 className="text-2xl font-semibold">{location.name}</h3>
              <p className="text-sm text-slate-300">{location.description}</p>
              <p className="text-sm font-semibold text-gold">{location.properties} listings</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
