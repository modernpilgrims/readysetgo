import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { formatDate } from '@/lib/utils/dates'

export default async function LeadsPage() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('leads')
    .select('id, full_name, company_name, email, status, priority, created_at')
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) {
    console.error('Error fetching leads:', error)
  }

  // ✅ ЖЁСТКИЙ фикс — всегда массив
  const leads = (data ?? []) as any[]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Leads Pipeline</h1>
      </div>

      <div className="rounded-md border bg-white dark:bg-slate-900 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Contact</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 text-right font-medium">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                  No leads found.
                </td>
              </tr>
            ) : (
              leads.map((lead: any) => (
                <tr
                  key={lead.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <td className="px-4 py-3 font-medium">
                    {lead.full_name}
                    {lead.company_name && (
                      <span className="block text-xs font-normal text-slate-500">
                        {lead.company_name}
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-slate-500">
                    {lead.email}
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-800">
                      {lead.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-slate-500">
                    {formatDate(lead.created_at)}
                  </td>

                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/app/leads/${lead.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-xs"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}