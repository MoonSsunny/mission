import React from 'react';
import Button from '../common/button';
import styled from 'styled-components';
import Layout from '../layout/layout';

const StyledImage = styled.div`
  text-align: center;

  img {
    width: 50%;
    margin-top: 30px;
  }
`;

const ServicePage = () => {
  const onClick = () => {
    if (sessionStorage.getItem('token')) {
      alert('주문성공');
    } else {
      alert('로그인이 필요합니다');
      window.location.href = '/login';
    }
  };
  return (
    <Layout>
      <div>
        {/* NODE_PATH=public을 이용하여 절대경로로 사용 */}
        <StyledImage>
          <img src="/img/example.jpg" alt="service img" />
          <Button type="button" onClick={onClick}>
            주문하기
          </Button>
        </StyledImage>
      </div>
    </Layout>
  );
};

export default ServicePage;
