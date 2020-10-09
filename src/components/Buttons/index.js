import React from 'react';
import { Button, Grid } from './styles'; 

export default function Buttons({ setOption }) {
  return (
    <Grid>
      <Button onClick={() => setOption('rock')}><span role="img" aria-label="pedra">✊</span></Button>
      <Button onClick={() => setOption('paper')}><span role="img" aria-label="papel">✋</span></Button>
      <Button onClick={() => setOption('scissors')}><span role="img" aria-label="tesoura">✌️</span></Button>
      <Button onClick={() => setOption('lizard')}><span role="img" aria-label="lagarto">🦎</span></Button>
      <Button onClick={() => setOption('spock')}><span role="img" aria-label="spock">🖖</span></Button>
    </Grid>
  );
}
