import { css } from '@emotion/react'

import { colors } from './colors'
import { mdxCss } from './mdxCss'
import { overrideInputStyles } from './overrides'

const globalStyles = css`
  ${overrideInputStyles}

  div.font-pacifico {
    font-family: 'Pacifico', cursive;
    font-weight: 400 !important;
    font-size: 4rem;
  }

  /* colors */
  :root {
    --bg-main: ${colors.bg};
    --tx-bg: ${colors.bg};
    --tx-muted: ${colors.muted};
    --bg-sub: ${colors.muted};
    --tx-text: ${colors.text};
    --tx-text-md: ${colors.textMd};
    --tx-sub: ${colors.hint};
    --tx-sub-dark: ${colors.hintDark};
    --tx-accent: ${colors.accent};
    --tx-accent-light: ${colors.accentLight};
    --tx-hint-dark: ${colors.hintDark};

    --radii-md: 0.375rem;
    --radii-full: 9999px;

    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-bold: 700;

    --font-body: 'Open Sans', sans-serif;
    --font-heading: 'Jost', sans-serif;

    --page-max-width: 48rem;

    --current-bg: var(--tx-bg);
  }

  html {
    min-height: 100vh !important;
    height: 100vh !important;
    min-width: 100vw !important;
    width: 100vw !important;
  }

  body {
    min-height: 100vh !important;
    height: 100vh !important;
    min-width: 100vw !important;
    width: 100vw !important;
  }

  #__next {
    min-height: 100vh !important;
    height: 100vh !important;
    min-width: 100vw !important;
    width: 100vw !important;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: var(--bg-main);
    color: var(--tx-text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: var(--font-body), -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    line-height: 1.125;
    font-weight: var(--fw-bold);
    margin: 0;
  }

  p,
  span {
    font-family: var(--font-body);
    line-height: 1.5;
    margin: 0;
  }

  .container {
    max-width: 68rem !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 92% !important;
  }

  .min-h-main {
    height: calc(100vh - 82px) !important;
    min-height: calc(100vh - 82px) !important;
  }

  ${mdxCss}
`

export { globalStyles }
