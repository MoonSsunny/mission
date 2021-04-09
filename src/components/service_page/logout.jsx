import React from 'react';

const Logout = () => {
  if (sessionStorage) {
    sessionStorage.clear();
    window.location.href = '/';
  }
  return <div></div>;
};

export default Logout;
