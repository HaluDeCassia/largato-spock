import React from 'react';

import Buttons from './components/Buttons';
import Emoji from './components/Emoji';
import Scoreboard from './components/Scoreboard'; 
import Result from './components/Result'; 
import Rules from './components/Rules';

import { OPTIONS } from './constants';

import { dangerColor } from "./styles/colors";

import { Global, IconButton, StyledApp, StyledButton  } from './styles/global'; 

function getComputerChoice() { // returns one of choices randomly
  const computerChoices = ['rock','paper','scissors', 'lizard', 'spock'];
  return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

function getResult(playerChoice, computerChoice, setResult, setPoints) {
  if(OPTIONS[playerChoice] === undefined) {
    setResult({
      message: "Escolha uma das opções acima",
      status: 'waiting'
    });
  } else if(playerChoice === computerChoice) {
    setResult({
      message: "Empate --'",
      status: ''
    });
  } else {
    // if you find the bot option within the winning options of the player’s choice, it means that the player won
    
    if(OPTIONS[playerChoice].wins.indexOf(computerChoice) > -1) {
      setResult({
        message: "Você ganhou! \\o/",
        status: "victory"
      });

      setPoints(previousPoints => ({...previousPoints,
        player: previousPoints.player + 1 // counts player score
      }));

    } else {
      setResult({
        message: "Computador ganhou... :(",
        status: "defeat"
      });

      setPoints(previousPoints => ({...previousPoints,
        computer: previousPoints.computer + 1 // counts bot score
      }));
    }
  }
}

export default function App() {
  const [playerChoice, setPlayerChoice] = React.useState('');
  const [computerChoice, setComputerChoice] = React.useState('');
  const [result, setResult] = React.useState({ message: '', status: '' });
  const [points, setPoints] = React.useState({ player: 0, computer: 0});

  const playGame = (playerChoice) => {
    setPlayerChoice(playerChoice);
    setComputerChoice(getComputerChoice());
  }

  React.useEffect(() => getResult(playerChoice, computerChoice, setResult, setPoints), [playerChoice, computerChoice])

  return (
    <StyledApp>
      <Global />
      <Rules />
      <Buttons playGame={ playGame } />
      <Result
        result={ result }
        playerChoice={ playerChoice } 
        computerChoice={ computerChoice } 
      />
      <Scoreboard points={points} />
      
      <StyledButton onClick={() => setPoints({player: 0, computer: 0})} aria-label="resetar pontos">
        <IconButton>
          <Emoji solid gradient size={1} color={dangerColor} ariaLabel="ícone de lixeira" emoji="trash"/>
        </IconButton>
        Limpar placar
      </StyledButton>
    </StyledApp>
  );
}
