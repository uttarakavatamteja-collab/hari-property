'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

interface InquiryFormProps {
  propertyTitle?: string
  heading?: string
  subtext?: string
}

export default function InquiryForm({ propertyTitle, heading = 'Request more information', subtext = 'Share your details and our team will follow up shortly.' }: InquiryFormProps) {
  const [status, setStatus] = useState('')
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as unknown as { name: string; value: string }
    setFormState({ ...formState, [target.name]: target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = propertyTitle ? ` for ${propertyTitle}` : ''
    setLoading(true)
    setStatus('')
    setTimeout(() => {
      setLoading(false)
      setStatus(`Thanks, ${formState.name || 'there'}! Your inquiry${subject} has been submitted.`)
      setFormState({ name: '', email: '', phone: '', message: '' })
    }, 900)
  }

  return (
    <section className="rounded-[2rem] border border-slate-200/90 bg-white p-8 shadow-soft">
      <h3 className="text-xl font-semibold text-brand">{heading}</h3>
      <p className="mt-3 text-sm text-slate-600">{subtext}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="block">
            <label htmlFor="inquiry-name" className="text-sm font-medium text-slate-700">
              Full name
            </label>
            <input id="inquiry-name" value={formState.name} onChange={handleChange} name="name" type="text" required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
          </div>
          <div className="block">
            <label htmlFor="inquiry-email" className="text-sm font-medium text-slate-700">
              Email address
            </label>
            <input id="inquiry-email" value={formState.email} onChange={handleChange} name="email" type="email" required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
          </div>
        </div>

        <div className="block">
          <label htmlFor="inquiry-phone" className="text-sm font-medium text-slate-700">
            Phone number
          </label>
          <input id="inquiry-phone" value={formState.phone} onChange={handleChange} name="phone" type="tel" required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
        </div>

        <div className="block">
          <label htmlFor="inquiry-message" className="text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea id="inquiry-message" value={formState.message} onChange={handleChange} name="message" rows={4} className="mt-2 w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" placeholder="Tell us about your property requirements..."></textarea>
        </div>

        <button disabled={loading} type="submit" className="btn-primary disabled:opacity-60" aria-label="Submit inquiry">
          {loading ? (
            <span className="inline-flex items-center gap-3">
              <svg className="h-4 w-4 animate-spin text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Submit inquiry'
          )}
        </button>
      </form>

      {status ? <p className="mt-4 rounded-3xl bg-slate-100 p-4 text-sm text-slate-700">{status}</p> : null}
    </section>
  )
}
