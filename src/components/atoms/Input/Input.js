import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = styled.input`
  margin: 0;
  padding: 15px;
  padding-bottom: 5px;
  border: 0px;
  border-bottom: 3px solid #505158;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: transparent;
  color: white;
  font-weight: 300;
`;
const FieldSpan = styled.span`
  font-weight: 300;
  position: absolute;
  top: 15px;
  left: 10px;
  transition: 0.2s transform;
  color: white;
  pointer-events: none;
  ${InputField}:focus ~ &,
  ${InputField}:not(:focus):valid ~ & {
    transform: translate(-10px, -15px) scale(0.7);
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
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  type: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  placeholder: '',
  value: '',
  type: 'text',
};
