import React from 'react'

var Button = React.createClass({
  done(e) {
    var targetId = Number.parseInt(e.currentTarget.getAttribute('data-targetId'));
    // db.get('tasks').remove({ id: targetId }).write();
    this.props.onEventCallBack();
  },
  render: function() {
    return(
      <button onClick={this.done} data-targetId={this.props.targetId}>{this.props.buttonName}</button>
    )
  }
});

export default Button
