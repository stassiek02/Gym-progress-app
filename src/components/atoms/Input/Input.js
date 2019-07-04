import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = styled.input`
  margin: 0;
  padding: 15px;
  border: 1px solid green;
  border-bottom: 3px solid green;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  border-radius: 3px;
  background-color: #777;
  color: white;
  font-weight: 300;
`;
const FieldSpan = styled.span`
  font-weight: 300;
  position: absolute;
  top: 10px;
  left: 10px;
  transition: 0.2s transform;
  color: white;
  pointer-events: none;
  ${InputField}:focus ~ &,
  ${InputField}:not(:focus):valid ~ & {
    transform: translate(-10px, -10px) scale(0.7);
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  margin: 10px;
`;
export const Input = ({ placeholder, name, value, type, ...props }) => (
  <StyledWrapper>
    <InputField type={type} name={name} value={value} required {...props} />
    <FieldSpan>{placeholder}</FieldSpan>
  </StyledWrapper>
);
Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};
