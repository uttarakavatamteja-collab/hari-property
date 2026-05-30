import Link from 'next/link'
import SectionHeader from './SectionHeader'

export default function HomeContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[2.5rem] border border-slate-200/80 bg-slate-950/95 p-10 shadow-soft text-white">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-gold">Talk to Hari Properties</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let our experts help you find or sell your next property in Mysuru.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">Our local real estate team pairs luxury service with practical market guidance so you can make decisions with confidence.</p>
          </div>
          <div className="space-y-4 rounded-[2rem] bg-slate-900/95 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Office</p>
              <p className="mt-2 text-lg font-semibold">Mysuru, Karnataka</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
              <p className="mt-2 font-semibold">hello@hariproperties.in</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
              <p className="mt-2 font-semibold">+91 90000 12345</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
              Contact our offices
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
