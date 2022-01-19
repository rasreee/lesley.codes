import { ContentMetaApiResponse } from '@db/contents/types';
import { isRequesting } from '@lib/isRequesting';
import { getContentMetaApiRoute } from '@lib/routes';
import { useQuery } from '@lib/useQuery';
import { useEffect } from 'react';

export const ViewsCount = ({ slug }: { slug: string }) => {
  const { data, error } = useQuery<ContentMetaApiResponse>(getContentMetaApiRoute(slug));

  useEffect(() => {
    if (isRequesting(data, error)) return;

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
