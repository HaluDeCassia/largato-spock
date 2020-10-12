import React from 'react';
import { StyledIcon } from './styles.js';

export default function Emoji({ solid, gradient, color, emoji, size, ariaLabel }) {
  return (
    <StyledIcon gradient={gradient} size={size} color={color} aria-label={ariaLabel} className={`fa${solid ?'s' : 'r'} fa-${emoji}`}></StyledIcon>
  );
}
