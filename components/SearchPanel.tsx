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
    <div className="rounded-[2.5rem] border border-slate-200/90 bg-white px-6 py-8 shadow-soft sm:px-10">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-gold">Property search</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">Find the right premium property.</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600">Search curated homes, rentals and commercial spaces across Mysuru, Bengaluru and surrounding markets.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1.2fr_1.2fr_1.2fr_1fr]">
        <div className="sm:col-span-1">
          <label className="mb-2 block text-sm font-medium text-slate-700">Category</label>
          <div className="grid gap-2">
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                aria-pressed={category === item.id}
                className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${category === item.id ? 'bg-brand text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <label className="block text-sm font-medium text-slate-700">
          Keyword
          <input placeholder="e.g. 3 BHK, Whitefield, near mall" className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          City
          <select value={city} onChange={(event: ChangeEvent<HTMLSelectElement>) => setCity((event.currentTarget as unknown as { value: string }).value)} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20">
            {cities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Locality
          <select value={locality} onChange={(event: ChangeEvent<HTMLSelectElement>) => setLocality((event.currentTarget as unknown as { value: string }).value)} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20">
            <option value="">Any locality</option>
            {localities.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Budget
          <select value={budget} onChange={(event: ChangeEvent<HTMLSelectElement>) => setBudget((event.currentTarget as unknown as { value: string }).value)} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20">
            <option value="">Any budget</option>
            {budgets.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Property type
          <select value={propertyType} onChange={(event: ChangeEvent<HTMLSelectElement>) => setPropertyType((event.currentTarget as unknown as { value: string }).value)} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20">
            <option value="">Any type</option>
            {propertyTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">
        <p className="text-sm font-semibold text-slate-700">Showing {filtered.length} listings</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {isFiltering ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-[2rem] border border-slate-200 bg-slate-100 p-8" />
            ))
          ) : filtered.length > 0 ? (
            filtered.map((property) => <PropertyCard key={property.slug} property={property} />)
          ) : (
            <div className="col-span-full rounded-[2rem] bg-slate-50 p-10 text-center text-slate-600 shadow-soft">
              No listings match your filters yet. Try another budget or locality.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
