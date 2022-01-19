import { getPost } from '@db/posts/getPost';
import { getSlugQueryParam } from '@ui/utils/getSlugQueryParam';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = getSlugQueryParam(req.query);

  try {
    const data = await getPost(slug);

    return res.status(200).json(data);
  } catch (error) {
    console.error(`Failed to fetch /post/${slug}. `, JSON.stringify(error));

    return res.status(500).json(error);
  }
}
