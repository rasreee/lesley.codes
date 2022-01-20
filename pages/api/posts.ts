import { getPost, listPostSlugs, PostsApiResponse } from '@features/blog/api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    const err = new Error(
      `Invalid API request method ${req.method}. Only GET requests are allowed for /api/posts.`
    );

    console.error('Failed to fetch all posts. ', JSON.stringify(err));

    return res.status(500).json({ message: (err as Error).message });
  }

  try {
    const posts = await Promise.all(listPostSlugs().map((slug) => getPost(slug)));
    const response: PostsApiResponse = { posts };

    return res.status(200).json(response);
  } catch (err) {
    console.error('Failed to fetch all posts. ', JSON.stringify(err));

    return res.status(500).json({ message: (err as Error).message });
  }
}
