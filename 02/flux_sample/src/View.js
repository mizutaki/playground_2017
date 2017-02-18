import React from "react"
import ActionCreator from "./ActionCreator"
import Store from "./Store"
import EventEmitter from "./EventEmitter"
import View2 from "./View2"
var dispatcher = new EventEmitter();
var action = new ActionCreator(dispatcher);
var store = new Store(dispatcher);
export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: store.getCount()};
    store.on("CHANGE", () => {
      this._onChange();
    });
  }
  _onChange() {
    console.trace();
    this.setState({count: store.getCount()});
  }
  tick() {
    action.countUp(this.state.count + 1);
  }
  render() {
    return (
      <div>
        <button onClick={this.tick.bind(this)}>Count Up </button>
        <p>
          Count: {this.state.count}
        </p>
        <View2 count={this.state.count}/>
      </div>
    );
  }
}
