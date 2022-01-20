import { Post } from '@features/blog/models';
import { postApiKeys } from '@lib/api';
import { useQuery, UseQueryResult } from '@lib/swr';
import { useEffect } from 'react';

export const usePost = (slug: string): UseQueryResult<Post> => {
  const key = postApiKeys.detail(slug).join('/');
  const response = useQuery<Post>(key);
  const { data, error } = response;
  useEffect(() => {
    console.log('🌙 Post Data: ', data);
    error && console.log('❌ Post Error: ', error);
  }, [data, error]);
  return response;
};
