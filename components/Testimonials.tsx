import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { testimonials } from '../lib/data'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeader 
        title="Trusted by Hundreds" 
        subtitle="Real stories from homebuyers, investors, and property owners who chose Hari Properties." 
      />

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <div 
            key={item.name} 
            className="group rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition-all hover:-translate-y-2 hover:shadow-lg hover:border-gold/30"
          >
            {/* Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="h-5 w-5 text-gold" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-5 text-lg text-slate-700 font-medium leading-8">
              &ldquo;{item.quote}&rdquo;
            </blockquote>

            {/* Divider */}
            <div className="my-6 h-px bg-slate-200"></div>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-slate-100 shadow-md">
                <Image
                  src={item.image}
                  alt={`Photo of ${item.name}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold text-brand">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role} · {item.location}</p>
              </div>
              <svg className="h-5 w-5 text-gold opacity-0 transition-opacity group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Social Proof Stats */}
      <div className="mt-16 grid grid-cols-3 gap-8 rounded-[2rem] border border-slate-200/80 bg-gradient-to-r from-slate-50 to-slate-100/50 p-10 lg:p-14 text-center">
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-gold">95%</p>
          <p className="mt-3 text-sm text-slate-600 font-semibold">Client Satisfaction Rate</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-brand">120+</p>
          <p className="mt-3 text-sm text-slate-600 font-semibold">Successful Transactions</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-emerald">10+</p>
          <p className="mt-3 text-sm text-slate-600 font-semibold">Years of Experience</p>
        </div>
      </div>
    </section>
  )
}
