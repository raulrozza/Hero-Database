import { Content as RadixContent } from '@radix-ui/react-tooltip';
import styled, { css, keyframes } from 'styled-components';

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Content = styled(RadixContent)`
  ${({ theme }) => css`
    transform-origin: var(--radix-tooltip-content-transform-origin);
    animation: ${scaleIn} 0.2s ease-out;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    max-height: var(--radix-tooltip-content-available-height);

    overflow: auto;
    overflow-x: hidden;

    .arrow {
      fill: ${theme.palette.neutral[50]};
    }

    &[data-side='bottom'] .arrow {
      fill: ${theme.palette.primary[500]};
    }
  `}
`;
