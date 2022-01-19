import { fetcher } from '@lib/fetcher';
import { ContentMeta } from '@models/contentMeta';
import useSWR, { SWRResponse } from 'swr';

export type ContentMetaApiResponse = { contentMeta: ContentMeta | null };

export const useContentMetaApi = (slug: string): SWRResponse<ContentMetaApiResponse> => {
  const swr = useSWR<ContentMetaApiResponse, Error>(`/api/contents/${slug}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return swr;
};
