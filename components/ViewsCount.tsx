import { ContentMetaApiResponse } from '@db/contents/types';
import { ApiRouteKeys, ApiRoutes } from '@lib/apiRoutes';
import { isRequesting } from '@lib/isRequesting';
import { useQuery } from '@lib/useQuery';
import { useEffect } from 'react';

export const ViewsCount = ({ slug }: { slug: string }) => {
  const { data, error } = useQuery<ContentMetaApiResponse>(
    ApiRoutes.CONTENTS.replace(ApiRouteKeys.SLUG, slug)
  );

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
