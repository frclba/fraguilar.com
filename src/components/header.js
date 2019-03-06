import React from 'react'
import Link from 'gatsby-link'

const Header = ({siteTitle}) => (
  <header>
    <div className="container">
      <div className="row">
        <div className="cols-xs-3 col-sm-6 col-xs-offset-1">
          <Link to="/">
            <h1>{siteTitle}</h1>
          </Link>
        </div>
        <div className="col-xs-2 col-sm-3 Menu">
          <Link to="/#work">
            <h4>Work</h4>
          </Link>
          <Link to="/#experiments">
            <h4>Experiments</h4>
          </Link>
          <Link to="/curriculum">
            <h4>Curriculum</h4>
          </Link>
          <Link to="/about">
            <h4>About</h4>
          </Link>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <h2>Having fun using technology.</h2>
        <br/>
        <h2>Human Being @ Life</h2>
      </div>
    </div>
  </div>
  </header>
)

export default Header
