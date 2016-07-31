import React from 'react'

export default (props) => {
  return (
      <div className="container">
      <div className="jumbotron" className="tickerParent">
        <div className="container">
          <div id="ticker" className="row">
            <div id="text">
              <h1 className="gray">Care about</h1>
            </div>
            <div id="first">
            </div>
            <div id="second">
              <ul>
                <li>
                  <h1 className="lightergray">New Zealand</h1></li>
                  <li>
                    <h1 className="lightergray">buildings</h1></li>
                    <li>
                      <h1 className="lightergray">Education</h1></li>
                      <li>
                        <h1 className="lightergray">discussions</h1></li>
                        <li>
                          <h1 className="lightergray">environment</h1></li>
                          <li>
                            <h1 className="lightergray">contributing</h1></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <p><a className="btn btn-primary btn-lg">Get Started &raquo;</a></p>
                        </div>
                      </div>
                    <div className="row" id="homeDetails">
                      <div className="col-lg-12">
                        <p>Laws and plans are being created and changed all the time without the people of the nation even being aware.</p><p>There should be a way to be notified when something close to your heart is about to be decided. That is where our App comes in. Put in your topics of interest and when an issue around that topic comes up then you will be informed and then there is the opportunity to engage with government to mold the country and area that you live in.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
  )
}
