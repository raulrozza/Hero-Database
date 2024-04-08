import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.palette.neutral[50]};
  `}
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: ${theme.layout.spacing(1)};
    gap: ${theme.layout.spacing(1)};

    background-color: ${lighten(0.1, theme.palette.primary[300])};

    color: ${theme.palette.text.black};

    > div {
      display: flex;
      gap: ${theme.layout.spacing(1)};

      p {
        font-weight: ${theme.typography.weight.light};

        strong {
          font-weight: ${theme.typography.weight.extraBold};
        }
      }
    }
  `}
`;
