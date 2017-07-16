import React from 'react'
import ReactDOM from 'react-dom'

var Form = React.createClass({
  getInitialState() {
    return {name: ''};
  },
  onPushText() {
    console.log('onpush');
    var tx = ReactDOM.findDOMNode(this.refs.name).value;
    var se = ReactDOM.findDOMNode(this.refs.select).value;
    // db.get('tasks').push({id: idNumber, message : tx, fib : se}).write();
    // db.set('id', idNumber + 1).write();
    this.props.onEventCallBack();
  },
  onChangeText(e) {
    this.setState({ name: e.target.value });
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="name" onChange={this.onChangeText}></input>
        <select name="category" ref="select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="13">13</option>
          <option value="21">21</option>
          <option value="34">34</option>
        </select>
        <button type="text" onClick={this.onPushText}>ボタン</button>
      </div>
    )
  }
});

export default Form
