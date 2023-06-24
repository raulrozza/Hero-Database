import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.layout.spacing(50)};
    background-color: ${theme.palette.neutral[50]};

    > span {
      padding: ${theme.layout.spacing(4, 6)};
      color: ${theme.palette.primary[800]};
    }
  `}
`;
