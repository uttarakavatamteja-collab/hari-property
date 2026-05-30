import Image from 'next/image'
import { builders } from '../lib/data'
import SectionHeader from './SectionHeader'

export default function BuilderShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader title="Trusted partners" subtitle="Exclusive developers and partners selected by Hari Properties." />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {builders.map((builder) => (
          <div key={builder.name} className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-gold/40">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
              <Image src={builder.logo} alt={builder.name} width={56} height={56} className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-brand">{builder.name}</h3>
            <p className="mt-2 text-slate-600">{builder.tagline}</p>
            <p className="mt-4 text-sm leading-7 text-slate-500">{builder.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
