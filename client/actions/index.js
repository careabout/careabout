import request from 'superagent'

export const getDecisions = () => {
  return dispatch => {
    request
      .get('/decisions')
      .end((err, res) => {
        var payload = JSON.parse(res.text)
        dispatch(populateDecisions(payload))
      })
  }
}

export const getPreferences = () => {
  return dispatch => {
    var preferencesData = ['a','d']
    dispatch(populatePreferences(preferencesData))
  }
}

export const populatePreferences = (preferences) => {
  return {
    type: POPULATE_PREFERENCES,
    preferences: preferences
  }
}

export const populateDecisions = (payload) => {
  return {
    type: POPULATE_DECISIONS,
    decisions: payload.decisions,
    topics: payload.topics,
    locations: payload.locations
  }
}

export const updatePreference = (preference) => {
  return {
    type: UPDATE_PREFERENCE,
    preference: preference.value,
    checked: preference.checked
  }
}

export const GET_DECISIONS = 'GET_DECISIONS'
export const POPULATE_DECISIONS = 'POPULATE_DECISIONS'
export const GET_PREFERENCES = 'GET_PREFERENCES'
export const POPULATE_PREFERENCES = 'POPULATE_PREFERENCES'
export const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE'
export const SAVE_PREFERENCES = 'SAVE_PREFERENCES'
