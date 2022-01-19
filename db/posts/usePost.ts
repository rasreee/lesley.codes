import { ApiEndpoints } from '@lib/apiEndpoints';
import useSWR from 'swr';

import { GetPostApiResponse } from './getPost';

export function usePostForSlug(slug: string | Falsy) {
  return useSWR<GetPostApiResponse, Error>(slug ? `${ApiEndpoints.POST}/${slug}` : null);
}
