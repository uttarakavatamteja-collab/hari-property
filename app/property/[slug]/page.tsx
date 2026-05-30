import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compareProperties, properties } from '../../../lib/data'
import InquiryForm from '../../../components/InquiryForm'

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = properties.find((item) => item.slug === params.slug)

  if (!property) {
    return {
      title: 'Property not found | Hari Properties',
      description: 'The requested Hari Properties listing was not be found.',
    }
  }

  return {
    title: `${property.title} | Hari Properties`,
    description: `${property.title} in ${property.locality}, ${property.city}. ${property.description}`,
    openGraph: {
      title: `${property.title} | Hari Properties`,
      description: property.description,
      type: 'website',
      url: `https://hariproperties.in/property/${property.slug}`,
      images: [
        {
          url: property.image,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
  }
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = properties.find((item) => item.slug === params.slug)

  if (!property) {
    return notFound()
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-accent">{property.category} listing</p>
          <h1 className="mt-3 text-4xl font-semibold text-brand sm:text-5xl">{property.title}</h1>
          <p className="mt-3 text-sm text-slate-600">{property.locality}, {property.city} • {property.type}</p>
        </div>
        <Link href="/compare" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
          Compare with similar projects
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <section className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {property.gallery.map((image) => (
              <div key={image} className="relative overflow-hidden rounded-[2rem] bg-slate-100 h-64">
                <Image src={image} alt={property.title} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="rounded-[2.25rem] border border-slate-200/80 bg-white p-8 shadow-soft">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">{property.status}</span>
              <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">{property.rating} ★</span>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Price</p>
                <p className="mt-2 text-xl font-semibold text-brand">{property.price}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Area</p>
                <p className="mt-2 text-xl font-semibold text-brand">{property.area}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Builder</p>
                <p className="mt-2 text-xl font-semibold text-brand">{property.developer}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-slate-200/80 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand">Overview</h2>
            <p className="mt-4 text-slate-600 leading-7">{property.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-700 shadow-sm">
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-8">
          <InquiryForm propertyTitle={property.title} />

          <div className="rounded-[2.25rem] border border-slate-200/80 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand">Property details</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-800">Locality:</span> {property.locality}</p>
              <p><span className="font-semibold text-slate-800">City:</span> {property.city}</p>
              <p><span className="font-semibold text-slate-800">Type:</span> {property.type}</p>
              <p><span className="font-semibold text-slate-800">Budget:</span> {property.budget}</p>
              <p><span className="font-semibold text-slate-800">Bedrooms:</span> {property.bedrooms}</p>
              <p><span className="font-semibold text-slate-800">Bathrooms:</span> {property.bathrooms}</p>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-slate-200/80 bg-slate-50 p-8 text-slate-700 shadow-soft">
            <h3 className="text-xl font-semibold">Compare preview</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {compareProperties.slice(0, 3).map((item) => (
                <li key={item.slug} className="rounded-3xl border border-slate-200 bg-white p-4">
                  <p className="font-semibold text-slate-800">{item.title}</p>
                  <p className="mt-1 text-slate-500">{item.city} • {item.type}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}
