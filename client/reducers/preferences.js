import { POPULATE_PREFERENCES } from '../actions'

const initialState = { current: [], temporary: [] }

export default (state = initialState, action) => {
  switch (action.type){
    case POPULATE_PREFERENCES:
      return Object.assign({}, state, {current: action.preferences})
    default:
      return state
  }
}
