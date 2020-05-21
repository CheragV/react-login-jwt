import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './resources/styles/App.scss';
import SignIn from './modules/SignIn'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import {fetchData} from './Store/Actions';


function App(props) {
  console.log('Props', props)
  return (
    <Router>
        <Switch>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
  );
}


const mapStateToProps = (state) => {
  return {
      rootData: state.reducer.toJS(),
      userData: state.userReducer.toJS()
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
