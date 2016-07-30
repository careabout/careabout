import { connect } from 'react-redux'
import Preferences from '../components/Preferences'
import { updatePreference } from '../actions'

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    locations: state.locations,
    preferences: state.preferences
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePreference: (preference) => {
      dispatch(updatePreference(preference))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Preferences)
