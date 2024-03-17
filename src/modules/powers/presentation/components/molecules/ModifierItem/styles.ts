import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.palette.neutral[50]};
  `}
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.text.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${theme.layout.spacing(2)};
    background-color: ${theme.palette.secondary[500]};
    width: 100%;
  `}
`;
