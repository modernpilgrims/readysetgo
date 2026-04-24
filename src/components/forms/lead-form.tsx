'use client'

import { useState } from 'react'

type Props = {
  defaultEmail?: string
  defaultName?:  string
}

export function LeadForm({ defaultEmail = '', defaultName = '' }: Props) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]     = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    
    const payload = {
      fullName:        String(formData.get('fullName') || ''),
      email:           String(formData.get('email') || ''),
      companyName:     String(formData.get('companyName') || ''),
      website:         String(formData.get('website') || ''),
      serviceInterest: String(formData.get('serviceInterest') || ''),
      budgetRange:     String(formData.get('budgetRange') || ''),
      timeline:        String(formData.get('timeline') || ''),
      message:         String(formData.get('message') || ''),
      landingPath:     window.location.pathname,
      referrer:        document.referrer || '',
      utmSource:       new URLSearchParams(window.location.search).get('utm_source') || '',
      utmMedium:       new URLSearchParams(window.location.search).get('utm_medium') || '',
      utmCampaign:     new URLSearchParams(window.location.search).get('utm_campaign') || '',
      utmContent:      new URLSearchParams(window.location.search).get('utm_content') || '',
      utmTerm:         new URLSearchParams(window.location.search).get('utm_term') || '',
      source:          'website',
    }

    try {
      const res = await fetch('/api/leads', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })

      const json = await res.json()

      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Failed to submit')
      }

      setSuccess(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 text-green-800 p-6 rounded-md border border-green-200">
        <h3 className="font-semibold text-lg mb-2">Thank you!</h3>
        <p>Your request has been successfully submitted. We will contact you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input name="fullName" id="fullName" placeholder="Your name" defaultValue={defaultName} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input name="email" id="email" type="email" placeholder="Email" defaultValue={defaultEmail} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">Company</label>
          <div className="mt-2">
            <input name="companyName" id="companyName" placeholder="Company Name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3" />
          </div>
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">Website</label>
          <div className="mt-2">
            <input name="website" id="website" placeholder="https://" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-medium leading-6 text-gray-900">Interest</label>
          <div className="mt-2">
             <select name="serviceInterest" id="serviceInterest" defaultValue="" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3 bg-white">
              <option value="" disabled>Select</option>
              <option value="quick-launch">Quick Launch</option>
              <option value="website-core">Website Core</option>
              <option value="system">Full System</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium leading-6 text-gray-900">Budget</label>
          <div className="mt-2">
            <select name="budgetRange" id="budgetRange" defaultValue="" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3 bg-white">
              <option value="" disabled>Select</option>
              <option value="<1000">under €1000</option>
              <option value="1000-3000">€1000–3000</option>
              <option value="3000-7000">€3000–7000</option>
              <option value="7000+">€7000+</option>
            </select>
          </div>
        </div>
        <div>
           <label htmlFor="timeline" className="block text-sm font-medium leading-6 text-gray-900">Timeline</label>
           <div className="mt-2">
            <select name="timeline" id="timeline" defaultValue="" className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3 bg-white">
              <option value="" disabled>Select</option>
              <option value="asap">ASAP</option>
              <option value="2-4-weeks">2–4 weeks</option>
              <option value="1-2-months">1–2 months</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
        <div className="mt-2">
          <textarea name="message" id="message" rows={4} placeholder="Briefly describe your task..." required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"></textarea>
        </div>
      </div>

      {error ? <div className="text-sm font-medium text-red-600 bg-red-50 py-2 px-3 rounded-md">{error}</div> : null}

      <div className="pt-2">
        <button 
          type="submit" 
          disabled={loading}
          className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 transition-colors"
        >
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
  )
}
