import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Hari Properties | Trusted Real Estate Partner',
  description: 'Learn about Hari Properties, our mission, vision and local real estate expertise in Karnataka.',
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <section className="rounded-[2.5rem] border border-slate-200/80 bg-white p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-gold">About Hari Properties</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand sm:text-5xl">A premium real estate company rooted in trust and local insight.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Hari Properties is a Mysuru-based real estate advisory firm serving homebuyers, sellers, investors and tenants across Karnataka. We focus on delivering luxurious service, transparent guidance and market-backed property recommendations.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-950/95 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-gold">Our location</p>
            <p className="mt-4 text-lg font-semibold">Mysuru, Karnataka</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">A trusted partner for residential, commercial and investment real estate across Bengaluru, Mandya, Hassan and all of Karnataka.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-slate-950/95 p-8 text-white shadow-soft">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-slate-300 leading-7">To create confident, educated real estate experiences by combining premium service with deep local market expertise.</p>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-brand">Our Vision</h2>
          <p className="mt-4 text-slate-600 leading-7">To be the most respected real estate advisory firm in Karnataka, known for integrity, client-first relationships and exceptional outcomes.</p>
        </div>
        <div className="rounded-[2rem] bg-slate-950/95 p-8 text-white shadow-soft">
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Integrity in every transaction</li>
            <li>Clarity through transparent guidance</li>
            <li>Commitment to long-term client success</li>
            <li>Local knowledge, premium service</li>
          </ul>
        </div>
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-slate-200/80 bg-white p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-gold">Our story</p>
            <h2 className="mt-4 text-3xl font-semibold text-brand">Built for premium real estate clients across Karnataka.</h2>
            <p className="mt-6 text-slate-600 leading-8">
              Hari Properties began with a simple promise: to make property decisions easier for people who value trust, quality and local advisory. Our team blends corporate professionalism with personal care so every client feels supported and empowered.
            </p>
            <p className="mt-6 text-slate-600 leading-8">
              Whether you are buying a home in Mysuru, leasing an office in Bengaluru, or investing in a commercial asset, Hari Properties delivers clarity, speed and expert execution.
            </p>
          </div>
          <div className="space-y-6 rounded-[2rem] bg-slate-950/95 p-8 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Client-first approach</p>
              <p className="mt-3 text-base leading-7 text-slate-300">We listen, advise honestly and deliver every step with care.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Strategic market access</p>
              <p className="mt-3 text-base leading-7 text-slate-300">Premium residential and commercial opportunities curated for each client.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-brand">Meet the leadership team</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { name: 'Rohan Hari', role: 'Founder & CEO', image: '/assets/images/assets/2.png' },
            { name: 'Priya Menon', role: 'Head of Client Relations', image: '/assets/images/assets/3.png' },
            { name: 'Karthik Rao', role: 'Investment Director', image: '/assets/images/assets/screen_02.jpg' },
            { name: 'Ananya Das', role: 'Operations Lead', image: '/assets/images/assets/screen_04.png' },
          ].map((member) => (
            <div key={member.name} className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft">
              <div className="relative mb-5 h-36 overflow-hidden rounded-[1.75rem] bg-slate-950">
                <Image src={member.image} alt={`Photo of ${member.name}`} fill className="object-cover" sizes="288px" />
              </div>
              <h3 className="text-xl font-semibold text-brand">{member.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">Dedicated to delivering premium real estate outcomes with integrity and local insight.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-gold/20 bg-slate-950/95 p-10 text-white shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-gold">Ready to partner with Hari Properties?</p>
            <h2 className="mt-4 text-3xl font-semibold">Contact us for a confidential consultation.</h2>
          </div>
          <div className="space-y-3 text-slate-300">
            <p>Phone: +91 90000 12345</p>
            <p>Email: hello@hariproperties.in</p>
            <p>Address: 12 Prestige Plaza, Mysuru, Karnataka</p>
          </div>
        </div>
      </section>

      <div className="mt-12 text-right">
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90">
          Speak with our leadership team
        </Link>
      </div>
    </main>
  )
}
