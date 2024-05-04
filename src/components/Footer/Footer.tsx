import React from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './Footer.module.css';
import "../../app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//icons

const Footer = () => {
  return (
          <Row  className={[classes.roll].join(' ')} >
            <Col xs={12} md={{span: 8, offset: 2}} style={{height: '2em'}} className='flex align-center justify-center mt-5'>
            <p>Copyright © Defi-Layer</p>
            </Col>

          </Row>
  )
}

export default Footer
