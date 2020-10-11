import React from 'react';

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
