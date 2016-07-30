import { connect } from 'react-redux'
import DecisionDetails from '../components/DecisionDetails'

const mapStateToProps = (state, ownProps) => {
  var decision = state.decisions.filter(decision => Number(ownProps.params.id) === decision.id)[0]
  console.log(decision)
  return {
    decision: decision
  }
}

export default connect(mapStateToProps)(DecisionDetails)
