const ActionCreator = (num = 1) => {
  return {
    type: "INC_COUNTER",
    num
  }
}
export default ActionCreator
