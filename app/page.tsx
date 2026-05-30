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
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/images/assets/screen_01.png" 
            alt="Luxury property background" 
            fill 
            sizes="100vw" 
            className="object-cover" 
            priority 
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/40"></div>
          {/* Additional dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-5 py-2.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gold"></span>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">Your Trusted Partner in Real Estate</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Premium Real Estate Advisory Across Karnataka
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
                Helping families, investors, and businesses discover exceptional properties with confidence. From Mysuru to Bengaluru, we deliver luxury service backed by local market expertise.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/featured-projects" 
                className="inline-flex items-center justify-center rounded-full bg-gold hover:bg-gold/90 px-8 py-4 text-base font-semibold text-slate-950 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Properties
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full border-2 border-white hover:border-gold hover:bg-white/10 px-8 py-4 text-base font-semibold text-white transition-all duration-200 backdrop-blur-sm"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gold">120+</p>
                <p className="mt-2 text-sm text-slate-300">Properties Sold</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gold">95%</p>
                <p className="mt-2 text-sm text-slate-300">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gold">10+</p>
                <p className="mt-2 text-sm text-slate-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </section>

      {/* Premium Search Section - positioned with negative margin for modern overlap */}
      <section className="relative z-20 -mt-16 px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-6xl">
          <SearchPanel properties={properties} />
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <TrustBar />

      {/* Why Choose Hari Properties */}
      <WhyChoose />

      {/* Featured Properties */}
      <FeaturedSection title="Featured Properties" properties={featuredProjects} />

      {/* Performance Stats */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials & Social Proof */}
      <Testimonials />

      {/* Developer Partners */}
      <BuilderShowcase />

      {/* Featured Locations */}
      <LocationsSection />

      {/* Contact & Consultation Section */}
      <HomeContactSection />
    </main>
  )
}
