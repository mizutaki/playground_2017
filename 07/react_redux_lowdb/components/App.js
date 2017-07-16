import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <p>現在の数値:{this.props.counter}</p>
        <button onClick={ () => {this.props.incCounter(1) } }>加算</button>
      </div>
    )
  }
}
export default App
