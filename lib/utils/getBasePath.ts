export function getBasePath(pathname: string): `/${string}` {
  return `/${pathname.split('/')[1]}`;
}
