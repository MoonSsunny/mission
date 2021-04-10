import axios from 'axios';
// ****************************************
//로그인 api호출
// ****************************************

export const userApi = async (user) => {
  const response = await axios
    .post('http://106.10.53.116:8099/login', {
      user,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.token) {
        sessionStorage.setItem('token', response.token);
      }
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
