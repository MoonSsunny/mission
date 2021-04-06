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

const Form = ({ type }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [userEmail, setUserEmail] = useState(false);
  const [userNumber, setUserNumber] = useState('');

  const formName = {
    login: '로그인',
    register: '회원가입',
  };
  const text = formName[type];

  //   회원등록 api호출
  const createUserApi = async (user) => {
    const response = await fetch('http://106.10.53.116:8099/sign-up', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail === false) {
      alert('이메일 형식을 확인해 주세요');
      return;
    }
    if (userPassword !== checkPassword) {
      alert('비밀번호가 같지 않습니다');
      return;
    }
    if (userPassword.length < 8) {
      alert('비밀번호는 8자리 이상입니다');
      return;
    }

    try {
      const response = await createUserApi({
        email: userId,
        password: userPassword,
        mobile: userNumber,
      });
      if (response) {
        alert('회원가입성공');
        window.location.href = '/';
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  //로그인 api호출
  const UserApi = async (user) => {
    const response = await fetch('http://106.10.53.116:8099/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !userPassword) {
      alert('빈칸을 채워주세요');
    }
    try {
      const response = await UserApi({
        email: userId,
        password: userPassword,
      });
      if (response) {
        alert('로그인성공');
        window.location.href = '/';
      }
    } catch (err) {
      console.error(err.response);
    }
  };

  //   이메일 정규식 검사
  const isEmail = (email) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(email);
  };

  return (
    <FormBlock>
      <h3>{text}</h3>
      <form onSubmit={type === 'register' ? handleSubmit : handleLoginSubmit}>
        <StyledInput
          name="username"
          placeholder="아이디"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
            setUserEmail(isEmail(e.target.value));
          }}
        />
        <StyledInput
          name="password"
          type="password"
          placeholder="비밀번호"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />

        {/* 회원가입의 경우 styledInput 추가 적용 */}

        {type === 'register' && (
          <>
            <StyledInput
              name="checkPassword"
              type="password"
              value={checkPassword}
              placeholder="비밀번호 확인"
              onChange={(e) => setCheckPassword(e.target.value)}
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
