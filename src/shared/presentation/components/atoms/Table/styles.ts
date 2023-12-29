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

    th {
      display: flex;
    }
  `}
`;

export const TableHeadButton = styled.button<{ active?: boolean }>`
  ${({ theme, onClick, active }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${active
      ? theme.palette.neutral[200]
      : theme.palette.neutral[100]};
    padding: ${theme.layout.spacing(0.5, 1)};
    font-size: ${theme.typography.sizes.subtitle};
    color: ${theme.palette.text.light};
    font-weight: ${theme.typography.weight.regular};
    border: 1px solid ${theme.palette.neutral[300]};
    text-align: center;

    ${!!onClick &&
    css`
      cursor: pointer;
    `}
  `}
`;

export const Row = styled.tr<{ highlighted: boolean }>`
  ${({ theme, highlighted, onClick }) => css`
    font-weight: ${theme.typography.weight.regular};
    font-size: ${theme.typography.sizes.body1};

    transition: all 0.2s;

    ${highlighted &&
    css`
      td:nth-child(1) {
        color: ${theme.palette.primary[300]};
      }
    `}

    ${!!onClick &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${theme.palette.neutral[100]};
      }
    `}
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
