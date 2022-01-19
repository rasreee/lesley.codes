import { useContentMeta } from '@db/contents/useContentMeta';
import { isRequesting } from '@lib/isRequesting';
import { useEffect } from 'react';

export const ViewsCount = ({ slug }: { slug: string }) => {
  const { data, error } = useContentMeta(slug);

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
