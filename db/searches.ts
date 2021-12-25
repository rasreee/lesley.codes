import { isRegisterSearchEnabled } from 'lib/environment';
import { supabase } from 'lib/supabase';

export type Search = {
  query: UniqueId;
  count: number;
};

export const registerSearch = async (query: string) => {
  if (!isRegisterSearchEnabled()) {
    console.log(
      'Registering search disabled due to NEXT_PUBLIC_REGISTER_SEARCHES env variable'
    );

    return;
  }

  console.log('Registering search query: ', query);

  /* Check if search entry exists for query */
  const { data, error } = await supabase
    .from<Search>('searches')
    .select('*')
    .eq('query', query)
    .maybeSingle();

  if (error) throw error;

  if (data) {
    await supabase.from<Search>('searches').update({ count: data.count + 1 });

    return;
  }

  await supabase.from<Search>('searches').upsert({ query });
};
