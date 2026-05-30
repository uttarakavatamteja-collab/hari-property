import Link from 'next/link'
import { compareProperties } from '../../lib/data'

export const metadata = {
  title: 'Compare Properties | Hari Properties',
  description: 'Compare premium properties side-by-side with Hari Properties to select the best residential, commercial or rental option.',
}

export default function ComparePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-accent">Property comparison</p>
          <h1 className="mt-3 text-4xl font-semibold text-brand sm:text-5xl">Compare premium properties side-by-side</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Quickly evaluate top listings by price, area, developer credibility and amenities. Our concise comparison makes high-value decisions faster.
          </p>
        </div>
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
          Back to home
        </Link>
      </div>

      <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white shadow-soft">
        <div className="grid gap-6 border-b border-slate-200 px-6 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 sm:grid-cols-4">
          <span className="col-span-1">Feature</span>
          {compareProperties.map((property) => (
            <span key={property.slug} className="text-center">{property.title}</span>
          ))}
        </div>

        <div className="divide-y divide-slate-200 px-6 py-6 text-sm text-slate-600">
          <div className="grid gap-6 py-5 sm:grid-cols-4">
            <span className="font-semibold text-slate-800">Location</span>
            {compareProperties.map((property) => (
              <span key={`${property.slug}-location`} className="text-center">{property.locality}, {property.city}</span>
            ))}
          </div>
          <div className="grid gap-6 py-5 sm:grid-cols-4">
            <span className="font-semibold text-slate-800">Price</span>
            {compareProperties.map((property) => (
              <span key={`${property.slug}-price`} className="text-center font-semibold text-brand">{property.price}</span>
            ))}
          </div>
          <div className="grid gap-6 py-5 sm:grid-cols-4">
            <span className="font-semibold text-slate-800">Type</span>
            {compareProperties.map((property) => (
              <span key={`${property.slug}-type`} className="text-center">{property.type}</span>
            ))}
          </div>
          <div className="grid gap-6 py-5 sm:grid-cols-4">
            <span className="font-semibold text-slate-800">Developer</span>
            {compareProperties.map((property) => (
              <span key={`${property.slug}-developer`} className="text-center">{property.developer}</span>
            ))}
          </div>
          <div className="grid gap-6 py-5 sm:grid-cols-4">
            <span className="font-semibold text-slate-800">Amenities</span>
            {compareProperties.map((property) => (
              <span key={`${property.slug}-amenities`} className="text-center">{property.amenities.join(', ')}</span>
            ))}
          </div>
          <div className="grid gap-6 py-5 sm:grid-cols-4">
            <span className="font-semibold text-slate-800">Category</span>
            {compareProperties.map((property) => (
              <span key={`${property.slug}-category`} className="text-center uppercase tracking-[0.08em] text-slate-500">{property.category}</span>
            ))}
          </div>
        </div>

        <div className="px-6 py-6">
          <p className="text-sm text-slate-600">Need help choosing? <a href="/contact" className="font-semibold text-brand">Contact our advisors</a> for a personalised recommendation.</p>
        </div>
      </div>
    </main>
  )
}
