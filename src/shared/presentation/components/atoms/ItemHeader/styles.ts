import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    color: ${theme.palette.text.white};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    padding: ${theme.layout.spacing(2)};
    background-color: ${theme.palette.primary[500]};
  `}
`;
