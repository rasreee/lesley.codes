import { ContentMeta } from '@models/contents';
import { SupabaseClient } from '@supabase/supabase-js';

export const getContentMeta = (slug: string) => {
  return async (supabase: SupabaseClient): Promise<ContentMeta | null> => {
    const { data, error } = await supabase
      .from<ContentMeta>('contents')
      .select('*')
      .eq('slug', slug)
      .limit(1);

    if (error) throw error;

    return data ? data[0] : null;
  };
};
