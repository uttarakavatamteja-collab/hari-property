import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '../../components/SectionHeader'

export const metadata = {
  title: 'About Hari Properties | Premium Real Estate Story & Advisory',
  description: 'Discover the legacy of Hari Properties, our founder Rohan Hari\'s vision, our corporate timeline, and local market advisory expertise in Karnataka.',
}

export default function AboutPage() {
  const timelineMilestones = [
    {
      year: '2016',
      title: 'The Foundation',
      description: 'Hari Properties was established in Mysuru with a single vision: to bring legal transparency, strict due diligence, and absolute RERA compliance to local buyers.',
    },
    {
      year: '2019',
      title: 'Residential Expansion',
      description: 'We expanded operations into high-end luxury apartments and gated communities, partnering with premier developers across Bengaluru and Mandya.',
    },
    {
      year: '2022',
      title: 'Bespoke Advisory & NRIs',
      description: 'Launched our private portfolio advisory services, assisting international NRI buyers and institutional investors acquire prime lands and corporate assets.',
    },
    {
      year: '2026',
      title: 'A Digital-First Luxury Brand',
      description: 'Evolved into Karnataka\'s leading boutique real estate advisory firm, matching the global luxury standards of Sotheby\'s and Knight Frank.',
    },
  ]

  const corePillars = [
    {
      title: 'Strict RERA Compliance',
      description: 'Every single villa, commercial plot, or residence in our catalog undergoes exhaustive legal checks. We vet titles, RERA registrations, and zoning laws so you can acquire with absolute confidence.',
    },
    {
      title: 'Uncompromised Integrity',
      description: 'We reject generic templates and high-pressure sales. Our advisors act as fiduciary partners, delivering clear, data-backed valuations and objective risk assessments.',
    },
    {
      title: 'Localized Market Insight',
      description: 'Rooted in Mysuru, our relationship managers understand every micro-market in Karnataka. From heritage properties in Gokulam to high-yield commercial assets in Whitefield.',
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Editorial Page Header */}
      <header className="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">About Our Firm</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light font-serif text-brand leading-tight tracking-tight">
          Advising with <span className="italic font-normal">Distinction</span>
        </h1>
        <div className="h-px w-20 bg-gold mx-auto mt-6"></div>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium pt-4">
          Hari Properties represents the pinnacle of residential, commercial, and land advisory services across Karnataka. We stand for legal clarity, custom service, and proven appreciation.
        </p>
      </header>

      {/* Founder Story Block - Two Columns */}
      <section className="rounded-[3rem] border border-slate-200/80 bg-white p-8 sm:p-12 shadow-soft mb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-5 py-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-gold">The Leadership Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light font-serif text-brand leading-snug">
              &ldquo;Transparency is not an option; it is our foundation.&rdquo;
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-base">
              <p>
                When I founded Hari Properties in Mysuru, the local market was saturated with unverified listings and confusing transactions. I believed that sophisticated buyers deserved something better: a highly analytical, fiduciary real estate advisory.
              </p>
              <p>
                Our core mission is to remove all transaction anxiety. We thoroughly examine every land title, architectural specification, and developer history before presenting any listing to you. By combining this meticulous due diligence with custom concierge support, we help you secure prime Karnataka real estate safely.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-6">
              <p className="text-lg font-bold text-brand font-serif">Rohan Hari</p>
              <p className="text-xs font-extrabold uppercase tracking-widest text-gold mt-1">Founder & Managing Director</p>
            </div>
          </div>

          {/* Luxury Frame Image */}
          <div className="relative h-[32rem] overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl">
            <Image
              src="/assets/images/assets/2.png"
              alt="Rohan Hari, Founder of Hari Properties"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            {/* Ambient Shadow Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-semibold tracking-wider uppercase text-gold">Established in Mysuru</p>
              <p className="text-xl font-bold font-serif mt-1">Serving clients since 2016</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Milestone Section */}
      <section className="mb-24">
        <SectionHeader 
          title="Our Journey" 
          subtitle="A decade of pioneering transparency and premium real estate advisory services." 
        />
        <div className="relative mt-16 border-l-2 border-gold/30 pl-8 space-y-12 max-w-5xl mx-auto">
          {timelineMilestones.map((milestone, idx) => (
            <div key={milestone.year} className="relative group">
              {/* Gold Circle Indicator */}
              <div className="absolute -left-[2.65rem] top-1.5 h-5 w-5 rounded-full border-2 border-gold bg-white transition duration-300 group-hover:bg-gold"></div>
              
              {/* Content Panel */}
              <div className="space-y-3">
                <span className="text-3xl font-light font-serif text-gold leading-none">{milestone.year}</span>
                <h3 className="text-xl font-bold text-brand font-serif">{milestone.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Pillars / Market Expertise Section */}
      <section className="rounded-[3rem] bg-slate-950/95 border border-gold/20 p-6 sm:p-10 lg:p-16 text-white shadow-2xl mb-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">Our Code</p>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-white">The Three Pillars of Our Advisory</h2>
          <div className="h-px w-20 bg-gold mx-auto mt-4"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {corePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-4 backdrop-blur-md">
              <h3 className="text-xl font-bold text-gold font-serif">{pillar.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upgraded Team Profiles */}
      <section className="mb-24">
        <SectionHeader 
          title="Meet Our Directors" 
          subtitle="Experienced corporate and legal real estate experts dedicated to your success." 
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Rohan Hari', role: 'Founder & CEO', image: '/assets/images/assets/2.png', bio: 'Over 12 years of premier commercial land acquisitions and asset structuring in Karnataka.' },
            { name: 'Priya Menon', role: 'Director of Residential Services', image: '/assets/images/assets/3.png', bio: 'Expert in high-end Mysuru family villas, luxury apartments, and corporate leasing.' },
            { name: 'Karthik Rao', role: 'Director of Legal & Compliance', image: '/assets/images/assets/screen_02.jpg', bio: 'Former municipal counsel, specializing in RERA title validation and transaction security.' },
            { name: 'Ananya Das', role: 'Director of Investment Advisory', image: '/assets/images/assets/screen_04.png', bio: 'Structures high-yield acquisitions for institutional clients and international NRI portfolios.' },
          ].map((member) => (
            <div key={member.name} className="group rounded-[2.5rem] border border-slate-200/80 bg-white p-6 shadow-soft hover:shadow-2xl hover:border-gold/40 transition-all duration-300">
              <div className="relative mb-6 h-56 overflow-hidden rounded-[2rem] bg-slate-950">
                <Image src={member.image} alt={member.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="250px" />
              </div>
              <h3 className="text-xl font-bold text-brand font-serif">{member.name}</h3>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold mt-1">{member.role}</p>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Concierge Booking Banner */}
      <section className="rounded-[3rem] border border-gold/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10 lg:p-16 text-white text-center shadow-2xl">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">Confidential Intake</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-light font-serif text-white max-w-xl mx-auto leading-snug">
          Begin Your Premium Property Search Today
        </h2>
        <p className="mt-4 text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          Schedule a private one-on-one consultation with Rohan Hari or our director team to review off-market portfolios and curated acquisitions.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Schedule Private Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
