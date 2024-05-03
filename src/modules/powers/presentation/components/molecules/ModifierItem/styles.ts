import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.palette.neutral[50]};
  `}
`;

interface ISubtitleProps {
  color: 'secondary' | 'contrast';
}

export const Subtitle = styled.div<ISubtitleProps>`
  ${({ theme, color }) => css`
    color: ${theme.palette.text.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${theme.layout.spacing(2)};
    background-color: ${theme.palette[color][500]};
    width: 100%;
  `}
`;

export const Variant = styled.div``;
