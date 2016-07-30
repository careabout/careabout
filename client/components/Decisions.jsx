import React from 'react'
import Decision from './Decision'

export default (props) => {
  return (
    <div>
      <h1>Decisions</h1>
      {props.decisions.map((decision, i) => {
        return <Decision key={i} {...decision}/>
      })}
    </div>
  )
}
