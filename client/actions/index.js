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

export const populateDecisions = (payload) => {
  return {
    type: POPULATE_DECISIONS,
    decisions: payload.decisions,
    topics: payload.topics,
    locations: payload.locations
  }
}

export const GET_DECISIONS = 'GET_DECISIONS'
export const POPULATE_DECISIONS = 'POPULATE_DECISIONS'
