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
    align-items: flex-end;

    padding: ${theme.layout.spacing(2)};
    background-color: ${theme.palette.secondary[500]};
    width: 100%;
    border: none;
  `}
`;
