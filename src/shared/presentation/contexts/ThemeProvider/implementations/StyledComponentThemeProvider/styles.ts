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

    scrollbar-width: thin;

    &::-webkit-scrollbar {
      display: block;
      height: 0.5rem;
      width: 0.5rem;
      overflow: auto;
      background-color: ${theme.palette.neutral[100]};

      &-thumb {
        transition: 0.5s;
        background-color: ${theme.palette.neutral[400]};
        &:hover {
          background-color: ${theme.palette.neutral[500]};
        }
      }
    }
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
    letter-spacing: ${theme.typography.letterSpacing.body1};
  }

  caption {
    font-size: ${theme.typography.sizes.caption};
    letter-spacing: ${theme.typography.letterSpacing.caption};
  }

  body {
    background-color: ${theme.palette.neutral['200']};
    min-height: 100vh;
  }

  h1,
  h2,
  h3 {
    font-family: ${theme.typography.family.title};
  }

  h1 {
    font-size: ${theme.typography.sizes.title1};
    font-weight: ${theme.typography.weight.regular};
    letter-spacing: ${theme.typography.letterSpacing.title1};
  }

  h2 {
    font-size: ${theme.typography.sizes.title2};
    font-weight: ${theme.typography.weight.regular};
    letter-spacing: ${theme.typography.letterSpacing.title2};
  }

  h3 {
    font-size: ${theme.typography.sizes.title3};
    font-weight: ${theme.typography.weight.regular};
    letter-spacing: ${theme.typography.letterSpacing.title3};
  }

  h4 {
    font-size: ${theme.typography.sizes.subtitle};
    font-weight: ${theme.typography.weight.extraBold};
    letter-spacing: ${theme.typography.letterSpacing.subtitle};
  }

  ul {
    list-style: none;
  }
`}
`;
