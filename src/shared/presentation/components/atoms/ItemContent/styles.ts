import styled, { css } from 'styled-components';

import { VARIABLES } from './constants/variables';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.layout.spacing(1)};
    padding: ${theme.layout.spacing(2)};

    ${VARIABLES.TITLE_BORDER}: 1px;

    h2 {
      border-bottom: var(${VARIABLES.TITLE_BORDER}) solid
        ${theme.palette.text.main};
      padding-bottom: ${theme.layout.spacing(0.5)};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: ${theme.layout.spacing(1)};
      padding-left: ${theme.layout.spacing(4)};
    }
  `}
`;
