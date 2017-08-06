import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <AddTodo />
        <VisibleTodoList />
      </div>
    )
  }
}
export default Home
