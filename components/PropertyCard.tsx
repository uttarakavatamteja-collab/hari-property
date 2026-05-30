import Image from 'next/image'
import Link from 'next/link'
import { Property } from '../lib/data'

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-soft transition-transform will-change-transform hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:border-gold/30 card-accent">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-800 shadow">{property.rating} ★</div>
        <div className="absolute right-4 top-4 rounded-full bg-emerald/95 px-3 py-1 text-xs font-semibold text-white shadow">{property.category.toUpperCase()}</div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
            {property.category}
          </span>
          <span className="text-sm font-semibold text-emerald">{property.rating} ★</span>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-brand">{property.title}</h3>
          <p className="mt-2 text-sm text-slate-500">{property.locality}, {property.city}</p>
        </div>

        <div className="grid gap-2 rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
          <span className="font-medium text-slate-800">{property.type}</span>
          <span>{property.area}</span>
          <span>{property.bedrooms ? `${property.bedrooms} BHK · ${property.bathrooms} Baths` : property.type}</span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Price</p>
            <p className="text-xl font-semibold text-brand">{property.price}</p>
          </div>
          <Link href={`/property/${property.slug}`} className="btn-secondary" aria-label={`View details for ${property.title}`}>
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}
