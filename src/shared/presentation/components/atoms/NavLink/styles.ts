import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;

    background-color: ${theme.palette.secondary[500]};

    &[data-active='true'] {
      background-color: ${theme.palette.primary[800]};
    }

    transition: all 0.2s;

    a {
      flex: 1;
      text-align: center;
      padding: ${theme.layout.spacing(0.5, 1)};
      color: ${theme.palette.text.white};
      font-family: ${theme.typography.family.title};
      font-size: ${theme.typography.sizes.title3};
      text-decoration: none;
    }

    &:hover {
      background-color: ${lighten(0.05, theme.palette.secondary[500])};

      &[data-active='true'] {
        background-color: ${lighten(0.05, theme.palette.primary[800])};
      }
    }
  `}
`;
