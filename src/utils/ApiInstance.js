const axios = require('axios');


const instance = axios.create({
  baseURL: 'http://localhost:5000/', //'https://login-server-app.herokuapp.com/',
  timeout: 3000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8'
  }
});
console.log('Setting instance')
instance.interceptors.response.use(function (response) {
    return response;
  }, (error) => {
      if (error.response && error.response.data.message) { 
        alert(error.response.data.message)
      }
    return Promise.reject(error);
  });
  
export default instance;  