import { redirect } from "next/navigation"

export default async function Page({
  params,
}: {
  params: Promise<{ league: string; view: string }>
}) {
  const { league, view } = await params
  redirect(`/${league}/${view}/2025`)
}
