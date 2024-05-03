import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.section<{ themeName: 'light' | 'dark' }>`
  ${({ theme, themeName }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.layout.spacing(1)};
    gap: ${theme.layout.spacing(1)};

    background-color: ${themeName === 'light'
      ? lighten(0.15, theme.palette.primary[300])
      : darken(0.15, theme.palette.primary[800])};
    border-top: 2px solid ${theme.palette.primary[500]};
    border-bottom: 2px solid ${theme.palette.neutral[900]};

    h2,
    h3 {
      border-bottom: none;
    }
  `}
`;
