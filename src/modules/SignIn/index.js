import React, { useState } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";

import { Create, Login } from '../../components';
import { validations } from 'utils';
import { loginUser, createUser } from '../../utils/UserService';
import { setUser } from './actions'

import '../../resources/styles/SignIn/App.scss';
import '../../resources/styles/SignIn/input.scss';


async function onClickHandler(e, setUser, history) { 
  e.preventDefault();
  
  let form = e.target.form;
  if (validations.fromValidation(form)) {
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
          history.push('/home')
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
          history.push('/home')
        }
      }
        break;
    
      default:
        console.log('None')
    }
  }
}


function SignIn(props) {
  const [tab, setTab] = useState('login');
  const history = useHistory();
  const { setUser } = props;

  return (
    <div>

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
        
        <button type="submit" form={tab} value="Submit" onClick={(e) => onClickHandler(e, setUser, history)}>
          Submit
        </button>
        
      </div>

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
      ...state.userReducer.toJS()
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setUser
  },
  dispatch
)

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
