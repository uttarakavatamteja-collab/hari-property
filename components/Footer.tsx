import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold text-white">Hari Properties</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">Premium real estate advisory in Mysuru and Karnataka for buyers, sellers, investors and tenants.</p>
          <div className="mt-6 flex items-center gap-3">
            <a aria-label="Instagram" href="#" className="rounded-full bg-white/6 p-2 text-white hover:bg-white/12 transition">IG</a>
            <a aria-label="LinkedIn" href="#" className="rounded-full bg-white/6 p-2 text-white hover:bg-white/12 transition">IN</a>
            <a aria-label="Facebook" href="#" className="rounded-full bg-white/6 p-2 text-white hover:bg-white/12 transition">FB</a>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-white">Company</p>
          <Link href="/about" className="block transition hover:text-white">About</Link>
          <Link href="/featured-projects" className="block transition hover:text-white">Featured Projects</Link>
          <Link href="/services" className="block transition hover:text-white">Services</Link>
          <Link href="/compare" className="block transition hover:text-white">Compare</Link>
          <Link href="/contact" className="block transition hover:text-white">Contact</Link>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-white">Contact</p>
          <a href="mailto:hello@hariproperties.in" className="block hover:text-white">hello@hariproperties.in</a>
          <a href="tel:+919000012345" className="block hover:text-white">+91 90000 12345</a>
          <p>12 Prestige Plaza, Mysuru</p>
          <div className="mt-4 space-y-2">
            <Link href="/privacy" className="text-xs hover:text-white">Privacy policy</Link>
            <Link href="/terms" className="text-xs hover:text-white">Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
