import { POPULATE_DECISIONS } from '../actions'

const initialState = []

export default function deck (state = initialState, action) {
  switch (action.type){
    case POPULATE_DECISIONS:
      return action.decisions
    default:
      return state
  }
}
