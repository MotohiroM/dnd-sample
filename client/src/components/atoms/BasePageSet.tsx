import { css } from 'styled-components';

export const SBasePage = css`
  width: 100%;
  height: 100vh;
  padding-top: ${({ theme }) => theme.headerHeight.height};
`;
