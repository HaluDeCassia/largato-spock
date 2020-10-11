import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';

import { Col, Name, Points, StyledScoreboard, Title } from './styles';

export default function Scoreboard({ points }) {
  return (
    <StyledScoreboard>
      <Title>Placar</Title>
      <Grid>
        <Col className="left-col"> 
          <Name><i className="fas fa-smile"></i></Name>
          <Points>{points.player}</Points>
        </Col>
        <Col>
          <Name><i className="fas fa-robot"></i></Name>
          <Points>{points.computer}</Points>
        </Col>
      </Grid>
    </StyledScoreboard>
  );
}

Scoreboard.propTypes = {
  points: PropTypes.object.isRequired
};