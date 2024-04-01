import { Content } from '@radix-ui/react-navigation-menu';
import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    gap: ${theme.layout.spacing(4.5)};
    padding: ${theme.layout.spacing(3, 4.5)};
    background-color: ${theme.palette.primary[500]};

    .logo {
      height: 100%;
      display: flex;
      align-items: center;

      a {
        color: ${theme.palette.text.white};
        font-family: ${theme.typography.family.title};
        font-size: ${theme.typography.sizes.title1};
        text-decoration: none;
      }
    }

    .links {
      display: flex;
    }
  `}
`;

export const Menu = styled(Content)`
  ${({ theme }) => css`
    position: absolute;
  `}
`;
