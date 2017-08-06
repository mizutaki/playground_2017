import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router,
         Route,
         Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import todoApp from './reducers'
import { addTodo } from './actions'
import Home from './components/Home'
import Archive from './components/Archive'


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/archive">Archive</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/archive" component={Archive}/>
      <Route path="/topics" component={Topics}/>
    </div>
 </Router>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
        Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
        Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
        Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample

const store = compose(autoRehydrate())(createStore)(todoApp)
persistStore(store)
console.log(store.getState())

render(
  <Provider store={store}>
    <BasicExample/>
  </Provider>
  , document.getElementById('app')
)
