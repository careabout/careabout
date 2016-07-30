import React from 'react'
import Link from 'react-router'

export default (props) => {
  return (
    <div>
      <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <a href="index.html" class="navbar-brand">Care About</a>
          </div>
          <div class="navbar-collapse collapse" id="navbar-main">
            <ul class="nav navbar-nav navbar-right">
              <Link to="/Decisions"><li><a href="#decisions" target="_blank">Feed</a></li></Link>
              <Link to="/Preferences"><li><a href="#preferences" target="_blank">Preferences</a></li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
