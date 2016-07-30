import React from 'react'

export default class Preference extends React.Component {
  constructor(props) {
    super(props)
    this.updatePreferences = this.updatePreferences.bind(this)
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

  updatePreferences(evt) {
    this.props.updatePreference({value: evt.target.value, checked: evt.target.checked})
  }

  render() {
    var topic = this.props.topic
    return (
      <div className='checkbox'>
        <label>
          <input type='checkbox' name={topic} value={topic} onChange={this.updatePreferences} checked={this.setCheckbox(topic)} />
          {topic}
        </label>
      </div>
    )
  }
}
