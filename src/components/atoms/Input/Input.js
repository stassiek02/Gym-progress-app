import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = styled.input`
  margin: 0;
  padding: 10px 0 10px 35px;
  border: 0;
  border-bottom: 3px solid green;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`;
const FieldSpan = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  transition: 0.2s transform;
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
