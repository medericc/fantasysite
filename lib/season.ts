export const CANONICAL_YEAR = "2027"

export function seasonUrl(
  league: string,
  view: string,
  year: string = CANONICAL_YEAR
) {
  return `/${league}/${view}/${year}`
}
