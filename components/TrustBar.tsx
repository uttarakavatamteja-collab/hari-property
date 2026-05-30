export default function TrustBar() {
  return (
    <div className="mx-auto my-12 max-w-7xl px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200/80 p-8 lg:p-10 shadow-soft">
        {/* Verified Badge */}
        <div className="flex items-start gap-4 group">
          <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-emerald/10 flex items-center justify-center text-emerald group-hover:bg-emerald/20 transition">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-brand">Verified Properties</p>
            <p className="text-sm text-slate-600">All listings verified and compliant</p>
          </div>
        </div>

        {/* Experience Badge */}
        <div className="flex items-start gap-4 group">
          <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-brand">10+ Years Experience</p>
            <p className="text-sm text-slate-600">Serving Mysuru since 2014</p>
          </div>
        </div>

        {/* Local Expertise Badge */}
        <div className="flex items-start gap-4 group">
          <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-brand">Local Market Experts</p>
            <p className="text-sm text-slate-600">In-depth Karnataka insights</p>
          </div>
        </div>

        {/* Transparent Transactions Badge */}
        <div className="flex items-start gap-4 group">
          <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-200 transition">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-brand">100% Transparent</p>
            <p className="text-sm text-slate-600">Secure and honest dealings</p>
          </div>
        </div>
      </div>
    </div>
  )
}
