import { ContentMeta } from '@features/blog';
import { NullDataError } from '@lib/error';
import { buildApiUrl } from '@lib/routes';
import { useQuery, UseQueryResult } from '@lib/swr';
import { SupabaseClient } from '@supabase/supabase-js';
import { useEffect } from 'react';

import { getContentMeta } from './getContentMeta';

export const getOrCreateContentMeta = (slug: string) => {
  return async (supabase: SupabaseClient): Promise<ContentMeta> => {
    const foundContentMeta = await getContentMeta(slug)(supabase);
    if (foundContentMeta) return foundContentMeta;

    console.log(`No contentMeta found for slug=${slug}. Inserting row...`);

    const { data, error } = await supabase
      .from<ContentMeta>('contents')
      .insert({ slug, views: 0 })
      .limit(1);

    if (error) throw error;

    if (!data) throw new NullDataError('contents', 'insert');

    return data[0];
  };
};

export const useGetOrCreateContentMeta = (slug: string): UseQueryResult<ContentMeta> => {
  const response = useQuery<ContentMeta>(buildApiUrl('contents', slug));
  const { data, error } = response;
  useEffect(() => {
    console.log('🌙 ContentMeta Data: ', data);
    error && console.log('❌ ContentMeta Error: ', error);
  }, [data, error]);
  return response;
};
