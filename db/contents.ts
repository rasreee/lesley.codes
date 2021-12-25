import { SupabaseClient } from '@supabase/supabase-js';
import { fetcher } from 'lib/fetcher';
import { useEffect } from 'react';
import useSWR, { SWRResponse } from 'swr';

export type ContentMeta = {
  slug: string;
  views: number;
  likes: number;
};

export const getContentMeta = (slug: string) => {
  return async (supabase: SupabaseClient): Promise<ContentMeta | null> => {
    const { data, error } = await supabase
      .from<ContentMeta>('contents')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) throw error;

    return data;
  };
};

export type ContentMetaRes = { contentMeta: ContentMeta | null };

export type SWRResponseWithLoading<T> = SWRResponse<T, Error> & {
  loading: boolean;
};

export const useContentMeta = (
  slug: string
): SWRResponseWithLoading<ContentMetaRes> => {
  const swr = useSWR<ContentMetaRes, Error>(`/api/contents/${slug}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const loading =
    typeof swr.data === 'undefined' && typeof swr.error === 'undefined';

  return { ...swr, loading };
};

export const useIncrementPostView = (slug: string) => {
  useEffect(() => {
    const registerView = () =>
      fetch(`/api/contents/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);
};
