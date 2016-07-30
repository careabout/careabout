import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
{/*import Decisions from './containers/DecisionsContainer'
import Preferences from './containers/PreferencesContainer'*/}

let store = createStore(
  appReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

const history = syncHistoryWithStore(hashHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          {/* <Route path='Decisions' component={Decisions}/>
          <Route path='Preferences' component={Preferences}/> */}
          </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
