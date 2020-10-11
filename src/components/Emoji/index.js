import React from 'react';
import { StyledEmoji, StyledIcon } from './styles.js';

export default function Emoji({ gradient, emoji, size, ariaLabel }) {
  return (
    <StyledEmoji size={size}>
      <StyledIcon gradient aria-label={ariaLabel} className={`far fa-${emoji}`}></StyledIcon>
    </StyledEmoji>
  );
}
