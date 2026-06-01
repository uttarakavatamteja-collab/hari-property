import Image from 'next/image'
import Link from 'next/link'
import { Property } from '../lib/data'

export default function PropertyCard({ property }: { property: Property }) {
  // Determine distinct dynamic visual badges based on property status
  const getBadgeStyle = (status: string) => {
    const s = status.toLowerCase()
    if (s.includes('featured') || s.includes('premium')) {
      return 'bg-gradient-to-r from-amber-400/90 to-gold text-slate-950 border border-amber-300/30'
    } else if (s.includes('new launch') || s.includes('new listing')) {
      return 'bg-gradient-to-r from-emerald-500/90 to-teal-600 text-white border border-emerald-400/20'
    } else if (s.includes('verified')) {
      return 'bg-gradient-to-r from-blue-500/90 to-indigo-600 text-white border border-blue-400/20'
    } else if (s.includes('hot deal')) {
      return 'bg-gradient-to-r from-rose-500/90 to-orange-500 text-white border border-rose-400/20'
    } else if (s.includes('best value') || s.includes('popular')) {
      return 'bg-gradient-to-r from-violet-500/90 to-purple-600 text-white border border-violet-400/20'
    }
    return 'bg-white/90 text-slate-800 border border-slate-200'
  }

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-gold/50 text-left min-h-auto">
      {/* Expansive h-52/h-44/h-40 Image Frame with fixed aspect ratio */}
      <div className="relative aspect-[4/3] h-52 md:h-40 lg:h-44 w-full overflow-hidden bg-slate-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover w-full transition duration-700 ease-out group-hover:scale-110"
          priority={property.featured}
        />
        {/* Luxury Glassmorphic Rating Badge */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-white/20 px-3 py-1.5 text-[10px] font-bold text-slate-800 shadow-md backdrop-blur-md">
          <span className="text-gold text-xs leading-none">★</span>
          <span>{property.rating}</span>
        </div>
        
        {/* Dynamic Status Badge */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          {property.status && (
            <span className={`rounded-full px-3 py-1.5 text-[9px] font-extrabold shadow-md backdrop-blur-sm uppercase tracking-widest ${getBadgeStyle(property.status)}`}>
              {property.status}
            </span>
          )}
        </div>
      </div>

      {/* Content Container - Compact py-5 px-5 and reduced gap-3 */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        
        {/* 1. Property Type */}
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
          {property.type}
        </p>

        {/* 2. Property Name with line clamp and min-height to guarantee equal card heights */}
        <h3 className="text-lg font-medium tracking-tight text-brand leading-snug transition-colors duration-200 group-hover:text-gold font-serif line-clamp-2 min-h-[56px] lg:min-h-[64px]">
          {property.title}
        </h3>

        {/* 3. Location */}
        <div className="flex items-center gap-1.5 text-slate-500">
          <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-xs font-semibold truncate">{property.locality}, {property.city}</p>
        </div>

        {/* 4. Quick Specs: grid-cols-3 gap-2 inside a compact info box */}
        <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-50 border border-slate-100 p-2.5 text-center">
          {property.category === 'buy' && (
            <>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Layout</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.bedrooms} BHK</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Area</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.area.split(' ')[0]} sqft</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Baths</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.bathrooms} BA</span>
              </div>
            </>
          )}

          {property.category === 'rent' && (
            <>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Layout</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.bedrooms} BHK</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Area</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.area.split(' ')[0]} sqft</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Furnish</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{(property.furnishing || 'Furnished').split(' ')[0]}</span>
              </div>
            </>
          )}

          {property.category === 'commercial' && (
            <>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Area</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.area.split(' ')[0]} sqft</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Yield</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.yield || '8.5%'}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Parking</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{(property.parking || 'Yes').split(' ')[0]} spots</span>
              </div>
            </>
          )}

          {property.category === 'pg' && (
            <>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Food</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.foodIncluded ? 'Meals' : 'Self-C'}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">WiFi</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{property.wifi ? 'WiFi' : 'No WiFi'}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 rounded bg-white border border-slate-200/40">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Security</span>
                <span className="mt-0.5 font-bold text-slate-800 text-[10px] truncate max-w-full">{(property.security || 'Guard').split(' ')[0]} Sec</span>
              </div>
            </>
          )}
        </div>

        {/* 5. Developer */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <p className="text-[10px] font-bold uppercase tracking-wider truncate">Dev: {property.developer}</p>
        </div>

        {/* 6 & 7. Price & Button: Aligned mt-auto at the bottom of the card */}
        <div className="mt-auto pt-2 flex flex-col gap-2.5">
          {/* Price Header */}
          <div className="flex items-baseline justify-between">
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{(property.category === 'rent' || property.category === 'pg') ? 'Monthly Rent' : 'Price'}</span>
            <span className="text-xl font-bold tracking-tight text-brand font-serif">
              {property.price}
            </span>
          </div>

          {/* RENT/PG specifics */}
          {(property.category === 'rent' || property.category === 'pg') && property.deposit && (
            <div className="flex justify-between text-[9px] text-slate-400 leading-none">
              <span>Deposit: {property.deposit}</span>
              {property.availableFrom && <span>Avail: {property.availableFrom}</span>}
            </div>
          )}
          {property.category === 'commercial' && property.zoning && (
            <div className="flex justify-between text-[9px] text-slate-400 leading-none">
              <span>Zoning: {property.zoning}</span>
            </div>
          )}

          {/* CTA Action Button */}
          <Link 
            href={`/property/${property.slug}`} 
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-2xl bg-gold hover:bg-[#c29e2f] py-2.5 text-xs font-bold text-slate-950 transition-all duration-200 shadow-md hover:shadow-lg hover:translate-x-0.5 cursor-pointer"
            aria-label={`View details for ${property.title}`}
          >
            <span>View Details</span>
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
