import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.layout.spacing(3)};

    main {
      display: flex;
      align-self: center;
      gap: ${theme.layout.spacing(2)};
    }
  `}
`;
