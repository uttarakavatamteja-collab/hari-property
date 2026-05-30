import PropertyCard from './PropertyCard'
import { Property } from '../lib/data'
import SectionHeader from './SectionHeader'

export default function FeaturedSection({ title, properties }: { title: string; properties: Property[] }) {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeader 
        title={title} 
        subtitle="Handpicked luxury properties across Karnataka's most sought-after locations" 
      />

      {properties.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-12 text-center">
          <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
          </svg>
          <p className="mt-4 text-slate-600 font-medium">No properties available</p>
        </div>
      )}
    </section>
  )
}
