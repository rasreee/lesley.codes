import { sluggify } from './sluggify';

export const Routes = {
  HOME: '/',
  BLOG: '/blog/all'
} as const;

export const RouteNames = {
  HOME: 'Home',
  BLOG: 'Blog'
} as const;

export const RouteKeys = {
  SLUG: '[slug]'
} as const;

export function buildApiUrl(main = '', pos = '') {
  return `/api${sluggify(main)}${pos ? sluggify(pos) : pos}`;
}
