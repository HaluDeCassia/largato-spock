import React from 'react';

import Buttons from './components/Buttons';
import Scoreboard from './components/Scoreboard'; 
import Result from './components/Result'; 
import Rules from './components/Rules'; 

import { OPTIONS } from './constants';

import { StyledApp, Global } from './styles/global'; 

function getComputerChoice() {
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
    if(OPTIONS[playerChoice].wins.indexOf(computerChoice) > -1) {
      setResult({
        message: "Você ganhou! \\o/",
        status: "victory"
      });

      setPoints(previousPoints => ({...previousPoints,
        player: previousPoints.player + 1
      }));

    } else {
      setResult({
        message: "Computador ganhou... :(",
        status: "defeat"
      });

      setPoints(previousPoints => ({...previousPoints,
        computer: previousPoints.computer + 1
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
      
      <button onClick={() => setPoints({player: 0, computer: 0})} aria-label="resetar pontos">Reiniciar</button>
    </StyledApp>
  );
}
