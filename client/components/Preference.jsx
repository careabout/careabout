import React from 'react'

export default class Preference extends React.Component {
  
  setCheckbox(topic) {
    return this.props.preferences.filter(preference => preference === topic).length > 0
  }

  updatePreferences(evt) {
    this.props.updatePreference({value: evt.target.value, checked: evt.target.checked})
  }

  render() {
    var topic = this.props.topic
    return (
      <div className='checkbox'>
        <label>
          <input type='checkbox' name={topic} value={topic} onChange={this.updatePreferences.bind(this)} checked={this.setCheckbox(topic)} />
          {topic}
        </label>
      </div>
    )
  }
}
