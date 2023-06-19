import styled, { css } from 'styled-components';

export const Table = styled.table<{ spans: number[] }>`
  ${({ theme, spans }) => css`
    display: flex;
    flex-direction: column;

    tbody {
      display: flex;
      flex-direction: column;
    }

    tr {
      width: 100%;
      display: grid;
      grid-template-columns: ${spans.map(span => `${span}fr`).join(' ')};
      text-align: left;
      align-items: center;
      background-color: ${theme.palette.neutral[50]};
    }
  `}
`;

export const TableHead = styled.th`
  ${({ theme }) => css`
    background-color: ${theme.palette.neutral[100]};
    padding: ${theme.layout.spacing(0.5, 1)};
    font-size: ${theme.typography.sizes.subtitle};
    color: ${theme.palette.text.light};
    font-weight: ${theme.typography.weight.regular};
    border: 1px solid ${theme.palette.neutral[300]};
    text-align: center;
  `}
`;

export const Row = styled.tr`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.sizes.body1};
  `}
`;

export const TableContent = styled.td`
  ${({ theme }) => css`
    border: 1px solid ${theme.palette.neutral[300]};
    padding: ${theme.layout.spacing(0.5, 1)};
    text-align: center;

    &:nth-child(1) {
      font-weight: ${theme.typography.weight.bold};
      text-align: left;
    }
  `}
`;

export const SectionContent = styled.tr`
  ${({ theme }) => css`
    border: 1px solid ${theme.palette.neutral[300]};
    padding: ${theme.layout.spacing(0.5, 1)};

    color: ${theme.palette.neutral[600]};
  `}
`;
