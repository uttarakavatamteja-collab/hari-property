import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-slate-50 px-6 py-16 text-center">
      <div className="max-w-xl rounded-[2rem] border border-slate-200/80 bg-white p-12 shadow-soft">
        <p className="text-sm uppercase tracking-[0.32em] text-accent">Page not found</p>
        <h1 className="mt-6 text-4xl font-semibold text-brand sm:text-5xl">Oops! We couldn’t find that page.</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">The property or route you are looking for is unavailable. Return to the main portal to continue browsing listings.</p>
        <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
          Back to homepage
        </Link>
      </div>
    </main>
  )
}
