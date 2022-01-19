import { css, Global } from '@emotion/react';

import componentStyles from './componentStyles';
import { overrideInputStyles, overrideScrollbarStyles } from './overrideStyles';

const globalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100vh;
  }

  #__next {
    min-height: 100vh;
    min-width: 100vw !important;
    overflow: auto;
    padding: 0;
    margin: 0;
    position: relative;
  }

  ${overrideScrollbarStyles}
  ${overrideInputStyles}
  ${componentStyles}
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
