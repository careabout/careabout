import React from 'react'

export default (props) => {
  if (props.decision) {
    var startDate = new Date(props.decision.start)
    var endDate = new Date(props.decision.end)
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              {props.decision.topics.map((t, i) => <p key={i}>{t} {props.decision.locations[i]}</p>)}
              <h1 id="typography">{props.decision.title}</h1>
              <p className="text-primary">Submissions Close: {endDate.toLocaleDateString("en-NZ")}</p>
              <div id="socialIcons">
                <a href="#"><img src="facebook.png" /></a>
                <a href="#"><img src="twitter.png" /></a>
              </div>
            </div>
          </div>
        </div>
        <p><strong>{props.decision.organisation}</strong></p>
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <div dangerouslySetInnerHTML={{__html: props.decision.description}}/></div>
              <p className="bs-component">
                <a href={props.decision.url} className="btn btn-primary btn-lg btn-block">Go to submission website</a>
              </p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
