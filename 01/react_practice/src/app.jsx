import DragDrop from './dragdrop.js';
let dragDrop = new DragDrop();
var React = require('react');
var ReactDOM = require('react-dom');

let ls = localStorage;
let data = "";
let area1 = [];
let area2 = [];
let area3 = [];
Object.keys(ls).forEach(function(key) {
    if ("elementCounter" === key)
        return;
    let item = ls.getItem(key);
    if ("area1" === key) {
      area1 = JSON.parse(item);
    } else if ("area2" === key) {
      area2 = JSON.parse(item);
    } else if ("area3" === key) {
      area3 = JSON.parse(item);
    }
});
var DivContainer = React.createClass({
    getInitialState() {
      return {
        area1: area1,
        area2: area2,
        area3: area3
      }
    }
    ,
    onCreateTextArea(parentId, buttonId) {
      this._changeState(buttonId);
      this._setLocalStorage(parentId);

    },
    _setLocalStorage(parentId) {
      let ls = localStorage;
      let counter = ls.getItem("elementCounter");
      if (counter === null) {
        ls.setItem("elementCounter", 0);
      }
      ls.setItem("elementCounter", Number.parseInt(ls.getItem("elementCounter")) + 1);
      let arr = [];
      let children = ls.getItem(parentId);
      if (children !== null) {
          let c = JSON.parse(children);
          arr = c;
      }
      let item = {
          "id": ls.getItem("elementCounter"),
          "parentNode": parentId,
          "value": ""
      }
      arr.push(item);
      ls.setItem(item.parentNode, JSON.stringify(arr));
    },
    _changeState(buttonId) {
      if (buttonId === "area1Button") {
        this.setState({
          area1: this.state.area1.concat({id:ls.getItem("elementCounter"), parentId:"area1", value:"追加"}),
        });
      } else if (buttonId === "area2Button") {
        this.setState({
          area2: this.state.area2.concat({id:ls.getItem("elementCounter"), parentId:"area2", value:"追加"})
        });
      } else if (buttonId === "area3Button") {
        this.setState({
          area3: this.state.area3.concat({id:ls.getItem("elementCounter"), parentId:"area3", value:"追加"})
        });
      }
    },
    render: function() {
      return (
          <div className="container">
              <DivDropArea divId="area1" buttonId="area1Button" childElementList={this.state.area1} onCreateTextArea={this.onCreateTextArea}/>
              <DivDropArea divId="area2" buttonId="area2Button" childElementList={this.state.area2} onCreateTextArea={this.onCreateTextArea}/>
              <DivDropArea divId="area3" buttonId="area3Button" childElementList={this.state.area3} onCreateTextArea={this.onCreateTextArea}/>
          </div>
      );
  }
});
var DivDropArea = React.createClass({
  render: function() {
    var textarea = this.props.childElementList.map(function(child){
      return <TextArea id={child.id} parentId={child.parentId} value={child.value} />
    });
    return(
      <div id={this.props.divId} onDrop={dragDrop.drop} onDragOver={dragDrop.dragOver}>
        <CreateButton buttonId={this.props.buttonId} onCreateTextArea={this.props.onCreateTextArea} parentId={this.props.divId} />
        {textarea}
      </div>
    );
  }
});

var CreateButton = React.createClass({
  getInitialState() {
    return {
      area: area1
    };
  },
  _onCreateTextArea(e) {
    this.props.onCreateTextArea(this.props.parentId, this.props.buttonId);
  },
  render: function() {
    return(
      <input id={this.props.buttonId} className="button" type="button" value="作成" onClick={this._onCreateTextArea}/>
    )
  }
});

var TextArea = React.createClass({
  getInitialState() {
    return {
      value: "initial value"
    };
  },
  onChangeText(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return(
      <textarea id={this.props.id} value={this.state.value} draggable="true" onChange={this.onChangeText} onDragStart={dragDrop.dragStart} onDragLeave={dragDrop.dragLeave}/>
    )
  }
});

ReactDOM.render(
    <DivContainer/>, document.querySelector('#myApp'));
