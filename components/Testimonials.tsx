import Image from 'next/image'
import SectionHeader from './SectionHeader'
import { testimonials } from '../lib/data'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader title="Customer Testimonials" subtitle="Hear from purchasers, investors and owners who trust Hari Properties." />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft">
            <p className="text-slate-600 leading-7">“{item.quote}”</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Photo of ${item.name}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-semibold text-brand">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}, {item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
