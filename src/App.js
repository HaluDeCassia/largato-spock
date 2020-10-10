import React from 'react';

import { StyledApp, Global } from './styles/global'; 
import Buttons from './components/Buttons'; 
import Emoji from './components/Emoji'; 

const OPTIONS = {
  rock: {
    displayName: 'Pedra', 
    emoji: (<Emoji ariaLabel="pedra" emoji="✊"/>),
    wins: ['lizard', 'scissors']
  },
  paper: {
    displayName: 'Papel', 
    emoji: (<Emoji ariaLabel="papel" emoji="✋"/>),
    wins: ['rock', 'spock']
  },
  scissors:{
    displayName: 'Tesoura', 
    emoji: (<Emoji ariaLabel="tesoura" emoji="✌️"/>),
    wins: ['paper', 'lizard']
  },
  lizard: {
    displayName: 'Lagarto', 
    emoji: (<Emoji ariaLabel="lagarto" emoji="🦎"/>),
    wins: ['spock', 'paper']
  },
  spock: {
    displayName: 'Spock', 
    emoji: (<Emoji ariaLabel="spock" emoji="🖖"/>),
    wins: ['scissors', 'rock']
  }
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
      {playerChoice && (
        <React.Fragment>
          {OPTIONS[playerChoice].emoji}
          {OPTIONS[playerChoice].displayName }
        </React.Fragment>
      )}
      {computerChoice && (
        <React.Fragment>
          {OPTIONS[computerChoice].emoji}
          {OPTIONS[computerChoice].displayName }
        </React.Fragment>
      )}
    </StyledApp>
  );
}

export default App;
