
import ApiInstance from './ApiInstance';

async function loginUser(userData) {
  try {
    let response = await ApiInstance.post('api/user/login', { ...userData });

    ApiInstance.defaults.headers.common['Authorization'] = response.data.token;
    return response.data.user;
  } catch (error) {
        console.error(error);
    }
}

async function createUser(userData) {
  try {
    let response = await ApiInstance.put('api/user/register', { ...userData })

    ApiInstance.defaults.headers.common['Authorization'] = response.data.token;
    return response.data.user;
  } catch (error) {
        console.error(error);
    }
}


export {
  loginUser,
  createUser
 }


