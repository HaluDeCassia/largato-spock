import styled, { createGlobalStyle } from "styled-components";
import {lightColor, darkColor } from "./colors";

import "font-awesome/css/font-awesome.css";

export const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Global = createGlobalStyle`
html, body {
  margin: 0;
  height: 100vh;
  font-size: 16px;
  color: ${darkColor};
  background-color: ${lightColor};
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: Comfortaa, san-serif;
}
`;