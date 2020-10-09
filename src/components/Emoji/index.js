import React from 'react';
import styled from "styled-components";

export const StyledEmoji = styled.span`
  border: none;
  font-size: 4rem;
  background: none;
`;

export default function Emoji({ emoji, ariaLabel }) {
  return (
    <StyledEmoji>
      <span role="img" aria-label={ariaLabel}>{ emoji }</span>
    </StyledEmoji>
  );
}
