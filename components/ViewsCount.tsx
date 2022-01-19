import { useContentMetaApi } from '@db/contents/useContentMetaApi';
import { isRequesting } from '@lib/isRequesting';
import { useEffect } from 'react';

export const ViewsCount = ({ slug }: { slug: string }) => {
  const { data, error } = useContentMetaApi(slug);

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
