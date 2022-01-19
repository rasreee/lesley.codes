import styled from '@emotion/styled';

/**
 * Wrapper that covers the entire screen as a backdrop
 */
export const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    padding: 10vh;
  }
`;

/**
 * Modal container
 */
export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  background: #fff;

  @media (min-width: 768px) {
    max-width: 46rem;
  }
`;

export const Header = styled.header`
  flex: none;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin: 0 1.5rem;
`;

export const Body = styled.div`
  flex: auto;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 0 1.5rem 1.5rem;
  overflow: auto;
`;

export const Footer = styled.footer`
  flex: none;
  display: flex;
  justify-content: flex-end;
  margin: 0 1.5rem;
  border-top: 1px solid #e5e7eb;
  padding: 0.25rem 0;
`;
