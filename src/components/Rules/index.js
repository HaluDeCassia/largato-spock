import React from 'react';

import Modal from '../Modal'; 

import { Button, StyledRules } from './styles.js';

export default function Rules({ playerChoice, computerChoice, result}) {
  const [modal, toggleModal] = React.useState(false);

  return (
    <StyledRules>
      <p>
        Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura. O jogo foi inventado por Sam Kass e Karen Bryla, como "Rock Paper Scissors Lizard Spock". Para entender as regras, 
        <Button onClick={() => toggleModal(!modal)} aria-label="ver regras">clique aqui</Button>
      </p>

      {modal && <Modal isOpen={modal} onClose={toggleModal} /> }
    </StyledRules>
  );
}
