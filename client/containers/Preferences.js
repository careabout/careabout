import { connect } from 'react-redux'
import Preferences from '../components/Preferences'
import { updatePreference, savePreferences, subscribe, unsubscribe } from '../actions'

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    locations: state.locations,
    preferences: state.preferences,
    isSubscribed: state.notifications.isSubscribed,
    id: state.notifications.id,
    hasPreferences: state.notifications.hasPreferences
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePreference: (preference) => {
      dispatch(updatePreference(preference))
    },
    savePreferences: (preferences, id, hasPreferences) => {
      dispatch(savePreferences(preferences, id, hasPreferences))
    },
    subscribe: () => {
      dispatch(subscribe())
    },
    unsubscribe: () => {
      dispatch(unsubscribe())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preferences)
