import { LeadForm } from '@/components/forms/lead-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Leave a request and we will get back to you.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-10">
         <h1 className="text-4xl font-extrabold tracking-tight mb-4">Start Your Project</h1>
         <p className="text-lg text-slate-600">
           Tell us about your business goals and we will prepare a clear roadmap for your digital system.
         </p>
      </div>
      
      <LeadForm />
    </div>
  )
}
