import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/"><div className="navbar-brand">Care About</div></Link>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="decisions">Decisions</Link></li>
              <li><Link to="preferences">Preferences</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
