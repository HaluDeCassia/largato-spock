import styled from "styled-components";

import { transitionAllEase } from '../../styles/global';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 4rem;
  background: none;
  text-shadow: 0px 0px 4px #5e434361;

  ${transitionAllEase}

  &:hover {
    ${transitionAllEase}
    text-shadow: -4px 6px 6px #5e434361;
  }
`;
