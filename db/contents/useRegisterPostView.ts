import { isRegisterViewEnabled } from '@lib/environment';
import { useEffect } from 'react';

export const useRegisterPostView = (slug: string) => {
  useEffect(() => {
    if (!isRegisterViewEnabled()) {
      console.log(
        'Registering views disabled due to NEXT_PUBLIC_REGISTER_VIEWS env variable'
      );

      return;
    }

    const registerView = () =>
      fetch(`/api/contents/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);
};
