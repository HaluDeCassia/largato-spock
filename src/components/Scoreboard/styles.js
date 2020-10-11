import styled from "styled-components";

export const Col = styled.div`
  min-width: 6rem;
  text-align: center;
  margin: 0 0.5rem 1rem;

  &.left-col {
    border-right: 1px solid #eee;
  }
`;

export const Name = styled.p`
  margin-bottom: 0.2rem;
`;

export const Points = styled.p`
  margin: 0;
  font-size: 1.6rem;
`;

export const Title = styled.h2`
  flex-direction: row;
`;
