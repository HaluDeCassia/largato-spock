import styled, { css } from "styled-components";

import { dangerColor, successColor } from "../../styles/colors";

const FailureMessage = css`
  color: ${dangerColor};
`;

const SuccessMessage = css`
  color: ${successColor};
`;

const WaitingMessage = css`
  font-size: 1rem;
`;

export const StyledResult = styled.div`
  display: flex;
  margin-top: 1rem;
  min-height: 8rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Choice = styled.p`
  font-size: 0.85rem;
  margin: 0;

  ${props => (props.isPlayer ? 'font-size: 0.75rem;' : '')}
`;

export const Message = styled.p`
  margin-bottom: 0;
  font-size: 1.2rem;
  font-weight: bold;

  ${props => (props.status === 'victory' ? SuccessMessage : props.status === 'defeat' ? FailureMessage : props.status === 'waiting' ? WaitingMessage : '')}
`;
