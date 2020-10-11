import React from 'react';

import Buttons from './components/Buttons'; 
import Grid from './components/Grid'; 
import Modal from './components/Modal'; 

import { OPTIONS } from './constants';

import { StyledApp, Global } from './styles/global'; 

function getComputerChoice() {
  const computerChoices = ['rock','paper','scissors', 'lizard', 'spock'];
  return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

function getResult(playerChoice, computerChoice, setResult, setPoints) {
  if(OPTIONS[playerChoice] === undefined) {
    setResult('Escolha uma das opções acima');
  } else if(playerChoice === computerChoice) {
    setResult("Empate --'");
  } else {
    if(OPTIONS[playerChoice].wins.indexOf(computerChoice) > -1) {
      setResult("Você ganhou! \\o/");

      setPoints(previousPoints => ({...previousPoints,
        player: previousPoints.player + 1
      }));

    } else {
      setResult("Computador ganhou... :(")

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
  const [result, setResult] = React.useState('');
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

      { playerChoice && <p>Você: { OPTIONS[playerChoice].displayName }</p> }

      { computerChoice && <p>Computador: { OPTIONS[computerChoice].displayName }</p> }

      <p>{ result }</p>

      {modal && <Modal isOpen={modal} onClose={toggleModal} /> }

      <Grid>
        <p>
          {points.player}
        </p>
        <p>
          {points.computer}
        </p>
      </Grid>
      <button onClick={() => setPoints({player: 0, computer: 0})} aria-label="resetar pontos">Reiniciar</button>
    </StyledApp>
  );
}
