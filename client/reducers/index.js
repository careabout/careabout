import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import decisions from './decisions'
import topics from './topics'
import locations from './locations'
import preferences from './preferences'

export default combineReducers ({
  routing: routerReducer,
  decisions,
  topics,
  locations,
  preferences
})
