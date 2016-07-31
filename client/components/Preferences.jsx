import React from 'react'
import Preference from '../containers/Preference'

export default (props) => (
  <div className="container">
    <div className="page-header" id="banner">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-6">
          <h2>Preferences</h2>
        </div>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <h3>Topics</h3>
            {props.topics.map((topic, i) => {
              return (
                <Preference key={i} topic={topic} />
              )
            })}
          </div>
          <div className="form-group">
            <h3>Locations</h3>
            {props.locations.map((location, i) => {
              return (
                <Preference key={i} topic={location} />
              )
            })}
          </div>
          <div className="form-group">
            <br />
            {props.isSubscribed ? <button className='btn btn-default' onClick={props.unsubscribe}>Unsubscribe</button> : <button className='btn btn-default' onClick={props.subscribe}>Subscribe</button>}

            {' '}
            <button className='btn btn-primary' onClick={() => (props.savePreferences(props.preferences, props.id, props.hasPreferences))}>Save Changes</button>{' '}
          </div>
        </fieldset>

      </div>
    </div>
  </div>
)
