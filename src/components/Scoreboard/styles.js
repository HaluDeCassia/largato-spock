import styled from "styled-components";

import { darkColor, lightColor } from "../../styles/colors";

export const StyledScoreboard = styled.div`
  margin: 1rem;
  padding: 0.2rem;
  text-align: center;
  color: ${lightColor};
  box-shadow: 0 0 4px ${darkColor};
  background-image: linear-gradient(to bottom right, #795757e8, ${darkColor});
`;

export const Col = styled.div`
  min-width: 8rem;
  margin-bottom: 1rem;

  &.left-col {
    border-right: 1px solid #7967678c;
  }
`;

export const Name = styled.p`
  font-size: 2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.8rem;
`;

export const Points = styled.p`
  margin: 0.5rem 0;
  font-size: 1.6rem;
`;

export const Title = styled.h2`
  flex-direction: row;
`;
