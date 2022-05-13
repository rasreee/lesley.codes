export type DateInit = number | string | Date

export function compareDates(a: DateInit, b: DateInit) {
  return new Date(b).valueOf() - new Date(a).valueOf()
}
