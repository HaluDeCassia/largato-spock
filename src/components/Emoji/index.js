import React from 'react';
import { StyledEmoji, StyledIcon } from './styles.js';

export default function Emoji({ gradient, color, emoji, size, ariaLabel }) {
  return (
    <StyledEmoji size={size}>
      <StyledIcon gradient={gradient} color={color} aria-label={ariaLabel} className={`far fa-${emoji}`}></StyledIcon>
    </StyledEmoji>
  );
}
