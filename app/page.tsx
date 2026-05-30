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
import { properties, featuredProjects } from '../lib/data'

export const metadata = {
  title: 'Hari Properties | Luxury Real Estate in Mysuru & Karnataka',
  description: 'Hari Properties offers premium real estate advisory services in Mysuru and Karnataka for buyers, sellers, tenants and investors.',
}

export default function HomePage() {
  return (
    <main className="bg-surface">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 min-h-[90vh] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury property background" 
            fill 
            sizes="100vw" 
            className="object-cover opacity-80" 
            priority 
          />
          {/* Multi-layered premium gradient overlay for maximum readability and luxury depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 w-full">
          <div className="max-w-3xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-5 py-2.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Your Trusted Partner in Real Estate
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Premium Real Estate Advisory Across Karnataka
              </h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Discover exceptional residential, commercial, and investment properties with confidence. From Mysuru to Bengaluru, we deliver bespoke advisory services backed by deep local market expertise.
              </p>
            </div>

            {/* CTA Buttons */}
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

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gold tracking-tight">120+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">Properties Sold</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gold tracking-tight">95%</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gold tracking-tight">10+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">Years Exp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </section>

      {/* Premium Search Section - positioned with negative margin for modern overlap */}
      <section className="relative z-20 -mt-10 sm:-mt-16 px-6 lg:px-8 pb-16">
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
