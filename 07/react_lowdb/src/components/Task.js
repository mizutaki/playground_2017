import React from 'react'
import Button from './button'

var Task = React.createClass({
  getInitialState() {
    return { value: "initial value" };
  },
  render: function() {
    return(
      <div>
        <p>[{this.props.content.fib}]{this.props.content.message}</p>
        <Button buttonName="done" targetId={this.props.content.id} onEventCallBack={this.props.onEventCallBack}/>
      </div>
    )
  }
});

export default Task
