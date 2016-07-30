import { connect } from 'react-redux'
import DecisionDetails from '../components/DecisionDetails'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.params.id)
  return {
    topics: state.topics,
    locations: state.locations,
    preferences: state.preferences
  }
}

export default connect(mapStateToProps)(DecisionDetails)
