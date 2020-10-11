import React from 'react';
import Emoji from './components/Emoji'; 

export const OPTIONS = {
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