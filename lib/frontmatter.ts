import { ReadTimeResults } from 'reading-time';

export type BlogFrontmatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  createdAt: string;
  lastUpdated?: string;
  image: string;
  tags: string;
};

export interface BlogFrontmatterWithSlug extends BlogFrontmatter {
  slug: string;
}
