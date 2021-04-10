import React from 'react';
import Form from '../layout/form';
import Template from '../layout/template';
import Layout from '../layout/layout';

const LoginPage = () => {
  return (
    <>
      <Layout>
        <Template>
          <Form type="login" />
        </Template>
      </Layout>
    </>
  );
};

export default LoginPage;
