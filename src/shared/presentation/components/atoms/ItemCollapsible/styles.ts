import {
  Item,
  Trigger,
  Content as RadixContent,
} from '@radix-ui/react-accordion';
import { transparentize } from 'polished';
import styled, { css, keyframes } from 'styled-components';

export const Container = styled(Item)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${transparentize(0.5, theme.palette.secondary[300])};
  `}
`;

export const Header = styled(Trigger)`
  ${({ theme }) => css`
    color: ${theme.palette.text.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    padding: ${theme.layout.spacing(2)};
    background-color: ${theme.palette.secondary[500]};
    width: 100%;
    border: none;

    transition: all 0.2s;

    &:hover {
      background-color: ${theme.palette.secondary[800]};
    }

    &[data-state='open'] > svg {
      transform: rotate(180deg);
    }
  `}
`;

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

export const Content = styled(RadixContent)`
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms ease-out;
  }
`;
