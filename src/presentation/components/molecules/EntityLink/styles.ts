import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${({ theme }) => css`
    a {
      text-decoration: none;

      font-weight: ${theme.typography.weight.extraBold};
      color: ${theme.palette.contrast[500]};

      transition: all 0.2s;

      &:hover {
        color: ${theme.palette.contrast[300]};
      }
    }
  `}
`;
