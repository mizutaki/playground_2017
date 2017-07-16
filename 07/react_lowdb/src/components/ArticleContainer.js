import React from 'react'
import Task from './task'
import Form from './form'

var ArticleContainer = React.createClass({
  getInitialState() {
    // return { contents: db.get('tasks').value() }
    return { contents: [] }
  },
  subscribe: function() {
    // this.setState({ contents: db.get('tasks').value() });
  },
  render: function() {
    const subscribe = this.subscribe;
    var contents = this.state.contents.map(function(content) {
      return <Task content={content} value="done"　onEventCallBack={subscribe}/>
    });
    return (
      <div>
        <Form onEventCallBack={this.subscribe}/>
        {contents}
      </div>
    );
  }
});
export default ArticleContainer
