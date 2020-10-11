import React from 'react';

import styled, { css } from "styled-components";

import { darkColor } from '../../styles/colors';

const GradientIcon = css`
  background: -webkit-gradient(linear, left top, left bottom, from(${props => props.color}), to(${darkColor}));
  display: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:before {
    background: -webkit-gradient(linear, left top, left bottom, from(${props => props.color}), to(${darkColor}));
    display: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StyledEmoji = styled.span`
  border: none;
  background: none;
  font-size: ${props => props.size}rem;
`;

export const StyledIcon = styled.i`
  color: ${props => props.color || darkColor};
  
  ${props => props.gradient ? GradientIcon : ''}
`;
