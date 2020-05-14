import React, { useState } from 'react';
import { Create, Login} from './components';
import './resources/styles/App.scss';
import { findAllInRenderedTree } from 'react-dom/test-utils';

function App() {

  const [tab, setTab] = useState('create');

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
        
        <button type="submit" form={tab} value="Submit">
          Submit
        </button>
        
      </div>

    </div>
  );
}

export default App;
