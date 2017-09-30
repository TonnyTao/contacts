import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Fetch from 'isomorphic-fetch';

import * as creators from '../actions/actionCreators';
import HomePage from '../components/HomePage';

class HomePageContainer extends React.Component {
  
  componentDidMount(){
    this.props.actions.showSpinner();

    setTimeout(() => {
      Fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.props.actions.hideSpinner();
        this.props.actions.updateList(json)
      });
    }, 1000); //delay loading only for test spinner
  }

  render(){
    return <HomePage {...this.props} />;
  }
}

//////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(creators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
