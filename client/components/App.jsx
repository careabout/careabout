import React from 'react'
import { Link } from 'react-router'

import Landing from './Landing'
import Nav from './Nav'

export default React.createClass({
  render () {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
})
