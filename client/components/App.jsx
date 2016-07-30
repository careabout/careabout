import React from 'react'
import { Link } from 'react-router'

import Landing from './Landing'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Careabout - Change your world</h1>
        <Link to="/">HOME</Link>
        <br />
        <Link to="decisions">DECISIONS</Link>
        {this.props.children}
      </div>
    )
  }
})
