import React from 'react';

import { OPTIONS } from '../../constants';

import { StyledResult, Result } from './styles.js';

export default function App({ playerChoice, computerChoice, result}) {
  return (
    <StyledResult>
      { playerChoice && <p>Você: { OPTIONS[playerChoice].displayName }</p> }
      { computerChoice && <p>Computador: { OPTIONS[computerChoice].displayName }</p> }
      <Result className={ result.status }>{ result.message }</Result>
    </StyledResult>
  );
}
