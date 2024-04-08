import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.palette.primary[500]};

    h2 {
      border-bottom: 0;
    }
  `}
`;
