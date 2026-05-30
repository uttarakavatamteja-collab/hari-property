import InquiryForm from '../../components/InquiryForm'

export const metadata = {
  title: 'Contact Hari Properties | Premium Real Estate Support',
  description: 'Contact Hari Properties in Mysuru for buying, selling, renting and investment advisory across Karnataka.',
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <section className="rounded-[2.5rem] border border-slate-200/80 bg-white p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-gold">Contact Hari Properties</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand sm:text-5xl">Get personalized real estate guidance from our Mysuru team.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you are buying, selling, renting or investing, our team offers expert advisory, property tours, and negotiation support across Karnataka.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-950/95 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-gold">Office</p>
            <p className="mt-3 text-lg font-semibold">Hari Properties, Mysuru</p>
            <div className="mt-6 space-y-4 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
                <p className="mt-2">+91 90000 12345</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                <p className="mt-2">hello@hariproperties.in</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Address</p>
                <p className="mt-2">12 Prestige Plaza, Kuvempunagar, Mysuru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div className="space-y-8">
          <div className="rounded-[2rem] bg-slate-950/95 p-8 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-gold">Visit us</p>
            <p className="mt-4 text-lg font-semibold">Premium office suite with private client consultations.</p>
            <p className="mt-4 text-slate-300 leading-7">Schedule a meeting in Mysuru, receive market updates and review high-value properties with our team.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Office location</p>
            <p className="mt-4 text-lg font-semibold text-brand">Hari Properties Office</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              12 Prestige Plaza, Kuvempunagar, Mysuru, Karnataka 570023
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=12+Prestige+Plaza+Mysuru"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/90"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-slate-200/80 bg-white p-10 shadow-soft">
          <InquiryForm heading="Send a message" subtext="Our team will respond to your query within one business day." />
        </div>
      </div>
    </main>
  )
}
