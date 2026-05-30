import Image from 'next/image'
import Link from 'next/link'
import { Property } from '../lib/data'

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white shadow-soft transition-all will-change-transform hover:-translate-y-3 hover:shadow-2xl hover:border-gold/50">
      <div className="relative h-80 overflow-hidden bg-slate-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          className="object-cover transition duration-500 group-hover:scale-110"
          priority={property.featured}
        />
        {/* Luxury badge */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-slate-800 shadow-lg">
          <span className="text-gold">★</span>
          <span>{property.rating}</span>
        </div>
        
        {/* Status badges */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          {property.featured && (
            <span className="rounded-full bg-gold/95 px-3 py-1 text-xs font-semibold text-slate-950 shadow">Featured</span>
          )}
          {property.newLaunch && (
            <span className="rounded-full bg-emerald/95 px-3 py-1 text-xs font-semibold text-white shadow">New Launch</span>
          )}
        </div>
      </div>

      <div className="space-y-5 p-8">
        {/* Type and Price Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{property.type}</p>
            <h3 className="mt-2 text-2xl font-bold text-brand leading-tight">{property.title}</h3>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-slate-600">
          <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-sm font-medium">{property.locality}, {property.city}</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-4">
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Area</p>
            <p className="mt-1 font-semibold text-slate-900">{property.area}</p>
          </div>
          {property.bedrooms > 0 && (
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Layout</p>
              <p className="mt-1 font-semibold text-slate-900">{property.bedrooms} BHK · {property.bathrooms} BA</p>
            </div>
          )}
        </div>

        {/* Price and CTA */}
        <div className="border-t border-slate-100 pt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Price</p>
            <p className="mt-1 text-2xl font-bold text-brand">{property.price}</p>
          </div>
          <Link 
            href={`/property/${property.slug}`} 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold hover:bg-gold/90 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label={`View details for ${property.title}`}
          >
            <span>View</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
