import type { Metadata } from 'next'
import { LoginWithGoogleButton } from '@/components/forms/login-button'

export const metadata: Metadata = {
  title: 'Sign In — Ready Set Go',
  description: 'Sign in to your Ready Set Go account.',
}

export default function AuthLoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p>Sign in to continue</p>
        <LoginWithGoogleButton />
      </div>
    </div>
  )
}
