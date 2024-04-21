import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../NavBar/NavBar'

interface Props {

}

const home = (props: Props) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the home page.</p>
      </div>
    </div>
  )
}

export default home