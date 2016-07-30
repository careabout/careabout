import React from 'react'
import { Link } from 'react-router'

import Landing from './Landing'
import Nav from './Nav'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div>
        <Nav />
        <div className="container">
            {this.props.children}
        <Footer />
        </div>
      </div>
    )
  }
})
