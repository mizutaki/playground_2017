export default class ActionCreator {
  constructor(dispatcher) {//dispatcher → EventEmitter
    this.dispatcher = dispatcher;
  }
  countUp(data) {
    this.dispatcher.emit("countUp", data);
  }
}
