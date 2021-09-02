import { css } from '@emotion/react';
import { fontFamily } from './typography';

export const globalStyles = css`
  body {
    font-family: ${fontFamily};
  }
  * {
    margin: 0;
    padding: 0;
  }
`;
