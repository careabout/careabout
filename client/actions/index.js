import request from 'superagent'

export const SUBSCRIBE = 'SUBSCRIBE'
export const GET_DECISIONS = 'GET_DECISIONS'
export const POPULATE_DECISIONS = 'POPULATE_DECISIONS'
export const GET_PREFERENCES = 'GET_PREFERENCES'
export const POPULATE_PREFERENCES = 'POPULATE_PREFERENCES'
export const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE'
export const SAVE_PREFERENCES = 'SAVE_PREFERENCES'
export const UPDATE_REGISTRATION_STATUS = 'UPDATE_REGISTRATION_STATUS'
export const UPDATE_USER_ID = 'UPDATE_USER_ID'
export const UPDATE_USER_PREFERENCES = 'UPDATE_USER_PREFERENCES'

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

export const getPreferences = (id) => {
  return dispatch => {
    var preferencesUrl = 'http://careabout-notifications.herokuapp.com/v1/subscriptions/0052924d-a741-4439-8e3f-99241f7be6fe'
    request
      .get(preferencesUrl)
      .end((err, res) => {
        dispatch(updateUserPreferences(res.body))
      })
  }
}

export const updateUserPreferences = (preferences) => {
  console.log('prefences', preferences)
  return {
    type: UPDATE_USER_PREFERENCES,
    preferences: preferences
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

export const savePreferences = () => {
  return dispatch => {
    console.log('NEED TO ADD API TO SAVE PREFERENCES')
  }
}

export const checkRegistered = () => {
  return dispatch => {
    OneSignal.push(["isPushNotificationsEnabled", function(enabled) {
      dispatch(updateRegistrationStatus(enabled))
      if (enabled) {
        dispatch(getUserId())
      }
    }]);
  }
}

export const monitorRegistered = () => {
  return dispatch => {
    OneSignal.on('subscriptionChange', function (isSubscribed) {
      dispatch(updateRegistrationStatus(isSubscribed))
      dispatch(getUserId())
    })
  }
}

export const getUserId = () => {
  return dispatch => {
    OneSignal.push(["getUserId", function(userId) {
      dispatch(populateUserId(userId))
      dispatch(getPreferences(userId))
    }])
  }
}

export const populateUserId = (userId) => {
  return {
    type: UPDATE_USER_ID,
    id: userId
  }
}

export const updateRegistrationStatus = (enabled) => {
  return {
    type: UPDATE_REGISTRATION_STATUS,
    enabled: enabled
  }
}

export const subscribe = () => {
  return dispatch => {
    OneSignal.push(["registerForPushNotifications", { modalPrompt: true }])
  }
}

export const unsubscribe = () => {
  return dispatch => {
    OneSignal.push(["setSubscription", false])
  }
}
