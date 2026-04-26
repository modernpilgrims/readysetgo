import { getLanding } from "../../../content/landing"
import { getForm } from "@/content/form"
import { PageClient } from "@/components/marketing/page-client"

export default async function Page({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = await params

  const landing = getLanding(locale)
  const form = getForm(locale) // 👈 добавили

  return (
    <PageClient
      landing={landing}
      form={form} // 👈 передаём
      locale={locale}
    />
  )
}