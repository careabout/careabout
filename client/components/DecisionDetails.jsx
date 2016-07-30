import React from 'react'

export default (props) => {
  if (props.decision) {
    return (
      <div>
        <h1>Decision Details</h1>
        <p>{props.decision.title}</p>
        <p>{props.decision.description}</p>
        <p>{props.decision.organisation}</p>
        <p>{props.decision.url}</p>
        <p>{props.decision.end}</p>
        <ul>
            {props.decision.topic.map((t, i) => <p key={i}>{t}</p>)}
        </ul>
        <ul>
            {props.decision.location.map((loc, i) => <p key={i}>{loc}</p>)}
        </ul>
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }

}
