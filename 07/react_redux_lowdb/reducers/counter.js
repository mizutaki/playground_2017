import low from 'lowdb'
const db = low('db2.json')

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
export default Reducer
