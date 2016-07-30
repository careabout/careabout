import request from 'superagent'

export const getDecisions = () => {
  return dispatch => {
    request
      .get('/decisions')
      .end((err, res) => {
        var decisions = JSON.parse(res.text)
        dispatch(populateDecisions(decisions))
      })
  }
}

export const populateDecisions = (decisions) => {
  return {
    type: POPULATE_DECISIONS,
    payload: decisions
  }
}

export const GET_DECISIONS = 'GET_DECISIONS'
export const POPULATE_DECISIONS = 'POPULATE_DECISIONS'
