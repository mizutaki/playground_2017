import React, { PropTypes } from 'react'
const Todo = ({ text, fivonacci }) => (
  <li>
    <label>fivo</label>
    {fivonacci}
    <label>text</label>
    {text}
  </li>
)
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  fivonacci: PropTypes.string.isRequired
}
export default Todo
