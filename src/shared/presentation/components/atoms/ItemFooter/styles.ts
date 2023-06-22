import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.layout.spacing(2)};
    display: flex;
    justify-content: flex-end;

    font-size: ${theme.typography.sizes.caption};
  `}
`;
