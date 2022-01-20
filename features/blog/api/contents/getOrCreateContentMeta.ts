import { ContentMeta } from '@features/blog';
import { NullDataError } from '@lib/error';
import { SupabaseClient } from '@supabase/supabase-js';

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
