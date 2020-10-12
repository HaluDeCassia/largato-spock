import styled, { createGlobalStyle } from "styled-components";
import { dangerColor, darkColor, lightColor } from "./colors";

import Comfortaa from '../fonts/Comfortaa-VariableFont_wght.ttf';

import "font-awesome/css/font-awesome.css";

export const transitionAllEase = `transition: all 0.2s ease-out;`;

export const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
  color: ${lightColor};
  padding: 0.5rem 1rem 0.5rem 3rem;
  background-color: ${dangerColor};
  box-shadow: 0 0 6px ${darkColor};

  ${ transitionAllEase }

  &:hover {
    ${ transitionAllEase }
    box-shadow: 0 0 14px ${darkColor};
  }

  .icon-button {
    position: absolute;
    border-radius: 100%;
    color: ${dangerColor};
    padding: 0.7rem 0.8rem;
    margin: -0.6rem -3.2rem;
    background-color: ${lightColor};
  }
`;

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'Comfortaa';
    src: url(${Comfortaa});
  }

  html, body {
    margin: 0;
    height: 100vh;
    font-size: 16px;
    color: ${darkColor};
    background-color: ${lightColor};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Comfortaa', cursive;

    button:focus {
      outline: 0;
    }
  }
`;