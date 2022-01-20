import { isRegisterViewEnabled } from '@lib/environment';
import { buildApiUrl } from '@lib/routes';
import { useEffect } from 'react';

export const useRegisterPostView = (slug: string) => {
  useEffect(() => {
    if (!isRegisterViewEnabled()) return;

    const registerView = () =>
      fetch(buildApiUrl('contents', slug), {
        method: 'POST'
      });

    registerView();
  }, [slug]);
};
