import styled from "styled-components";

export const StyledResult = styled.div`
  margin: 1rem;
  min-height: 8rem;
  text-align: center;
`;

export const Name = styled.p`
  margin-bottom: 0.2rem;
`;

export const Points = styled.p`
  margin: 0;
  font-size: 1.6rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  font-weight: bold;

  &.defeat {
    color: red;
  }

  &.victory {
    color: green;
  }

  &.waiting {
    font-size: 1rem;
  }
`;
