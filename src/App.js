import React from 'react';

import Buttons from './components/Buttons'; 
import Emoji from './components/Emoji'; 

import { StyledApp, Global } from './styles/global'; 

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
  if(OPTIONS[playerChoice] === undefined) {
    setResult('Escolha uma das opções acima');
  } else if(playerChoice === computerChoice) {
    setResult("Empate --'");
  } else {
    if(OPTIONS[playerChoice].wins.indexOf(computerChoice) > -1) {
      setResult("Você ganhou! \\o/");
    } else {
      setResult("Computador ganhou... :(")
    }
  }
}

export default function App() {
  const [modal, toggleModal] = React.useState(false);
  const [playerChoice, setPlayerChoice] = React.useState('');
  const [computerChoice, setComputerChoice] = React.useState('');
  const [result, setResult] = React.useState('');

  const playGame = (playerChoice) => {
    setPlayerChoice(playerChoice);
    setComputerChoice(getComputerChoice());
    getResult(playerChoice, computerChoice, setResult);
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
      
      <p>{ result }</p>
    </StyledApp>
  );
}
