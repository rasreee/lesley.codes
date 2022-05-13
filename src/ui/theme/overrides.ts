import { css } from '@emotion/react'

export const overrideInputStyles = css`
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: unset !important;
    -webkit-text-fill-color: unset !important;
  }

  input:-internal-autofill-selected {
    background-color: unset !important;
    color: unset !important;
  }

  &:focus-visible {
    outline: unset !important;
  }

  input[type='email']:focus {
    outline: unset !important;
    outline-offset: unset !important;
    box-shadow: unset !important;
  }

  /* clears the ‘X’ from Internet Explorer */
  input[type='search']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  /* clears the ‘X’ from Chrome */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }
`
