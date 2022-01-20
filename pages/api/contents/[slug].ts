import { getOrCreateContentMeta } from '@features/blog';
import { supabase } from '@lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = req.query.slug.toString();

    const contentMeta = await getOrCreateContentMeta(slug)(supabase);

    return res.status(200).json(contentMeta);
  } catch (e) {
    console.error('Failed to fetch contentMeta. ', JSON.stringify(e));

    return res.status(500).json({ message: (e as Error).message });
  }
}
