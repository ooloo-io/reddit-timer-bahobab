import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Montserrat Regular */
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("./fonts/Montserrat-Regular.woff") format("woff"),
    url("./fonts/Montserrat-Regular.woff2") format("woff2");
  }

  /* Montserrat Medium */
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("./fonts/Montserrat-Medium.woff") format("woff"),
    url("./fonts/Montserrat-Medium.woff2") format("woff2");
  }

  /* Montserrat Semi-Bold */
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url("./fonts/Montserrat-SemiBold.woff") format("woff"),
    url("./fonts/Montserrat-SemiBold.woff2") format("woff2");
  }

  /* Montserrat Bold */
  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src: url("./fonts/Montserrat-Bold.woff") format("woff"),
    url("./fonts/Montserrat-Bold.woff2") format("woff2");
  }

  /* =================== */

  /* Bitter Regular */
  @font-face {
    font-family: "Bitter Regular";
    font-weight: 400;
    font-style: normal;
    src: url("./fonts/Bitter-Regular.woff") format("woff"),
    url("./fonts/Bitter-Regular.woff2") format("woff2");
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body{
    font-family: ${(props) => props.theme.font.family.default};
    size: ${(props) => props.theme.size.default};
    line-height: ${(props) => props.theme.lineHeight.default};
    color: ${(props) => props.theme.color.text};
    letter-spacing: 0.07px;
    background: ${(props) => props.theme.background.default};
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
