import React from 'react';
import {Row, Col} from 'react-bootstrap';
//icons

const Footer = () => {
  return (
          <Row className='bg-white' style={{margin: '5em'}} >
            <Col xs={12} md={{span: 8, offset: 2}} className='flex align-center justify-center'>
            <p>Copyright © Defi-Layer</p>
            </Col>

          </Row>
  )
}

export default Footer
