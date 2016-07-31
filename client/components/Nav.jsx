import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/"><img src="care_about_logo.png" style={{ maxHeight: '35px', width: 'auto', marginTop: '13px'}} /></Link>
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
