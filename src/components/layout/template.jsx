import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  height: 500px;
  margin: 100px;
`;

const MainBox = styled.div`
  .logo {
    display: block;
    padding-bottom: 2rem;
    width: 100px;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    letter-space: 2px;
    font-size: 2rem;
  }
  margin: auto;
  background: #dee2e6;
  width: 500px;
  padding: 2rem;
  border-radius: 9px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Template = ({ children }) => {
  return (
    <TemplateBlock>
      <MainBox>
        <img src="/img/logo.png" alt="" className="logo" />
        {children}
      </MainBox>
    </TemplateBlock>
  );
};

export default Template;
