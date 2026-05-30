export default function TrustBar() {
  return (
    <div className="mx-auto my-6 max-w-7xl px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-6 rounded-3xl bg-white/90 px-6 py-3 text-sm shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-emerald/10 px-3 py-1 text-emerald font-semibold">Verified</div>
          <div className="text-slate-600">Verified listings</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gold/10 px-3 py-1 text-gold font-semibold">2014</div>
          <div className="text-slate-600">Serving Mysuru since 2014</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-100 px-3 py-1 text-slate-800 font-semibold">Local</div>
          <div className="text-slate-600">Local market expertise</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-emerald/10 px-3 py-1 text-emerald font-semibold">Secure</div>
          <div className="text-slate-600">Transparent transactions</div>
        </div>
      </div>
    </div>
  )
}
