import React from 'react';
import styled, { css } from 'styled-components';

const StyleButton = styled.button`
  display: block;
  margin: 0 auto;
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
// 버튼 컴포넌트를 이용해서 다양한 곳에서 버튼 재사용하도록 한다
// props를 통해서 스타일을 제어한다
export default Button;
