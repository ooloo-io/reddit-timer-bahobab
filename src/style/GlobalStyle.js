import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Montserrat Regular */
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: local("./fonts/Montserrat-Regular.woff") format("woff"),
    local("./fonts/Montserrat-Regular.woff2") format("woff2");
  }

  /* Montserrat Medium */
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: local("./fonts/Montserrat-Medium.woff") format("woff"),
    local("./fonts/Montserrat-Medium.woff2") format("woff2");
  }

  /* Montserrat Semi-Bold */
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: local("./fonts/Montserrat-SemiBold.woff") format("woff"),
    local("./fonts/Montserrat-SemiBold.woff2") format("woff2");
  }

  /* Montserrat Bold */
  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src:locall("./fonts/Montserrat-Bold.woff") format("woff"),
    local("./fonts/Montserrat-Bold.woff2") format("woff2");
  }

  /* =================== */

  /* Bitter Regular */
  @font-face {
    font-family: "Bitter Regular";
    font-weight: 400;
    font-style: normal;
    src: local("./fonts/Bitter-Regular.woff") format("woff"),
    local("./fonts/Bitter-Regular.woff2") format("woff2");
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body{
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.size.default};
    line-height: ${(props) => props.theme.lineHeight.default};
    letter-spacing: ${(props) => props.theme.letterSpacing.default};
    color: ${(props) => props.theme.color.text};
    background: ${(props) => props.theme.background.default};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.color.dark};
    font-family: ${(props) => props.theme.font.family.eadline};
    letter-spacing: ${(props) => props.theme.letterSpacing.heading};
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff
;  }
`;

export default GlobalStyle;
