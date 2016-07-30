import { UPDATE_REGISTRATION_STATUS } from '../actions'

const initialState = {
  isSubscribed: false
}

export default (state = initialState, action) => {
  switch (action.type){
    case UPDATE_REGISTRATION_STATUS:
      return Object.assign({}, state, { isSubscribed: action.enabled })
    default:
      return state
  }
}
