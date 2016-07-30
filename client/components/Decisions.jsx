import React from 'react'
import Decision from './Decision'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className="container">
      <div className="page-header" id="banner">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-6">
            <h2>Decisions</h2>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
          <div className="bs-component">
              <div className="modal">
                {props.decisions.map((decision, i) => {
                  return <Decision key={i} {...decision}/>
                })}
              </div>
          </div>
      </div>
    </div>
  )
}
