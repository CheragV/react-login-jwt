import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import SignIn from './modules/SignIn'
import Home from './modules/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(props) {

  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
  );
}


const mapStateToProps = (state) => {
  return {
      ...state.reducer.toJS()
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    // fetchDataLoading,
    // fetchDataSuccess,
    // addBill,
    // editBill,
    // deleteBill
  },
  dispatch
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
