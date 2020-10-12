import styled from "styled-components";

import { transitionAllEase } from '../../styles/global';

export const StyledRules = styled.div`
  margin: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  background: transparent;
  text-decoration: underline;

  ${ transitionAllEase }

  &:hover {
    color: brown;
  }
`;
