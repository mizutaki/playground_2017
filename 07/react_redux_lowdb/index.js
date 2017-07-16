import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import Reducer from './reducers/counter'
import ActionCreator from './actions/index'
import ConnectedApp from './containers/container'
import low from 'lowdb'
const db = low('db2.json')
db.defaults({ counter: 0 }).write()

const Store = createStore(Reducer);
var val = db.get('counter').value()
Store.dispatch(ActionCreator(val))

ReactDOM.render(<Provider store={Store}><ConnectedApp /></Provider>,
document.querySelector('#app'))
