import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

import Buttons from './components/Buttons';
import Emoji from './components/Emoji';
import Grid from './components/Grid';
// import Modal from './components/Modal';
import Result from './components/Result';
import Rules from './components/Rules';
import Scoreboard from './components/Scoreboard';

test('renders first page', () => {
  render(<App />);
});

test('renders Buttons component', () => {
  render(<Buttons playGame={() => true} />);
});

test('renders Emoji component', () => {
  render(<Emoji size={1} emoji="trash" ariaLabel="Lixo"/>);
});

test('renders Grid component', () => {
  render(<Grid>testing</Grid>);
});

// TODO: find a way to test Modal component. Render not working because this component is a reference
// test('renders Modal component', () => {
//   const div = document.createElement('div'); // create the div here
//   render(<Modal/>, div);
// });

test('renders Result component', () => {
  render(<Result playerChoice="spock" computerChoice="rock" result={{status: 'victory', message: 'victory'}} />);
});

test('renders Rules component', () => {
  render(<Rules />);
});

test('renders Scoreboard component', () => {
  render(<Scoreboard points={{player: 0, computer: 0}} />);
});
