import React from 'react';

import { OPTIONS } from '../../constants';

import { StyledResult, Message } from './styles.js';

export default function Result({ playerChoice, computerChoice, result}) {
  return (
    <StyledResult>
      { playerChoice && <p>Você: { OPTIONS[playerChoice].displayName }</p> }
      { computerChoice && <p>Computador: { OPTIONS[computerChoice].displayName }</p> }
      <Message className={ result.status }>{ result.message }</Message>
    </StyledResult>
  );
}
