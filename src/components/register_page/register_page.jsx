import React from 'react';
import Form from '../layout/form';
import Template from '../layout/template';
import Layout from '../layout/layout';

const RegisterPage = () => {
  return (
    <>
      <Layout>
        <Template>
          <Form type="register" />
        </Template>
      </Layout>
    </>
  );
};

export default RegisterPage;
