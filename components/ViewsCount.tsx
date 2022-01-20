import { ContentMetaApiResponse } from '@api/contents/types';
import { buildApiUrl } from '@lib/routes';
import { isSWRLoading } from '@lib/swr';
import { useQuery } from '@lib/useQuery';
import { useEffect } from 'react';

export const ViewsCount = ({ slug }: { slug: string }) => {
  const { data, error } = useQuery<ContentMetaApiResponse>(buildApiUrl('contents', slug));

  useEffect(() => {
    if (isSWRLoading({ data, error })) return;

    if (data?.contentMeta === null) {
      console.log(`WARNING: no contentMeta found for slug=${slug} in Supabase`);
    }
  }, [data, error, slug]);

  return (
    <>
      {data?.contentMeta?.views ?? '--'}
      {' views'}
    </>
  );
};
