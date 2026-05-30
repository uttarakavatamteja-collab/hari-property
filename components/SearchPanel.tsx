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
    <div className="rounded-[2.5rem] border border-slate-200/90 bg-white/95 backdrop-blur-sm px-6 py-10 shadow-xl sm:px-10 lg:px-12">
      {/* Search Header */}
      <div className="mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Smart Search</span>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand">Find Your Perfect Property</h2>
          <p className="mt-3 text-slate-600">Search curated properties across Mysuru, Bengaluru, and Karnataka markets.</p>
        </div>
      </div>

      {/* Search Filters Grid */}
      <div className="grid gap-4 lg:grid-cols-6">
        {/* Property Type Filter */}
        <div className="lg:col-span-1">
          <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-slate-700">Type</label>
          <div className="grid gap-2">
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                aria-pressed={category === item.id}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-all ${
                  category === item.id 
                    ? 'bg-brand text-white shadow-md' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* City Filter */}
        <div className="lg:col-span-1">
          <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-slate-700">City</label>
          <select 
            value={city} 
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setCity((event.currentTarget as unknown as { value: string }).value)} 
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          >
            {cities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Locality Filter */}
        <div className="lg:col-span-1">
          <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-slate-700">Locality</label>
          <select 
            value={locality} 
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setLocality((event.currentTarget as unknown as { value: string }).value)} 
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          >
            <option value="">All locations</option>
            {localities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div className="lg:col-span-1">
          <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-slate-700">Property</label>
          <select 
            value={propertyType} 
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setPropertyType((event.currentTarget as unknown as { value: string }).value)} 
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          >
            <option value="">All types</option>
            {propertyTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Budget Filter */}
        <div className="lg:col-span-1">
          <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-slate-700">Budget</label>
          <select 
            value={budget} 
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setBudget((event.currentTarget as unknown as { value: string }).value)} 
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          >
            <option value="">Any budget</option>
            {budgets.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Clear Filters Button */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={() => {
              setCategory('buy')
              setCity('Mysuru')
              setLocality('')
              setBudget('')
              setPropertyType('')
            }}
            className="w-full rounded-lg border border-slate-300 hover:bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-10 border-t border-slate-200 pt-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">
            <span className="text-brand text-lg font-bold">{filtered.length}</span> listing{filtered.length !== 1 ? 's' : ''} available
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {isFiltering ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-[2.5rem] border border-slate-200 bg-slate-100 h-96" />
            ))
          ) : filtered.length > 0 ? (
            filtered.map((property) => <PropertyCard key={property.slug} property={property} />)
          ) : (
            <div className="col-span-full rounded-[2rem] bg-slate-50 p-12 text-center">
              <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-4 text-slate-600 font-medium">No listings match your criteria</p>
              <p className="mt-2 text-sm text-slate-500">Try adjusting your filters or contact us for personalized assistance.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
