import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div>
      <div className="jumbotron" className="tickerParent">


          <div id="ticker" className="row">
                    <div className="container">
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


                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <button className="btn"><Link to="preferences">Get Started &raquo;</Link></button>
                          </div>
                        </div>
                      </div>

                    </div>

                  <div className="container">
                    <div className="row" id="homeDetails">
                      <div className="col-lg-12">
                        <p>Laws and plans are being created and changed all the time without the people of the nation even being aware.</p><p>There should be a way to be notified when something close to your heart is about to be decided. That is where our App comes in. Put in your topics of interest and when an issue around that topic comes up then you will be informed and then there is the opportunity to engage with government to mold the country and area that you live in.</p>
                        <footer>
                          <div className="row">
                            <div className="col-lg-12">
                              <ul className="list-unstyled">
                                <li className="pull-right"><a href="#top">Back to top</a></li>
                              </ul>
                              <p><a href="/" rel="nofollow">View the repo</a> on GitHub</p>
                              <p><a href="https://github.com/careabout/careabout" rel="nofollow">Bootstrap</a> Theme by <a href="http://thomaspark.co/" rel="nofollow">Thomas Park</a></p>
                              <p>Icons from <a href="http://fortawesome.github.io/Font-Awesome/" rel="nofollow">Font Awesome</a>. Web fonts from <a href="http://www.google.com/webfonts" rel="nofollow">Google</a>.</p>
                            </div>
                          </div>
                        </footer>
                      </div>
                    </div>

                </div>
    </div>

              )
            }
