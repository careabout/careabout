import React from 'react'

export default class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.updatePreferences = this.updatePreferences.bind(this)
  }

  updatePreferences(evt) {
    this.props.updatePreference({value: evt.target.value, checked: evt.target.checked})
  }

  saveChanges(evt) {
    console.log(evt)
  }

  setCheckbox(topic) {
    var checkBox = false
    this.props.preferences.map((preference) => {
      if (preference === topic) {
        checkBox = true
      }
    })
    return checkBox
  }

  render() {
    return (
      <div>
        <h1>Preferences</h1>
        <h2>Topics</h2>
        <ul>
          {this.props.topics.map((topic, i) => {
            return (
              <li key={i}>
                <label>{topic}</label>{' '}<input type="checkbox" name={topic} value={topic} onChange={this.updatePreferences} checked={this.setCheckbox(topic)} />
              </li>
            )
          })}
        </ul>
        <h2>Locations</h2>
        <ul>
          {this.props.locations.map((location, i) => {
            return (
              <li key={i}>
                <label>{location}</label>{' '}<input type="checkbox" name={location} value={location} onChange={this.updatePreferences} checked={this.setCheckbox(location)} />
              </li>
            )
          })}
        </ul>
        <button onClick={this.saveChanges}>Save Changes</button>
      </div>
    )
  }
}
