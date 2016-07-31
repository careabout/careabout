import { connect } from 'react-redux'
import DecisionDetails from '../components/DecisionDetails'

const mapStateToProps = (state, ownProps) => {
  var decision = state.decisions.filter(decision => {
    return ownProps.params.id === decision['_id']
  })[0]
  return {
    decision: decision
  }
}

export default connect(mapStateToProps)(DecisionDetails)
