import { connect } from 'react-redux'
import Preferences from '../components/Preferences'

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    locations: state.locations,
    preferences: state.preferences.current,
    temporary: state.preferences.temporary
  }
}

export default connect(mapStateToProps)(Preferences)
