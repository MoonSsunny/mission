import axios from 'axios';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/button';
import { userApi } from '../../api/loginApi';
import { createUserApi } from '../../api/createUserApi';

const FormBlock = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 1rem;
  }
  .userId {
    border-bottom: ${(props) =>
      props.checkId === false ? '1px solid red' : '1px solid  block'};
  }
  .errorCheck {
    color: red;
    font-size: 12px;
    margin: 5px 0;
    display: ${(props) => (props.checkId === false ? 'block' : 'none')};
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
  const [checkId, setCheckId] = useState(true);
  const [checkPassword, setCheckPassword] = useState('');
  const [userEmail, setUserEmail] = useState(false);
  const [userNumber, setUserNumber] = useState('');
  const userIdInputRef = useRef();
  const userPwInputRef = useRef();
  const formName = {
    login: '로그인',
    register: '회원가입',
  };
  const text = formName[type];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail === false) {
      alert('이메일 형식을 확인해 주세요');
      return userIdInputRef.current.focus();
    }
    if (userPassword !== checkPassword) {
      alert('비밀번호가 같지 않습니다');
      return userPwInputRef.current.focus();
    }
    if (userPassword.length < 8 || userPassword.length > 15) {
      alert('비밀번호는 8자리 이상 15 이하 입니다');
      return userPwInputRef.current.focus();
    }

    try {
      const response = await createUserApi({
        email: userId,
        password: userPassword,
        mobile: userNumber,
      });
      if (response) {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
        }
        alert('회원가입성공');
        window.location.href = '/';
        console.log(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !userPassword) {
      alert('빈칸을 채워주세요');
    }
    try {
      const response = await userApi({
        email: userId,
        password: userPassword,
      });
      if (response) {
        alert('로그인성공');
        console.log(response);
        window.location.href = '/';
      }
    } catch (err) {
      if (err.response.status === 401) {
        alert('비밀번호는 8글자 이상입니다');
      }
    }
  };

  //   이메일 정규식 검사를 통해 이메일의 유효성이 맞는지 확인한다

  const isEmail = (email) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(email);
  };
  //  true,false로 반환

  // focus blur 될때 event 발생 , setCheckId update => css 제어
  const handleBlur = () => {
    if (userEmail === true) {
      setCheckId(true);
    } else {
      setCheckId(false);
    }
  };

  return (
    <FormBlock checkId={checkId}>
      <h3>{text}</h3>
      <form onSubmit={type === 'register' ? handleSubmit : handleLoginSubmit}>
        {/* 회원가입일때 handleSubmit api호출 , 로그인일때 handleLoginSubmit api호출 */}
        <StyledInput
          name="username"
          className="userId"
          placeholder="아이디"
          value={userId}
          ref={userIdInputRef}
          onChange={(e) => {
            setUserId(e.target.value);
            setUserEmail(isEmail(e.target.value));
          }}
          onBlur={handleBlur}
        />
        <p className="errorCheck">이메일 형식을 확인해 주세요</p>
        <StyledInput
          name="password"
          type="password"
          placeholder="비밀번호"
          value={userPassword}
          ref={userPwInputRef}
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
// form 컴포넌트를 만들어서 회원가입, 로그인 폼을 재사용하도록 한다

export default Form;
