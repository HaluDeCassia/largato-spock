import React from 'react';
import PropTypes from 'prop-types';

import { StyledGrid } from './styles'; 

export default function Grid({ children }) {
  return (
    <StyledGrid>
      { children }
    </StyledGrid>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired
};
