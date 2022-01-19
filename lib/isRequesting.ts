export function isRequesting(data: any, error: any): boolean {
  return typeof data === 'undefined' && typeof error === 'undefined';
}
