import { redirect } from 'next/navigation'

export default function AdminIndexPage() {
  // Redirect to the primary admin view
  redirect('/app/leads')
}
