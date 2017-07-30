const shrotId = require('shortid')
export const addTodo = (text, fivonacci) => {
  return {
    type: 'ADD_TODO',
    id: shrotId.generate(),
    text,
    fivonacci: fivonacci
  }
}
