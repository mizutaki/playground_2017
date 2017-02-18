import React from "react"
export default class View2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <p>
          MultiplicationCount: {this.props.count * this.props.count}
        </p>
    );
  }
}
