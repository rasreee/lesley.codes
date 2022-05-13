import { css } from '@emotion/react'
import styled from '@emotion/styled'

/**
 * Wrapper that covers the entire screen as a backdrop
 */
export const ModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.25);
  max-height: 100vh;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding: 10vh;
  }
`

const baseModalStyle = css`
  margin: auto;
  width: 100%;
  max-width: 90%;
  max-height: 100%;
  min-height: 0;
  max-height: 90vh;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 46rem;
  }
`

/**
 * Modal container
 */
export const ModalContainer = styled.div(
  baseModalStyle,
  ({ theme }) => css`
    border-radius: ${theme.radii.lg};
    background: ${theme.colors.muted};
  `,
)
