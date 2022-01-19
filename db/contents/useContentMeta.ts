import { ContentMeta } from '@models/contentMeta';
import useSWR, { SWRResponse } from 'swr';

export type ContentMetaApiResponse = { contentMeta: ContentMeta | null };

export const useContentMeta = (slug: string): SWRResponse<ContentMetaApiResponse> => {
  const swr = useSWR<ContentMetaApiResponse, Error>(`/api/contents/${slug}`);

  return swr;
};
