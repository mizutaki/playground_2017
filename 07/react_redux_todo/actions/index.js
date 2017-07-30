const shrotId = require('shortid')
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: shrotId.generate(),
    text
  }
}
