import Link from 'next/link'

export default function AppPage() {
    return (
        <div className="p-6">
            <h1>Dashboard</h1>

            <Link href="/app/leads">
                Open leads
            </Link>
        </div>
    )
}