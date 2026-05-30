import PropertyCard from './PropertyCard'
import { Property } from '../lib/data'
import SectionHeader from './SectionHeader'

export default function FeaturedSection({ title, properties }: { title: string; properties: Property[] }) {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader title={title.toUpperCase()} subtitle={`Premium listings curated by Hari Properties` } />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </section>
  )
}
