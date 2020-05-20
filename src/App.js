import React, { useState } from 'react';
import { Create, Login} from './components';
import './resources/styles/App.scss';
import { fromValidation } from './utils/validations';
import { loginUser, createUser } from './utils/ApiService';


async function onClickHandler(e, setUser) { 
  e.preventDefault();
  let form = e.target.form;
  if (fromValidation(form)) {
    switch (e.target.form.id) {
      case 'create':
        let userData = {
          name: form.querySelector('#username').value,
          email: form.querySelector('#email').value,
          password: form.querySelector('#password').value
        }
        let User = await createUser(userData);
        if (User && User._id) {
          setUser(User);
        }
        break;
      
      case 'login': {
        let userData = {
          email: form.querySelector('#email').value,
          password: form.querySelector('#password').value
        }
        let User = await loginUser(userData);
        if (User && User._id) {
          setUser(User);
        }
      }
        break;
    
      default:
        console.log('None')
    }
  }
}


function App() {
  const [tab, setTab] = useState('create');
  const [user, setUser] = useState({});


  return (
    <div className="app">

      <div className="login-container">

        <div className="login-options">
          <div onClick={() => setTab('create')} className={`tab ${tab === 'create' ? 'set-background-primary' : ''}`}>
            <h4>
              Create Account
            </h4>
          </div>

          <div onClick={() => setTab('login')} className={`tab ${tab === 'login' ? 'set-background-primary' : ''}`}>
            <h4>
              Login
            </h4>
          </div>
        </div>
          
        {tab === 'create' ? <Create /> : <Login />}
        
        <button type="submit" form={tab} value="Submit" onClick={(e) => onClickHandler(e, setUser)}>
          Submit
        </button>
        
      </div>

      {
        user._id ? (
          <div>
            {
              Object.keys(user).map(item => (
                <p>{`${item}: \t ${user[item]}`}</p>
              ))
            }
          </div>
        ) : null
      }

    </div>
  );
}

export default App;
