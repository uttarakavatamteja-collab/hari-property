'use client'

import React from 'react'
import Image from 'next/image'

const googleReviewsData = [
  {
    name: 'Ananya Sharma',
    date: '2 weeks ago',
    rating: 5,
    text: 'Hari Properties helped us find a beautiful family home in Mysuru. The entire search, documentation, and handover process was incredibly smooth and completely transparent. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Rahul Menon',
    date: '1 month ago',
    rating: 5,
    text: 'Highly professional real estate consultants. They analyzed commercial opportunities for us in Whitefield, provided solid yield figures, and negotiated the deal flawlessly. Best advisors in Karnataka.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Priya Nair',
    date: '3 weeks ago',
    rating: 5,
    text: 'I was looking for a premium rental villa in Mysuru on a tight schedule. The relationship manager from Hari Properties curated verified properties and closed the agreement in just 3 days! Outstanding service!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
  }
]

export default function GoogleReviews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-slate-200/50">
      {/* Header Container */}
      <div className="flex flex-col items-center justify-between gap-8 border-b border-slate-200 pb-12 md:flex-row md:items-end">
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Verified Client Trust</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Google Customer Reviews
          </h2>
          <p className="max-w-xl text-slate-600">
            Read what our esteemed clients say about their premium homebuying and investment experiences with us.
          </p>
        </div>

        {/* Global Rating Card */}
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm min-w-[220px]">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-blue-500 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.694 0-8.503-3.809-8.503-8.503s3.809-8.503 8.503-8.503c2.25 0 4.18.847 5.606 2.177l3.225-3.225C18.36 1.718 15.54 0 12.24 0c-6.63 0-12 5.37-12 12s5.37 12 12 12c6.9 0 11.52-4.86 11.52-11.76 0-.765-.06-1.53-.195-2.225H12.24z"/>
            </svg>
            <span className="text-lg font-bold text-slate-800">Google Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-3xl font-extrabold text-brand">4.9</span>
            <div className="flex text-gold text-lg">★★★★★</div>
          </div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Based on 140+ verified reviews
          </p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {googleReviewsData.map((review) => (
          <div
            key={review.name}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white p-8 shadow-soft transition-all duration-300 hover:shadow-lg hover:border-gold/30"
          >
            <div className="space-y-4">
              {/* Stars & Verified Row */}
              <div className="flex items-center justify-between">
                <div className="flex text-gold text-base">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-emerald bg-emerald/10 px-2 py-0.5 rounded-full">
                  ✓ Verified Reviewer
                </span>
              </div>

              {/* Review Text */}
              <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            {/* Profile Row */}
            <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200">
                <Image
                  src={review.avatar}
                  alt={`${review.name} Google profile`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-brand">{review.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-slate-400 font-semibold">{review.date}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                  <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">Google</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
