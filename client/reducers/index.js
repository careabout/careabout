import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import decisions from './decisions'

export default combineReducers ({
  routerReducer,
  decisions
})
