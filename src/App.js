import React from 'react';

import { StyledApp, Global } from './styles/global'; 
import Buttons from './components/Buttons'; 
import Emoji from './components/Emoji'; 

const TYPE_OPTIONS = {
  rock: ['Pedra', (<Emoji ariaLabel="pedra" emoji="✊"/>)],
  paper: ['Papel', (<Emoji ariaLabel="papel" emoji="✋"/>)],
  scissors: ['Tesoura', (<Emoji ariaLabel="tesoura" emoji="✌️"/>)],
  lizard: ['Lagarto', (<Emoji ariaLabel="lagarto" emoji="🦎"/>)],
  spock: ['Spock', (<Emoji ariaLabel="spock" emoji="🖖"/>)],
  default: ['Escolha uma opção para começar', '']
}

function getComputerChoice() {
  const computerChoice = ['rock','paper','scissors', 'lizard', 'spock'];
  return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

function getResult(playerChoice, computerChoice, setResult) {
  const rock_wins = ['lizard', 'scissors'];
  const papers_wins = ['rock', 'spock'];
  const scissors_wins = ['paper', 'lizard'];
  const lizard_wins = ['spock', 'paper'];
  const spock_wins = ['tesoura', 'pedra'];

  if(playerChoice === computerChoice) {

  }
}

function App() {
  const [playerChoice, setPlayerChoice] = React.useState(null);
  const [computerChoice, setComputerChoice] = React.useState('');
  const [result, setResult] = React.useState('');

  const playGame = (playerChoice) => {
    setPlayerChoice(playerChoice);
    setComputerChoice(getComputerChoice());
  }

  return (
    <StyledApp>
      <Global />
      <Buttons playGame={ playGame } />
      {TYPE_OPTIONS[playerChoice || 'default'][1]}
      {TYPE_OPTIONS[playerChoice || 'default'][0]}
      {computerChoice && (
        <React.Fragment>
          {TYPE_OPTIONS[computerChoice][1]}
          {TYPE_OPTIONS[computerChoice][0]}
        </React.Fragment>
      )}
    </StyledApp>
  );
}

export default App;
