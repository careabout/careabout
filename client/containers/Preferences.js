import { connect } from 'react-redux'
import Preferences from '../components/Preferences'
import { updatePreference, savePreferences } from '../actions'

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
    },
    savePreferences: () => {
      dispatch(savePreferences())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Preferences)
