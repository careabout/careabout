import React from 'react'
import Preference from '../containers/Preference'

export default (props) => (
  <div className="container">
    <div className="page-header" id="banner">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-6">
          <h2>Subscribe</h2>
        </div>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <p>
              In order to receive browser notifications, please subscribe and allow notifications by clicking the button below:
            </p>
            {props.isSubscribed ? <button className='btn btn-default' onClick={props.unsubscribe}>Unsubscribe</button> : <button className='btn btn-default' onClick={props.subscribe}>Subscribe</button>}
            <br />
            <br />
            <p>
              After subscribing, please select the relevant topics and locations that you care about to receive those notificaitons, and then click save below:
            </p>
            <button className='btn btn-primary' onClick={() => (props.savePreferences(props.preferences, props.id, props.hasPreferences))}>Save Preferences</button>{' '}
          </div>
        </fieldset>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div className="form-group">
          <h3>Topics</h3>
          {props.topics.map((topic, i) => {
            return (
              <Preference key={i} topic={topic} />
            )
          })}
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="form-group">
          <h3>Locations</h3>
          {props.locations.map((location, i) => {
            return (
              <Preference key={i} topic={location} />
            )
          })}
        </div>
      </div>
    </div>
  </div>
)
