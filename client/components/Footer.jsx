import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div>
    <footer className="container">
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
  )
}
