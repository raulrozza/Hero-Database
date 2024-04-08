import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.layout.spacing(1)};
    gap: ${theme.layout.spacing(1)};

    background-color: ${lighten(0.15, theme.palette.primary[300])};
    border-top: 2px solid ${theme.palette.primary[500]};
    border-bottom: 2px solid ${theme.palette.neutral[900]};
  `}
`;
