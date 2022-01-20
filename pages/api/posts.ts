import { listPosts } from '@features/blog/api/posts';
import { PostsApiResponse } from '@features/blog/api/posts';
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
    const posts = await listPosts();
    const response: PostsApiResponse = { posts };

    return res.status(200).json(response);
  } catch (err) {
    console.error('Failed to fetch all posts. ', JSON.stringify(err));

    return res.status(500).json({ message: (err as Error).message });
  }
}
