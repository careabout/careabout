import { connect } from 'react-redux'
import Preference from '../components/Preference'
import { updatePreference, savePreferences } from '../actions'

const mapStateToProps = (state) => {
  return {
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


export default connect(mapStateToProps, mapDispatchToProps)(Preference)
