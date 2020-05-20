const axios = require('axios');


const instance = axios.create({
  baseURL: 'https://login-server-app.herokuapp.com/',
  timeout: 3000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8'
  }
});

instance.interceptors.response.use(function (response) {
  return response;
}, (error) => {
    if (error.response.data.message) { 
      alert(error.response.data.message)
    }
  return Promise.reject(error);
});


async function loginUser(userData) {

  try {
    let response = await instance.post('api/user/login', { ...userData })
    instance.defaults.headers.common['Authorization'] = response.data.token;
    return response.data.user
  } catch (error) {
        console.error(error);
    }
}

async function createUser(userData) {
  try {
    let response = await instance.put('api/user/register', { ...userData })
    instance.defaults.headers.common['Authorization'] = response.data.token;
    return response.data.user
  } catch (error) {
        console.error(error);
    }
}


export {
  loginUser,
  createUser
 }


