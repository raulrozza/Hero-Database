import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.layout.spacing(57)};
    background-color: ${theme.palette.neutral[50]};

    header {
      color: ${theme.palette.text.white};
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      padding: ${theme.layout.spacing(2)};
      background-color: ${theme.palette.primary[500]};
    }

    .content {
      padding: ${theme.layout.spacing(2)};
    }

    footer {
      padding: ${theme.layout.spacing(2)};
      display: flex;
      justify-content: flex-end;

      font-size: ${theme.typography.sizes.caption};
    }
  `}
`;
