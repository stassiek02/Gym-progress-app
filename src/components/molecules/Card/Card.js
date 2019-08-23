import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { ExerciseBlock } from 'components/atoms/ExerciseBlock/ExerciseBlock';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import xMark from 'assets/icons/xmark.svg';

const StyledWrapper = styled.div`

  border-radius:3px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.primary};
  transition: 0.2s transform, box-shadow 0.2s;
  box-shadow:0 10px 15px -3px rgba(0,0,0,.4), 0 4px 6px -2px rgba(0,0,0,.4);
  overflow:hidden;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -3px rgba(0,0,0,.5), 0 4px 10px -2px rgba(0,0,0,.5);
  }

  @media (max-width: 860px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;
const ExerciseWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 50px 30px;
`;
const InnerWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  text-align: center;
  position: relative;
`;
const StyledButton = styled(Button)`
  position:absolute;
  top:0;
  right:0;
  padding:5px;
  width:30px;
  height:30px;
  font-size:${({ theme }) => theme.fontSize.xl}
  text-align:center;
  cursor:pointer;
  border-radius:2px;
  background-image:url(${xMark});
  background-position:50%;
  background-size:70%;
  background-repeat:no-repeat;
  

`;

const Card = ({removeItem,exercises,id,name }) => {
  
  return (
    <StyledWrapper>
      <InnerWrapper>
        <Heading as="h2" big>
          {name}
        </Heading>
        <StyledButton onClick={() => removeItem(id)}></StyledButton>
      </InnerWrapper>
      <ExerciseWrapper>
        {exercises.map((item,index) => (
          <ExerciseBlock parameters={item} key={item.name+index}/>
        ))}
      </ExerciseWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  // workout: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
  removeItem: PropTypes.func.isRequired,
};


export default Card;
