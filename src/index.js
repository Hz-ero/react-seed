import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import appReducer from './reducers'
import AppRouter from './router'


const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

render(
  <Provider store={store}>
    {AppRouter}
  </Provider>,
  document.getElementById('root')
)