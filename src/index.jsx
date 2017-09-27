import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import initialState from './reducers/initialState'
import rootReducer from './reducers';
import HomePageContainer from './containers/HomePageContainer';

import './styles/styles.scss';

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <HomePageContainer />
  </Provider>,
  document.getElementById('app')
);