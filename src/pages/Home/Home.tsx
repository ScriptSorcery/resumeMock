import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import "./Home.css"
import { Col, Row } from 'reactstrap'
import PillContainer from '../../components/PillContainer/PillContainer'

interface Props {

}

const Home = (props: Props) => {
  return (
    <div className='home_container px-5'>
      <Row className='my-5'>
        <PillContainer text="Full-Stack Developer" color="#a0c4ff"/>
      </Row>
      <Row className='my-5'>
        <Col md={3}>

        </Col>
        <Col md={6}>
          <span className='text'>Hi, I'm </span><strong className='text-bold'>Mubashir Ali</strong>
          <p className='paragraph'>
            Committed to working as a collaborative and positive team member, striving to utilize my knowledge and
            expertise for optimal engineering results. Able to effectively self-manage during independent projects, 
            as well as collaborate as a part of an effective Team
          </p>
        </Col>
        <Col md={3} className='d-flex align-items-center justify-content-center'>
          <PillContainer className="pl-5" text="UI Developer" color="#cbffbf"/>
        </Col>
      </Row>
      <Row className='my-5 second-pill-container'>
        <PillContainer className="pl-5" text="System Design" color="#fed7a5"/>
      </Row>
    </div>
  )
}

export default Home