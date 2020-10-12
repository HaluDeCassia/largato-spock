import React from 'react';
import PropTypes from 'prop-types';

import { OPTIONS } from '../../constants';

import { Choice, StyledResult, Message } from './styles.js';

export default function Result({ playerChoice, computerChoice, result}) {
  return (
    <StyledResult>
      { playerChoice && <Choice isPlayer>Você: { OPTIONS[playerChoice].displayName }</Choice> }
      { computerChoice && <Choice>Computador: { OPTIONS[computerChoice].displayName }</Choice> }
      <Message status={ result.status }>{ result.message }</Message>
    </StyledResult>
  );
}

const options = ['rock', 'paper', 'scissors', 'lizard', 'spock', ''];

Result.propTypes = {
  playerChoice: PropTypes.oneOf(options).isRequired,
  computerChoice: PropTypes.oneOf(options).isRequired,
  result: PropTypes.exact({
    status: PropTypes.oneOf(['victory', 'defeat', 'waiting', '']),
    message: PropTypes.string
  }).isRequired
};