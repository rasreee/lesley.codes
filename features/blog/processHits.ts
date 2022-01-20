import { Post } from '@features/blog';
import parseISO from 'date-fns/parseISO';

const compareCreatedAt = (a: SearchData, b: SearchData) =>
  -1 * (parseISO(a.createdAt).getTime(), parseISO(b.createdAt).getTime());

export const processHits =
  (allData: Array<Post['frontMatter']>) =>
  (query: string): Array<Post['frontMatter']> => {
    if (!query) return allData;

    return allData
      .filter((frontMatter) => frontMatter.title.toLowerCase().includes(query.toLowerCase()))
      .slice()
      .sort(compareCreatedAt);
  };
