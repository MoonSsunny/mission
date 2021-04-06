import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/button';

const FormBlock = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  background: transparent;
  margin: 20px 0;
`;

const formName = {
  login: '로그인',
  register: '회원가입',
};

const Form = ({ type }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userNumber, setUserNumber] = useState('');

  const text = formName[type];

  const createUserApi = (user) => {
    return fetch('/sign-up', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserApi({
        email: userId,
        password: userPassword,
        mobile: userNumber,
      });

      console.log(response.result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormBlock>
      <h3>{text}</h3>
      <form onSubmit={type === 'register' ? handleSubmit : null}>
        <StyledInput
          name="username"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <StyledInput
          name="password"
          type="password"
          placeholder="비밀번호"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        {type === 'register' && (
          <>
            <StyledInput
              name="password"
              type="password"
              placeholder="비밀번호 확인"
            />
            <StyledInput
              name="number"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
              placeholder="연락처"
            />
          </>
        )}
        <Button fullWidth>{text}</Button>
      </form>
    </FormBlock>
  );
};

export default Form;
