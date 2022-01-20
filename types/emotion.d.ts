/* eslint-disable @typescript-eslint/no-empty-interface */
import { Interpolation } from '@emotion/react';
import {} from '@emotion/react/types/css-prop'; // See https://github.com/emotion-js/emotion/pull/1941
import { Theme as AppTheme } from '@ui/styles/lightTheme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

declare module 'react' {
  interface Attributes {
    styles?: Styling;
    css?: Interpolation<AppTheme>;
  }
}
