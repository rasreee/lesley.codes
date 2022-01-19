import { getOrCreateContentMeta } from '@db/contents/getOrCreateContentMeta';
import { supabase } from '@lib/supabase';
import { ContentMeta } from '@models/contentMeta';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const contentMeta = await getOrCreateContentMeta(slug)(supabase);

      if (!contentMeta) {
        return res.status(500).json({ message: `No contentMeta found for slug=${slug}` });
      }

      const { data, error } = await supabase
        .from<ContentMeta>('contents')
        .update({ views: contentMeta.views + 1 })
        .maybeSingle();

      if (error) {
        return res.status(500).json(error);
      }

      if (!data) {
        return res.status(500).json({
          message: `Unexpected return type NULL after updating views for slug=${slug}`
        });
      }

      return res.status(200).json(data);
    }

    if (req.method === 'GET') {
      try {
        const contentMeta = await getOrCreateContentMeta(slug)(supabase);

        return res.status(200).json({ contentMeta });
      } catch (err) {
        console.error('Failed to fetch contentMeta. ', JSON.stringify(err));

        return res.status(500).json({ message: (err as Error).message });
      }
    }
  } catch (e) {
    console.error('Failed to fetch contentMeta. ', JSON.stringify(e));

    return res.status(500).json({ message: (e as Error).message });
  }
}
