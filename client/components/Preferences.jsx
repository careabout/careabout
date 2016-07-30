import React from 'react'
import Preference from '../containers/Preference'

export default class Preferences extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="form-horizontal">
          <div className="form-group">
            <h3>Topics</h3>
            {this.props.topics.map((topic, i) => {
              return (
                <Preference key={i} topic={topic} />
              )
            })}
          </div>
          <div className="form-group">
            <h3>Locations</h3>
            {this.props.locations.map((location, i) => {
              return (
                <Preference key={i} topic={location} />
              )
            })}
          </div>
          <button onClick={this.props.subscribe}>Subscribe</button>
          <button onClick={this.props.savePreferences}>Save Changes</button>
        </div>
      </div>
    )
  }
}
