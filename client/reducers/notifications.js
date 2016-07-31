import { UPDATE_REGISTRATION_STATUS, UPDATE_USER_ID, POPULATE_PREFERENCES } from '../actions'

const initialState = {
  isSubscribed: false,
  id: null,
  hasPreferences: false
}

export default (state = initialState, action) => {
  switch (action.type){
    case UPDATE_REGISTRATION_STATUS:
      return Object.assign({}, state, { isSubscribed: action.enabled })
    case UPDATE_USER_ID:
      return Object.assign({}, state, { id: action.id })
    case POPULATE_PREFERENCES:
      return Object.assign({}, state, { hasPreferences: action.hasPreferences })
    default:
      return state
  }
}
