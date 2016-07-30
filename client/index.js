import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Landing from './components/Landing'
import Decisions from './containers/Decisions'
import Preferences from './containers/Preferences'

import reducer from './reducers'
import { getDecisions, getPreferences } from './actions'

let store = createStore(
  reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

store.dispatch(getDecisions())
store.dispatch(getPreferences())

const history = syncHistoryWithStore(hashHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path='decisions' component={Decisions}/>
          <Route path='preferences' component={Preferences}/>
          </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
