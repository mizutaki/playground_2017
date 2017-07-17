import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello World!
//       </div>
//     )
//   }
// }
export default App
