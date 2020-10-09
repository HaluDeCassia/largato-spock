import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid } from './styles'; 

export default function Buttons({ playGame }) {
  return (
    <Grid>
      <Button onClick={() => playGame('rock')}><span role="img" aria-label="pedra">✊</span></Button>
      <Button onClick={() => playGame('paper')}><span role="img" aria-label="papel">✋</span></Button>
      <Button onClick={() => playGame('scissors')}><span role="img" aria-label="tesoura">✌️</span></Button>
      <Button onClick={() => playGame('lizard')}><span role="img" aria-label="lagarto">🦎</span></Button>
      <Button onClick={() => playGame('spock')}><span role="img" aria-label="spock">🖖</span></Button>
    </Grid>
  );
}

Buttons.propTypes = {
  playGame: PropTypes.func.isRequired
};