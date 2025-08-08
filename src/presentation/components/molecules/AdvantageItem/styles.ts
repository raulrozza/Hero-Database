import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.palette.neutral[50]};
  `}
`;
