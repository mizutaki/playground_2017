import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  let select

  return (
    <div>
      <select ref={(node) => {
          select = node
        }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="8">8</option>
        <option value="13">13</option>
        <option value="21">21</option>
        <option value="34">34</option>
      </select>
      <input ref={(node) => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value, select.value))
      }}>
        AddTodo
      </button>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
