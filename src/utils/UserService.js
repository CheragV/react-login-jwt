
import ApiInstance from './ApiInstance';

async function loginUser(userData) {
  try {
    let response = await ApiInstance.post('api/auth/login', { ...userData });
    sessionStorage.setItem("auth-token", response.data.token);
    return response.data.user;
  } catch (error) {
        console.error(error);
    }
}

async function createUser(userData) {
  try {
    let response = await ApiInstance.put('api/auth/register', { ...userData })
    return response.data.user;
  } catch (error) {
        console.error(error);
    }
}

async function getUserData() {
  try {
    ApiInstance.defaults.headers.common['auth-token'] = sessionStorage.getItem("auth-token");
    let response = await ApiInstance.get('api/user/current');
    return response.data;
  } catch (error) {
        console.error(error);
    }
}


export {
  loginUser,
  createUser,
  getUserData
 }


