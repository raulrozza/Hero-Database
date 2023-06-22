import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.layout.spacing(1)};
    padding: ${theme.layout.spacing(2)};

    strong {
      font-size: ${theme.typography.sizes.subtitle};
      font-weight: ${theme.typography.weight.extraBold};
    }
  `}
`;
