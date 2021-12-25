import { useContentMeta } from 'db/contents';
import { useEffect } from 'react';

export const ViewsCount = ({ slug }: { slug: string }) => {
  const { data, error, loading } = useContentMeta(slug);

  useEffect(() => {
    if (loading) return;

    if (data?.contentMeta === null) {
      console.log(`WARNING: no contentMeta found for slug=${slug} in Supabase`);
    }
  }, [data, error, loading, slug]);

  return (
    <>
      {data?.contentMeta?.views ?? '--'}
      {' views'}
    </>
  );
};
