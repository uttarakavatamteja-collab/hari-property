import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { testimonials } from '../lib/data'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-slate-200/50">
      <SectionHeader 
        title="Trusted by Discerning Clients" 
        subtitle="Real stories from homeowners and sophisticated investors who chose Hari Properties." 
      />

      {/* Luxury Editorial Review Cards Grid */}
      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((item) => (
          <div 
            key={item.name} 
            className="group flex flex-col justify-between rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft transition-all duration-300 hover:shadow-2xl hover:border-gold/40"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-base">★</span>
                ))}
              </div>

              {/* quote text in Cormorant Italic */}
              <blockquote className="mt-6 text-xl text-slate-700 font-medium font-serif leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author details with verified badge */}
            <div className="mt-10 flex items-center gap-4 border-t border-slate-100 pt-6">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={item.image}
                  alt={`Photo of ${item.name}`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold text-brand text-sm tracking-tight">{item.name}</p>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                  {item.role} &middot; {item.location}
                </p>
              </div>
              {/* Verified Badge */}
              <svg className="h-5 w-5 text-gold opacity-60 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
