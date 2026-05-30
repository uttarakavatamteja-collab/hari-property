'use client'

import Image from 'next/image'
import Link from 'next/link'
import SearchPanel from '../components/SearchPanel'
import FeaturedSection from '../components/FeaturedSection'
import BuilderShowcase from '../components/BuilderShowcase'
import WhyChoose from '../components/WhyChoose'
import TrustBar from '../components/TrustBar'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import GoogleReviews from '../components/GoogleReviews'
import StatsSection from '../components/StatsSection'
import LocationsSection from '../components/LocationsSection'
import HomeContactSection from '../components/HomeContactSection'
import { properties, featuredProjects } from '../lib/data'

export default function HomePage() {
  return (
    <main className="bg-surface">
      {/* Cinematic Full-Screen Hero (95vh) */}
      <section className="relative overflow-hidden bg-slate-950 min-h-[95vh] flex items-center z-10">
        {/* Parallax Background Image with Multi-Layer Gradient Masks */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury modern villa facade at dusk" 
            fill 
            sizes="100vw" 
            className="object-cover opacity-80 scale-100 transition-transform duration-10000 ease-out" 
            priority 
          />
          {/* Dual luxury radial and linear navy gradients for extreme text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
        </div>

        {/* Hero Copy & Concierge Panel */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 w-full flex flex-col justify-between min-h-[75vh]">
          <div className="max-w-4xl space-y-12 my-auto">
            {/* Animated Luxury Badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-gold/10 border border-gold/40 px-5 py-2.5 backdrop-blur-md animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">
                Sotheby&apos;s &amp; Christie&apos;s Standard Real Estate
              </p>
            </div>

            {/* Headline and Subheadline in Cormorant Display */}
            <div className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] font-serif">
                Luxury Real Estate<br />
                <span className="italic font-normal">Across Karnataka</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                Exceptional homes, curated investment opportunities, and bespoke advisory services for discerning buyers and private investors.
              </p>
            </div>

            {/* Glassmorphic Quick Search Experience */}
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-2xl max-w-2xl space-y-4 animate-fade-in-up [animation-delay:400ms]">
              <div className="flex gap-4 border-b border-white/10 pb-3">
                {['buy', 'rent', 'commercial'].map((cat) => (
                  <button
                    key={cat}
                    className="text-[10px] font-extrabold uppercase tracking-widest text-slate-300 hover:text-gold transition-colors duration-200 cursor-pointer"
                    onClick={() => {
                      const searchEl = (globalThis as any).document?.getElementById('search-section');
                      if (searchEl) {
                        searchEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Where would you like to acquire... (e.g. Mysuru, Bengaluru)"
                  className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white placeholder-slate-400 outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
                  onClick={() => {
                    const searchEl = (globalThis as any).document?.getElementById('search-section');
                    if (searchEl) {
                      searchEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
                <button
                  onClick={() => {
                    const searchEl = (globalThis as any).document?.getElementById('search-section');
                    if (searchEl) {
                      searchEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="rounded-xl bg-gold hover:bg-[#c29e2f] px-8 py-3.5 text-sm font-bold text-slate-950 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-98 text-center"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Hero Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up [animation-delay:600ms]">
              <Link 
                href="/featured-projects" 
                className="btn-primary cursor-pointer text-center"
              >
                Explore Collection
              </Link>
              <Link 
                href="/contact" 
                className="btn-ghost cursor-pointer text-center"
              >
                Schedule Private Consultation
              </Link>
            </div>
          </div>

          {/* Luxury Scroll Down Indicator */}
          <div className="flex justify-center pt-8 animate-bounce select-none">
            <button
              onClick={() => {
                const trackEl = (globalThis as any).document?.getElementById('track-record');
                if (trackEl) {
                  trackEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex flex-col items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 hover:text-gold transition cursor-pointer"
            >
              <span>Scroll down</span>
              <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Accent Golden Horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      </section>

      {/* Elevated Stats Track Record Block */}
      <section id="track-record" className="scroll-mt-12">
        <StatsSection />
      </section>

      {/* Full Curated Real Estate Search Grid */}
      <section id="search-section" className="relative z-20 px-6 lg:px-8 pb-16 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <SearchPanel properties={properties} />
        </div>
      </section>

      {/* Trust & Compliance Badges */}
      <TrustBar />

      {/* Why Choose Hari Properties */}
      <WhyChoose />

      {/* Cinematic Storytelling / About Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-slate-200/50">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Company Story Text Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold">About Our Firm</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-brand font-serif leading-tight">
              Advising with <span className="italic font-normal">Distinction</span>
            </h2>
            <div className="h-px w-20 bg-gold"></div>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Established in Mysuru, Hari Properties represents the pinnacle of residential, commercial, and land advisory services across Karnataka. Over the last decade, we have structured prime acquisitions for discerning buyers, foreign investors, and premier corporate offices.
            </p>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Our core ethos revolves around complete, uncompromised transparency and legal compliance (RERA). We vet every single listing in our portfolio through extensive due diligence, enabling safe transactions and yielding robust capital appreciations.
            </p>
            <div>
              <Link href="/about" className="btn-secondary">
                Discover Our Heritage
              </Link>
            </div>
          </div>

          {/* Interactive Cinematic Image Gallery Column */}
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/5 blur-3xl -z-10"></div>
            <div className="space-y-6">
              <div className="relative h-96 overflow-hidden rounded-[2rem] border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                  alt="Luxury flat exterior"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-[2rem] border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80"
                  alt="High-end pool area"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="relative h-64 overflow-hidden rounded-[2rem] border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80"
                  alt="Luxury living lounge"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="relative h-96 overflow-hidden rounded-[2rem] border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
                  alt="Luxury modern estate facade"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Grid */}
      <FeaturedSection title="Featured Collection" properties={featuredProjects} />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Google Reviews Trust Section */}
      <GoogleReviews />

      {/* Developer Partners */}
      <BuilderShowcase />

      {/* Featured Locations */}
      <LocationsSection />

      {/* Contact & Consultation concierge Booking */}
      <HomeContactSection />
    </main>
  )
}
