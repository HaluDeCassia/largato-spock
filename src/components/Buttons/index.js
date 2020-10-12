import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';
import Emoji from '../Emoji';

import { Button } from './styles'; 

const options = [
  {
    name: 'rock',
    label: 'pedra',
    emoji: 'hand-rock',
    color: '#afc8d3'
  }, {
    name: 'paper',
    label: 'papel',
    emoji: 'hand-paper',
    color: '#CE5788'
  }, {
    name: 'scissors',
    label: 'tesoura',
    emoji: 'hand-scissors',
    color: '#8982ec'
  }, {
    name: 'lizard',
    label: 'lagarto',
    emoji: 'hand-lizard',
    color: '#1de464'
  }, {
    name: 'spock',
    label: 'spock',
    emoji: 'hand-spock',
    color: '#d487a7'
  }
];

export default function Buttons({ playGame }) {
  return (
    <Grid>
      {options.map((option, index) => (
        <Button key={`button_${index}`} onClick={() => playGame(option.name)}>
          <Emoji gradient size={4} color={option.color} ariaLabel={option.label} emoji={option.emoji}/>
        </Button>
      ))}
    </Grid>
  );
}

Buttons.propTypes = {
  playGame: PropTypes.func.isRequired
};