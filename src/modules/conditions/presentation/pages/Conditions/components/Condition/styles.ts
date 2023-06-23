import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.layout.spacing(57)};
    background-color: ${theme.palette.neutral[50]};

    max-height: 100%;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;
