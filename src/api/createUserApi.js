import axios from 'axios';
// ********************************************
//   회원등록 api호출
// ********************************************

export const createUserApi = async (user) => {
  const response = await axios
    .post('http://106.10.53.116:8099/sign-up', {
      user,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
