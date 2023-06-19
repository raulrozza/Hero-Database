import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.layout.spacing(3)};
    padding-bottom: ${theme.layout.spacing(3)};
    height: 100%;

    main {
      display: flex;
      align-self: center;
      gap: ${theme.layout.spacing(2)};

      height: calc(100% - 100px);

      table {
        max-height: 100%;
        flex-grow: 0;
        tbody {
          overflow-y: auto;
        }
      }
    }
  `}
`;
