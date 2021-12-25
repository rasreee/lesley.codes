import { createClient } from '@supabase/supabase-js';

const initSupabase = (
  url = process.env.NEXT_PUBLIC_SUPABASE_URL,
  apiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY
) => {
  if (!url) throw new Error('NEXT_PUBLIC_SUPABASE_URL was undefined');
  if (!apiKey) throw new Error('NEXT_PUBLIC_SUPABASE_API_KEY was undefined');

  return createClient(url, apiKey);
};

export const supabase = initSupabase();
