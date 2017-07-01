import low from 'lowdb'
const db = low('db.json')
db.defaults({ tasks: [], archive: [], id: 1 }).write()

// db.get('posts')
//   .push({title: 'lowdb'}).write()
// console.log(db.get('posts[0].title').value());
var Article = React.createClass({
  getInitialState() {
    return { value: "initial value" };
  },
  render: function() {
    return(
      <div>
        <p>[{this.props.content.fib}]{this.props.content.message}</p>
        <Button buttonName="done" targetId={this.props.content.id}/>
      </div>
    )
  }
});

var Button = React.createClass({
  done(e) {
    var targetId = Number.parseInt(e.currentTarget.getAttribute('data-targetId'));
    db.get('tasks').remove({ id: targetId }).write();
  },
  render: function() {
    return(
      <button onClick={this.done} data-targetId={this.props.targetId}>{this.props.buttonName}</button>
    )
  }
});
var Form = React.createClass({
  getInitialState() {
    return {name: ''};
  },
  onPushText() {
    var tx = ReactDOM.findDOMNode(this.refs.name).value;
    var se = ReactDOM.findDOMNode(this.refs.select).value;
    var idNumber = db.get('id').value();
    db.get('tasks').push({id: idNumber, message : tx, fib : se}).write();
    db.set('id', idNumber + 1).write();
    this.props.onEventCallBack({id: idNumber, message : tx, fib : se});
  },
  onChangeText(e) {
    console.log(e.target.value);
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

var ArticleContainer = React.createClass({
  getInitialState() {
    //return { contents: [{message: 'aaaaa', fib: 2}, {message: 'bbbbb', fib: 3}] };
    return { contents: db.get('tasks').value() }
  },
  pushMessage: function (comment) {
    console.log(this.state.contents);
    let current = this.state.contents;
    current.push(comment);
    this.setState({ contents : current });
    console.log(this.state.contents);
  },
  render: function() {
    var contents = this.state.contents.map(function(content) {
      return <Article content={content} value="done"/>
    });
    return (
      <div>
        <Form onEventCallBack={this.pushMessage}/>
        {contents}
      </div>
    );
  }
});
ReactDOM.render(
    <ArticleContainer/>, document.querySelector('#myApp'));
