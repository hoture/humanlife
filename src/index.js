import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import rootReducer from './reducers'

const middlewares = [ thunkMiddleware ]
let store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

