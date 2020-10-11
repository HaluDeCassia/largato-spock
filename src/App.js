import React from 'react';

import Buttons from './components/Buttons'; 
import Modal from './components/Modal'; 
import Scoreboard from './components/Scoreboard'; 
import Result from './components/Result'; 

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
  const [modal, toggleModal] = React.useState(false);
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
      <p>
        Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura. O jogo foi inventado por Sam Kass e Karen Bryla, como "Rock Paper Scissors Lizard Spock". Para entender as regras, 
        <button onClick={() => toggleModal(!modal)} aria-label="ver regras">clique aqui</button>
      </p>

      <Buttons playGame={ playGame } />

      <Result 
        result={ result }
        playerChoice={ playerChoice } 
        computerChoice={ computerChoice } 
      />

      {modal && <Modal isOpen={modal} onClose={toggleModal} /> }

      <Scoreboard points={points} />
      
      <button onClick={() => setPoints({player: 0, computer: 0})} aria-label="resetar pontos">Reiniciar</button>
    </StyledApp>
  );
}
