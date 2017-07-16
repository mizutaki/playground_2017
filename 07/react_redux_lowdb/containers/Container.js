import { connect } from 'react-redux'
import App from '../components/app'
import ActionCreator from '../actions/index'

const mapStateToProps = state => {
  return { counter: state.counter }
}
const mapDispatchToProps = dispatch => {
  return {
    incCounter(value) {
      dispatch(ActionCreator(value))
    }
  }
}
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp
