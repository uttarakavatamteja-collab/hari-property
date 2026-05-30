import Image from 'next/image'
import Link from 'next/link'
import { Property } from '../lib/data'

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white shadow-soft transition-all duration-300 ease-out will-change-transform hover:scale-[1.015] hover:shadow-2xl hover:border-gold/50">
      {/* Expansive h-96 Image Frame */}
      <div className="relative h-96 overflow-hidden bg-slate-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
          priority={property.featured}
        />
        {/* Luxury Glassmorphic Rating Badge */}
        <div className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-white/20 px-4 py-2 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md">
          <span className="text-gold text-sm leading-none">★</span>
          <span>{property.rating}</span>
        </div>
        
        {/* Status badges */}
        <div className="absolute right-6 top-6 flex flex-col gap-2">
          {property.featured && (
            <span className="rounded-full bg-gold/95 px-4 py-2 text-[10px] font-extrabold text-slate-950 shadow-md backdrop-blur-sm uppercase tracking-widest">
              Featured
            </span>
          )}
          {property.newLaunch && (
            <span className="rounded-full bg-emerald/95 px-4 py-2 text-[10px] font-extrabold text-white shadow-md backdrop-blur-sm uppercase tracking-widest">
              New Launch
            </span>
          )}
        </div>
      </div>

      {/* Enlarged Content Container */}
      <div className="space-y-6 p-8 md:p-10">
        {/* Type & Title */}
        <div className="space-y-2">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            {property.type}
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-brand leading-tight transition-colors duration-200 group-hover:text-gold md:text-3xl">
            {property.title}
          </h3>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-slate-600">
          <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-sm font-semibold md:text-base">{property.locality}, {property.city}</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-slate-50/80 border border-slate-100 p-5">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Area</p>
            <p className="mt-1 font-bold text-slate-800 text-sm md:text-base">{property.area}</p>
          </div>
          {property.bedrooms > 0 && (
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Layout</p>
              <p className="mt-1 font-bold text-slate-800 text-sm md:text-base">
                {property.bedrooms} BHK · {property.bathrooms} BA
              </p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 w-full" />

        {/* Highly Prominent Price and Premium CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Price</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight text-brand md:text-3xl">
              {property.price}
            </p>
          </div>
          <Link 
            href={`/property/${property.slug}`} 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold hover:bg-[#c29e2f] px-8 py-3.5 text-sm font-bold text-slate-950 transition-all duration-200 shadow-md hover:shadow-lg hover:translate-x-0.5 cursor-pointer"
            aria-label={`View details for ${property.title}`}
          >
            <span>View Property</span>
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
