'use client'

import { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import { propertyTypes, budgets, categories, Property } from '../lib/data'
import PropertyCard from './PropertyCard'

export default function SearchPanel({ properties }: { properties: Property[] }) {
  const [category, setCategory] = useState<'buy' | 'rent' | 'commercial' | 'pg'>('buy')
  const [city, setCity] = useState('Mysuru')
  const [locality, setLocality] = useState('')
  const [budget, setBudget] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [isFiltering, setIsFiltering] = useState(false)

  const cities = useMemo(() => Array.from(new Set(properties.map((item) => item.city))), [properties])
  const localities = useMemo(() => Array.from(new Set(properties.map((item) => item.locality))), [properties])

  const filtered = useMemo(
    () =>
      properties.filter((property) => {
        return (
          property.category === category &&
          (city ? property.city === city : true) &&
          (locality ? property.locality === locality : true) &&
          (budget ? property.budget === budget : true) &&
          (propertyType ? property.type === propertyType : true)
        )
      }),
    [properties, category, city, locality, budget, propertyType]
  )

  useEffect(() => {
    setIsFiltering(true)
    const timer = setTimeout(() => setIsFiltering(false), 180)
    return () => clearTimeout(timer)
  }, [category, city, locality, budget, propertyType])

  return (
    <div className="rounded-[2.5rem] border border-slate-200/90 bg-white/95 backdrop-blur-md p-8 shadow-soft md:p-12">
      {/* Search Header */}
      <div className="mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Smart Search</span>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Find Your Perfect Property
          </h2>
          <p className="mt-3 text-slate-600">
            Search curated properties across Mysuru, Bengaluru, and premium Karnataka markets.
          </p>
        </div>
      </div>

      {/* Premium Horizontal Tabs */}
      <div className="mb-8 flex flex-wrap border-b border-slate-200 gap-2">
        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            aria-pressed={category === item.id}
            className={`relative px-6 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-200 -mb-px ${
              category === item.id
                ? 'border-b-2 border-gold text-brand font-extrabold'
                : 'text-slate-500 hover:text-brand border-b-2 border-transparent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Search Filters Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 items-end">
        {/* City Filter */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">City</label>
          <select
            value={city}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCity((e.target as any).value)}
            className="form-select-premium w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-brand outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15"
          >
            {cities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Locality Filter */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">Locality</label>
          <select
            value={locality}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocality((e.target as any).value)}
            className="form-select-premium w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-brand outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15"
          >
            <option value="">All locations</option>
            {localities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">Property</label>
          <select
            value={propertyType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setPropertyType((e.target as any).value)}
            className="form-select-premium w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-brand outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15"
          >
            <option value="">All types</option>
            {propertyTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Budget Filter */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">Budget</label>
          <select
            value={budget}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setBudget((e.target as any).value)}
            className="form-select-premium w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-brand outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15"
          >
            <option value="">Any budget</option>
            {budgets.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Clear Filters Button */}
        <div>
          <button
            type="button"
            onClick={() => {
              setCategory('buy')
              setCity('Mysuru')
              setLocality('')
              setBudget('')
              setPropertyType('')
            }}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 px-4 py-3.5 text-sm font-bold text-slate-700 transition-all duration-200 cursor-pointer text-center"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-12 border-t border-slate-100 pt-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Found <span className="text-brand font-extrabold text-base">{filtered.length}</span> listing{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {isFiltering ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-[2.5rem] bg-slate-100/80 border border-slate-200/50 h-[28rem]" />
            ))
          ) : filtered.length > 0 ? (
            filtered.map((property) => <PropertyCard key={property.slug} property={property} />)
          ) : (
            <div className="col-span-full rounded-[2rem] bg-slate-50 border border-slate-100 p-12 text-center">
              <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-4 text-slate-600 font-bold text-lg">No listings match your criteria</p>
              <p className="mt-2 text-sm text-slate-500">Try adjusting your filters or contact us for personalized assistance.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
