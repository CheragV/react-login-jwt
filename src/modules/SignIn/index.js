import React, { useState } from 'react';
import { Create, Login } from '../../components';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fromValidation } from '../../utils/validations';
import { loginUser, createUser } from '../../utils/UserService';

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


function SignIn(props) {
  const [tab, setTab] = useState('login');
  const [user, setUser] = useState({});
  console.log('Props',props);

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


const mapStateToProps = (state) => {
  return {
      bills: state.reducer.get('bills').toJS(),
      loading: state.reducer.get('loading')
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    // fetchData
    // fetchDataLoading,
    // fetchDataSuccess,
    // addBill,
    // editBill,
    // deleteBill
  },
  dispatch
)

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
