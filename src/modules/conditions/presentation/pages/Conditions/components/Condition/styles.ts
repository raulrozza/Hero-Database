import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.layout.spacing(57)};
    background-color: ${theme.palette.neutral[50]};
  `}
`;
