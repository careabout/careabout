import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import decisions from './decisions'
import topics from './topics'
import locations from './locations'

export default combineReducers ({
  routing: routerReducer,
  decisions,
  topics,
  locations
})
