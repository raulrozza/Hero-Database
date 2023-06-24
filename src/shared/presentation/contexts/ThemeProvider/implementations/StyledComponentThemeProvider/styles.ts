import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  @font-face {
    font-family: 'Newsflash-BB';
    src: url('Newsflash-BB.ttf.woff') format('woff'),
      url('Newsflash-BB.ttf.svg#Newsflash-BB') format('svg'),
      url('Newsflash-BB.ttf.eot'),
      url('Newsflash-BB.ttf.eot?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,
  html,
  #__next {
    height: 100%;
  }

  body,
  input,
  textarea,
  a,
  button {
    font-family: ${theme.typography.family.text};
    color: ${theme.palette.text.main};
    font-size: ${theme.typography.sizes.body1};
  }

  caption {
    font-size: ${theme.typography.sizes.caption};
  }

  body {
    background-color: ${theme.palette.neutral['200']};
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.typography.family.title};
  }

  h1 {
    font-size: ${theme.typography.sizes.title1};
    font-weight: ${theme.typography.weight.regular};
    letter-spacing: 2%;
  }

  h2 {
    font-size: ${theme.typography.sizes.title2};
    font-weight: ${theme.typography.weight.regular};
    letter-spacing: 0.25px;
  }

  h3 {
    font-size: ${theme.typography.sizes.title3};
    font-weight: ${theme.typography.weight.regular};
  }

  h4 {
    font-size: ${theme.typography.sizes.subtitle};
    font-weight: ${theme.typography.weight.regular};
  }
`}
`;
