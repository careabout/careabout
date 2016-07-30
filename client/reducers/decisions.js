const initialState = []

export default function deck (state = initialState, action) {
  switch (action.type){
    case 'POPULATE_DECISIONS':
      return action.payload
    default:
      return state
  }
}
