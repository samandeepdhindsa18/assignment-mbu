import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') },
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
