import React from 'react'
import PropTypes from 'prop-types'

import "./Home.css"

interface Props {

}

const home = (props: Props) => {
  return (
      <div className="home_container">
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the home page.</p>
      </div>
  )
}

export default home