import { getLanding } from "@/content/landing"
import { PageClient } from "@/components/marketing/page-client"

export default async function Page({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = await params

  const landing = getLanding(locale)

  return <PageClient landing={landing} locale={locale} />
}