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

  * {
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
      transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  html {
    font-size: 16px;
    height: 100vh;
  }

  body {
    font-size: 16px;
    line-height: 150%;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    transition-property: all;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    min-height: 100%;
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
