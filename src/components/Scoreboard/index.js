import React from 'react';
import PropTypes from 'prop-types';

import { lightColor } from "../../styles/colors";

import Emoji from '../Emoji';
import Grid from '../Grid';

import { Col, Name, Points, StyledScoreboard, Title } from './styles';

export default function Scoreboard({ points }) {
  return (
    <StyledScoreboard>
      <Title>Placar</Title>
      <Grid>
        <Col className="left-col"> 
          <Name><Emoji solid size={2} color={lightColor} ariaLabel="emoji de sorriso" emoji="smile"/></Name>
          <Points>{points.player}</Points>
        </Col>
        <Col>
          <Name><Emoji solid size={2} color={lightColor} ariaLabel="emoji de robô" emoji="robot"/></Name>
          <Points>{points.computer}</Points>
        </Col>
      </Grid>
    </StyledScoreboard>
  );
}

Scoreboard.propTypes = {
  points: PropTypes.objectOf(PropTypes.number).isRequired
};