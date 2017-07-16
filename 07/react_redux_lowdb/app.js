import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import low from 'lowdb'
const db = low('db2.json')
db.defaults({ counter: 0 }).write()

const ActionCreator = (num = 1) => {
  return {
    type: "INC_COUNTER",
    num
  };
};

const Reducer = (state={counter:0}, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      db.set('counter', state.counter  + action.num).write()
      return Object.assign({}, state, {
        counter: state.counter  + action.num
      });
    default:
      return state
  };
};

const Store = createStore(Reducer);

Store.dispatch(ActionCreator(db.get('counter').value()));

class App extends React.Component {
  render() {
    return (
      <div>
        <p>現在の数値:{this.props.counter}</p>
        <button onClick={ () => {this.props.incCounter(1) } }>加算</button>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { counter: state.counter }
}
const mapDispatchToProps = dispatch => {
  return {
    incCounter(value) {
      dispatch(ActionCreator(value))
    }
  }
}
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

ReactDOM.render(<Provider store={Store}><ConnectedApp /></Provider>,
document.querySelector('#app'))
