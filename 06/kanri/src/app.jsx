var Article = React.createClass({
  getInitialState() {
    return { value: "initial value" };
  },
  render: function() {
    return(
      <p>[{this.props.content.fib}]{this.props.content.message}</p>
    )
  }
});

var Form = React.createClass({
  getInitialState() {
    return {name: ''};
  },
  onPushText() {
    console.log("onpush");
    var tx = ReactDOM.findDOMNode(this.refs.name).value;
    var se = ReactDOM.findDOMNode(this.refs.select).value;
    console.log(tx);
    console.log(se);
    this.props.onEventCallBack({message : tx, fib : se});
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
    return { contents: [{message: 'aaaaa', fib: 2}, {message: 'bbbbb', fib: 3}] };
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
