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
  background-image: linear-gradient(to bottom right, #d50000, ${dangerColor});
  box-shadow: -2px 2px 6px ${darkColor};

  ${ transitionAllEase }

  &:hover {
    ${ transitionAllEase }
    box-shadow: -2px 2px 10px ${darkColor};
    background-image: linear-gradient(to bottom right, ${dangerColor}, #de3535, #d50000);
  }
`;

export const IconButton = styled.i`
  position: absolute;
  border-radius: 100%;
  padding: 0.7rem 0.8rem;
  margin: -0.6rem -3.2rem;
  background-color: ${lightColor};
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

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }

    @media screen and (max-width: 320px) {
      font-size: 10px;
    }
  }
`;