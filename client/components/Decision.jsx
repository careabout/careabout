import React from 'react'

export default (props) => {
  return (
    <div>
      <h1>Decision</h1>
      <p>title: {props.title}</p>
      <p>description: {props.description}</p>
      <p>url: {props.url}</p>
      <p>start: {props.start}</p>
      <p>end: {props.end}</p>
      <p>status: {props.status}</p>
    </div>
  )
}
