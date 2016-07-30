import React from 'react'
import Decision from './Decision'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className="col-lg-12">
        <div className="bs-component">
            <div className="model">
              <h1>Decisions</h1>
              {props.decisions.map((decision, i) => {
                return <Decision key={i} {...decision}/>
              })}
            </div>
        </div>
    </div>
  )
}
