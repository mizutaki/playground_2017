import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import todoApp from './reducers'
import { addTodo } from './actions'
import App from './components/App'

const store = compose(autoRehydrate())(createStore)(todoApp)
persistStore(store)
console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
