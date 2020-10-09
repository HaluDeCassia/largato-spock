import React from 'react';

import { StyledApp, Global } from './styles/global'; 
import Buttons from './components/Buttons'; 

const TYPE_OPTIONS = {
  rock: 'Pedra',
  paper: 'Papel',
  scissors: 'Tesoura',
  lizard: 'Lagarto',
  spock: 'Spock'
}

function getComputerChoice() {
  const computerChoice = ['rock','paper','scissors', 'lizard', 'spock'];
  return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

function App() {
  const [playerChoice, setPlayerChoice] = React.useState('');

  const playGame = (playerChoice) => {
    setPlayerChoice(playerChoice);
    alert(TYPE_OPTIONS[getComputerChoice()]);
  }

  return (
    <StyledApp>
      <Global />
      <Buttons setOption={ playGame } />
      {TYPE_OPTIONS[playerChoice]}
    </StyledApp>
  );
}

export default App;
