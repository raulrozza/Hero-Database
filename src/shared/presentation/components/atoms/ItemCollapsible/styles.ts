import { Item, Trigger } from '@radix-ui/react-accordion';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

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
