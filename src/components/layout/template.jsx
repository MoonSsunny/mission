import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 100%;
  height: 500px;
  margin: 100px 0;
`;

const MainBox = styled.div`
  .logo {
    display: block;
    padding-bottom: 2rem;
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
`;

const Template = ({ children }) => {
  return (
    <TemplateBlock>
      <MainBox>
        <div className="logo">LOGO</div>
        {children}
      </MainBox>
    </TemplateBlock>
  );
};

export default Template;
