import { connect } from 'react-redux'
import Decisions from '../components/Decisions'
import { getDecisions } from '../actions'

const mapStateToProps = (state) => {
  return {
    decisions: state.decisions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDecisions: () => {
      dispatch(getDecisions())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decisions)
