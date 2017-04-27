import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {Router,browserHistory} from 'react-router';
import routes from './route.js'

const middleware = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store  = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store ={store}>
  <Router routes ={routes} history={browserHistory}/>

  </Provider>,
  document.getElementById('root')
);
