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
  
export default instance;  