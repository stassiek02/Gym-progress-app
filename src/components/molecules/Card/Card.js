import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-height: 300px;
  width: 400px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  transition: 0.2s transform ease-in-out, box-shadow 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);
  }
`;
const StyledInnerWrapper = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.secondary};
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 20px 20px 0px 0;
  overflow: hidden;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center stretch;
`;
const Col = styled.div`
  text-align: center;
  border-bottom: 1px solid #777;
  padding: 15px;
  margin: 0;

  &:last-child {
    border-bottom: none;
  }
`;
const StyledSpan = styled.span``;

const Card = ({ workout, title }) => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <h2>Day {title}</h2>
    </StyledInnerWrapper>

    <Row>
      {workout.map(({ name, sets, reps }) => (
        <Col>
          <StyledSpan>{name} </StyledSpan>
          <StyledSpan>{sets}</StyledSpan>x<StyledSpan>{reps}</StyledSpan>
        </Col>
      ))}
    </Row>
  </StyledWrapper>
);

export default Card;
