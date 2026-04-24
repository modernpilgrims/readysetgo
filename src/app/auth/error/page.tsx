import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Authentication Error — Ready Set Go',
}

export default function AuthErrorPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Authentication error</h1>
        <p>Something went wrong during sign-in. Please try again.</p>
        <Link href="/auth/login">Back to sign in</Link>
      </div>
    </div>
  )
}
