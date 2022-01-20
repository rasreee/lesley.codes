import { sluggify } from './sluggify';

export const Routes = {
  HOME: '/',
  CONTENTS: '/contents/[slug]',
  BLOG: '/blog',
  POST: '/blog/[slug]'
} as const;

export const RouteNames = {
  HOME: 'Home',
  BLOG: 'Blog'
} as const;

export const RouteKeys = {
  SLUG: '[slug]'
} as const;

export function buildUrl(main = '', pos = '') {
  return `${sluggify(main)}${pos ? sluggify(pos) : pos}`;
}

export function buildApiUrl(main = '', pos = '') {
  return `/api${sluggify(main)}${pos ? sluggify(pos) : pos}`;
}
