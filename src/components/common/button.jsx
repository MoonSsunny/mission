import React from 'react';
import styled, { css } from 'styled-components';

const StyleButton = styled.button`
  border: none;
  border-radius: 4px;
  background: #000;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
      margin-top: 1rem;
    `}
`;

const Button = (props) => <StyleButton {...props} />;

export default Button;
