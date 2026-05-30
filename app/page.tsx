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
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 min-h-[95vh] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury property background" 
            fill 
            sizes="100vw" 
            className="object-cover opacity-85" 
            priority 
          />
          {/* Multi-layered premium gradient overlay for maximum readability and luxury depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 w-full">
          <div className="max-w-4xl space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-5 py-2.5 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Your Trusted Partner in Real Estate
              </span>
            </div>

            {/* Main Headline & Subheadline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
                Premium Real Estate Advisory Across Karnataka
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Discover exceptional residential, commercial, and investment properties with confidence. From Mysuru to Bengaluru, we deliver bespoke advisory services backed by deep local market expertise.
              </p>
            </div>

            {/* Integrated Luxury Quick Search Bar */}
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-2xl max-w-2xl space-y-4">
              <div className="flex gap-4 border-b border-white/10 pb-3">
                {['buy', 'rent', 'commercial'].map((cat) => (
                  <button
                    key={cat}
                    className="text-xs font-extrabold uppercase tracking-widest text-slate-300 hover:text-gold transition-colors duration-200 cursor-pointer"
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
                  placeholder="Enter locality, builder, or property name..."
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
                  className="rounded-xl bg-gold hover:bg-[#c29e2f] px-8 py-3.5 text-sm font-bold text-slate-950 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                >
                  Search Now
                </button>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href="/featured-projects" 
                className="inline-flex items-center justify-center rounded-full bg-gold hover:bg-[#c29e2f] px-8 py-4 text-sm font-bold text-slate-950 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Properties
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full border border-white/50 hover:border-gold hover:bg-white/10 px-8 py-4 text-sm font-bold text-white transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </section>

      {/* Elevated Stats Section - immediately under the Hero block */}
      <StatsSection />

      {/* Full Curated Property Search Panel */}
      <section id="search-section" className="relative z-20 px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-6xl">
          <SearchPanel properties={properties} />
        </div>
      </section>

      {/* Trust & Credibility Badges */}
      <TrustBar />

      {/* Why Choose Hari Properties */}
      <WhyChoose />

      {/* Featured Properties */}
      <FeaturedSection title="Featured Properties" properties={featuredProjects} />

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

      {/* Contact & Consultation Form */}
      <HomeContactSection />
    </main>
  )
}
