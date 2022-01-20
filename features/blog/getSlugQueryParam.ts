import { ParsedUrlQuery } from 'querystring';

export const getSlugQueryParam = (query: ParsedUrlQuery) => {
  if ('slug' in query) {
    return query.slug as string;
  }

  throw new Error('query object does not have property slug');
};
