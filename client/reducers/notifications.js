import { UPDATE_REGISTRATION_STATUS, UPDATE_USER_ID } from '../actions'

const initialState = {
  isSubscribed: false,
  id: null
}

export default (state = initialState, action) => {
  switch (action.type){
    case UPDATE_REGISTRATION_STATUS:
      return Object.assign({}, state, { isSubscribed: action.enabled })
    case UPDATE_USER_ID:
      return Object.assign({}, state, { id: action.id })
    default:
      return state
  }
}
