import { createGlobalStyle } from "styled-components";
import SatoshiRegular from "./fonts/Satoshi-Regular.otf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi Regular';
    src: url(${SatoshiRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;
