import { getAllPosts } from '@lib/api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    const err = new Error(
      `Invalid API request method ${req.method}. Only GET requests are allowed for /api/posts.`
    );

    console.error('Failed to fetch contentMeta. ', JSON.stringify(err));

    return res.status(500).json({ message: (err as Error).message });
  }

  try {
    const allPosts = getAllPosts();

    return res.status(200).json({ data: allPosts });
  } catch (err) {
    console.error('Failed to fetch all posts. ', JSON.stringify(err));

    return res.status(500).json({ message: (err as Error).message });
  }
}
