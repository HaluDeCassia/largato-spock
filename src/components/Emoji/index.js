import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './styles.js';

export default function Emoji({ solid, gradient, color, emoji, size, ariaLabel }) {
  return (
    <StyledIcon gradient={gradient} size={size} color={color} aria-label={ariaLabel} className={`fa${solid ?'s' : 'r'} fa-${emoji}`}></StyledIcon>
  );
}

Emoji.defaultProps = {
  solid: false,
  gradient: false,
  color: ''
};

Emoji.propTypes = {
  size: PropTypes.number.isRequired,
  emoji: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  solid: PropTypes.bool,
  gradient: PropTypes.bool,
  color: PropTypes.string
};

