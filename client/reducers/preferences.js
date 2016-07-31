import { POPULATE_PREFERENCES, UPDATE_PREFERENCE } from '../actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type){
    case POPULATE_PREFERENCES:
      return action.preferences
    case UPDATE_PREFERENCE:
      if (action.checked) {
        return state.concat(action.preference)
      } else {
        return state.filter(preference => action.preference !== preference)
      }
      return state
    default:
      return state
  }
}
