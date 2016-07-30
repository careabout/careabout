import React from 'react'

export default (props) => {
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <p>description: {props.description}</p>
      <p>url: {props.url}</p>
      <p>start: {props.start}</p>
      <p>end: {props.end}</p>
      <p>status: {props.status}</p>
    </div>
  )
}
