import { connect } from 'react-redux'
import DecisionDetails from '../components/DecisionDetails'

const mapStateToProps = (state, ownProps) => {
  return {
    decision: state.decisions.filter(decision => Number(ownProps.params.id) === decision.id)[0]
  }
}

export default connect(mapStateToProps)(DecisionDetails)