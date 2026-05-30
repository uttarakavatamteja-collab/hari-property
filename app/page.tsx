import Image from 'next/image'
import Link from 'next/link'
import SearchPanel from '../components/SearchPanel'
import FeaturedSection from '../components/FeaturedSection'
import BuilderShowcase from '../components/BuilderShowcase'
import WhyChoose from '../components/WhyChoose'
import TrustBar from '../components/TrustBar'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import StatsSection from '../components/StatsSection'
import LocationsSection from '../components/LocationsSection'
import HomeContactSection from '../components/HomeContactSection'
import { properties, featuredProjects, newLaunches } from '../lib/data'

export const metadata = {
  title: 'Hari Properties | Luxury Real Estate in Mysuru',
  description: 'Hari Properties offers premium real estate services in Mysuru and Karnataka for buyers, sellers, tenants and investors.',
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image src="/assets/images/assets/screen_01.png" alt="Hari Properties premium real estate advisory office in Mysuru" fill sizes="100vw" className="object-cover opacity-80" priority />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-8">
                <div className="inline-flex rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                  Your Trusted Partner in Real Estate
                </div>
                <div className="space-y-6">
                  <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    Hari Properties — premium real estate advisory from Mysuru to Bengaluru.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                    Trusted property search, sales, rentals and investment advisory built for discerning clients who value clarity, service and local expertise.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Link href="/services" className="btn-primary">
                    Explore our services
                  </Link>
                  <Link href="/featured-projects" className="btn-ghost">
                    View featured projects
                  </Link>
                </div>
              </div>

              <div className="grid gap-6 rounded-[2rem] bg-white/5 p-6 sm:p-8">
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-8">
                  <p className="text-sm uppercase tracking-[0.24em] text-gold">Local focus</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Karnataka market intelligence</h2>
                  <p className="mt-4 text-slate-300 leading-7">From Mysuru to Mandya, we identify premium opportunities with the details that matter most.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-slate-900/95 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Buy</p>
                    <p className="mt-3 text-xl font-semibold">Signature homes</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-900/95 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Sell</p>
                    <p className="mt-3 text-xl font-semibold">Premium marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="-mt-16 px-6 lg:px-8">
        <SearchPanel properties={properties} />
      </section>

      <WhyChoose />
      <FeaturedSection title="Featured Properties" properties={featuredProjects} />
      <StatsSection />
      <ServicesSection />
      <Testimonials />
      <LocationsSection />
      <BuilderShowcase />
      <HomeContactSection />
    </main>
  )
}
