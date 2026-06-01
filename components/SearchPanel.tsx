'use client'

import { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import { propertyTypes, budgets, categories, Property } from '../lib/data'
import PropertyCard from './PropertyCard'

export default function SearchPanel({ properties }: { properties: Property[] }) {
  const [category, setCategory] = useState<'buy' | 'rent' | 'commercial' | 'pg'>('buy')
  const [city, setCity] = useState('')
  const [locality, setLocality] = useState('')
  const [budget, setBudget] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [isFiltering, setIsFiltering] = useState(false)

  // Memoize unique city and locality lists dynamically from data
  const cities = useMemo(() => Array.from(new Set(properties.map((item) => item.city))), [properties])
  
  // Localities filter changes dynamically based on selected city for premium UX
  const localities = useMemo(() => {
    const filteredLocalities = city 
      ? properties.filter((item) => item.city === city) 
      : properties
    return Array.from(new Set(filteredLocalities.map((item) => item.locality)))
  }, [properties, city])

  const filtered = useMemo(
    () =>
      properties.filter((property) => {
        return (
          property.category === category &&
          (city ? property.city === city : true) &&
          (locality ? property.locality === locality : true) &&
          (budget ? property.budget === budget : true) &&
          (propertyType ? property.type.toLowerCase().includes(propertyType.toLowerCase()) : true)
        )
      }),
    [properties, category, city, locality, budget, propertyType]
  )

  useEffect(() => {
    setIsFiltering(true)
    const timer = setTimeout(() => setIsFiltering(false), 185)
    return () => clearTimeout(timer)
  }, [category, city, locality, budget, propertyType])

  // Get active total category display matching exact requested labels
  const getSearchTotalLabel = () => {
    const count = filtered.length
    switch (category) {
      case 'buy':
        return `Found ${count} Listing${count !== 1 ? 's' : ''}`
      case 'rent':
        return `Found ${count} Rental${count !== 1 ? 's' : ''}`
      case 'commercial':
        return `Found ${count} Commercial Propert${count !== 1 ? 'ies' : 'y'}`
      case 'pg':
        return `Found ${count} PG Accommodation${count !== 1 ? 's' : ''}`
      default:
        return `Found ${count} Property`
    }
  }

  return (
    <div className="rounded-[2.5rem] border border-slate-200/90 bg-white/95 backdrop-blur-md p-8 shadow-soft md:p-12">
      {/* Search Header */}
      <div className="mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Smart Search</span>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl font-serif">
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
            onClick={() => {
              setCategory(item.id)
              setLocality('')
            }}
            aria-pressed={category === item.id}
            className={`relative px-6 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-200 -mb-px cursor-pointer ${
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
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setCity((e.target as any).value)
              setLocality('') // Reset locality on city change to prevent orphan selection
            }}
            className="form-select-premium w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-brand outline-none transition-all duration-200 focus:border-gold focus:ring-2 focus:ring-gold/15"
          >
            <option value="">All Cities</option>
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
            <option value="">All localities</option>
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

        {/* Reset Filters Button */}
        <div>
          <button
            type="button"
            onClick={() => {
              setCity('')
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
            {getSearchTotalLabel()}
          </p>
        </div>

        {/* Upgraded 4-column responsive layout */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isFiltering ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-[2.5rem] bg-slate-100/80 border border-slate-200/50 h-[30rem]" />
            ))
          ) : filtered.length > 0 ? (
            filtered.map((property) => <PropertyCard key={property.slug} property={property} />)
          ) : (
            /* Luxury Compliant Empty State */
            <div className="col-span-full rounded-[2.5rem] bg-slate-50 border border-slate-100 p-12 text-center max-w-xl mx-auto my-6 shadow-sm">
              <svg className="mx-auto h-12 w-12 text-gold/80 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-brand font-bold text-xl font-serif">No properties match your criteria.</p>
              <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                We couldn&apos;t find any matches. Try resetting your filter settings or browse the complete inventory of prime assets.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setCity('')
                    setLocality('')
                    setBudget('')
                    setPropertyType('')
                  }}
                  className="rounded-full bg-gold hover:bg-[#c29e2f] px-6 py-3 text-xs font-bold text-slate-950 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg text-center"
                >
                  Reset Filters
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('buy')
                    setCity('')
                    setLocality('')
                    setBudget('')
                    setPropertyType('')
                  }}
                  className="rounded-full bg-white border border-slate-200 hover:bg-slate-50 px-6 py-3 text-xs font-bold text-slate-700 transition-all duration-200 cursor-pointer text-center"
                >
                  Browse All Properties
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
