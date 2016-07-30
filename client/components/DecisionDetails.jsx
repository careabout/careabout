import React from 'react'

export default (props) => {
  if (props.decision) {
    return (
    <div>
    <div className="container">
      <div className="row">
          <div className="col-lg-12">
              <div className="page-header">
                <h1 id="typography">{props.decision.title}</h1>
                  <div id="socialIcons">
                    <a href="#"><img src="facebook.png" /></a>
                    <a href="#"><img src="twitter.png" /></a>
                  </div>
                  <p>{props.decision.organisation}</p>
                  <p>{props.decision.url}</p>
                  <p className="text-primary">{props.decision.end}</p>
                  <ul>
                    {props.decision.topic.map((t, i) => <p key={i}>{t}</p>)}
                  </ul>
                  <ul>
                      {props.decision.location.map((loc, i) => <p key={i}>{loc}</p>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="bs-component">
                <p>{props.decision.description}</p>
              </div>

              <p className="bs-component">
                <a href={props.decision.url} className="btn btn-primary btn-lg btn-block">View More Info</a>
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
