import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand">Care About</a>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav navbar-right">
              <Link to="decisions"><li>Feed</li></Link>
              <Link to="preferences"><li>Preferences</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
