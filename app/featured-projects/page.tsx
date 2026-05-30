import SectionHeader from '../../components/SectionHeader'
import PropertyCard from '../../components/PropertyCard'
import { featuredProjects } from '../../lib/data'

export const metadata = {
  title: 'Featured Projects | Hari Properties',
  description: 'Discover the curated featured projects selected by Hari Properties for premium buyers and investors across Karnataka.',
}

export default function FeaturedProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <header className="rounded-[2.5rem] border border-slate-200/80 bg-white p-10 shadow-soft">
        <SectionHeader title="Featured Projects" subtitle="Curated premium properties selected by Hari Properties." />
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          Explore our handpicked featured projects, each selected for quality, location and long-term value.
        </p>
      </header>

      <section className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </section>
    </main>
  )
}
