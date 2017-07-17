import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo } from './actions'
import App from './components/App'

let store = createStore(todoApp)
store.dispatch(addTodo('Hello, World!'))
store.dispatch(addTodo('Hello, redux!'))
console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
