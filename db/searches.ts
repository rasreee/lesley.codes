import { supabase } from '@lib/supabase';

export type Search = {
  query: UniqueId;
  count: number;
};

export const registerSearch = async (query: string): Promise<Search> => {
  console.log('Registering search query: ', query);

  /* Check if search entry exists for query */
  const { error: findError, count } = await supabase
    .from<Search>('searches')
    .select('*')
    .eq('query', query)
    .limit(1);

  if (findError) throw findError;

  /* Update existing data if found */
  if (count) {
    const { data: updateData, error: updateError } = await supabase
      .from<Search>('searches')
      .update({ count: count + 1 })
      .maybeSingle();

    if (updateError) throw updateError;

    if (!updateData) {
      throw new Error(
        'Expected data to be defined after upserting search data with no error'
      );
    }

    return updateData;
  }

  /* Create new search entry row */
  const { data: upsertData, error: upsertError } = await supabase
    .from<Search>('searches')
    .upsert({ query })
    .maybeSingle();

  if (upsertError) throw upsertError;

  if (!upsertData) {
    throw new Error(
      'Expected data to be defined after upserting search data with no error'
    );
  }

  return upsertData;
};
