import styled, { css } from 'styled-components';

import { VARIABLES } from '../../constants/variables';

export const Container = styled.header`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.palette.primary[500]};

    ${VARIABLES.TITLE_BORDER}: 0px;
  `}
`;
