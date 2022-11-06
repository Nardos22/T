import '../../public/css/home.css';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div className="search-container"> 
 <Form>
      <Form.Group as={Row} className="mb-4" controlId="city">
        <Form.Label column sm={3}>From</Form.Label>
        <Col sm={9}>
        <Form.Control type="city" placeholder="" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="city">
        <Form.Label column sm={3}>To</Form.Label>
        <Col sm={9}>
        <Form.Control type="city" placeholder="" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="date">
        <Form.Label column sm={3}>Date</Form.Label>
        <Col sm={9}>
        <Form.Control type="date" placeholder="" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="travlers">
        <Form.Label column sm={3}>Travllers</Form.Label>
        <Col sm={9}>

      <Accordion  alwaysOpen>
       <Accordion.Item eventKey="0">
        <Accordion.Header>
        Travllers
        </Accordion.Header>
        <Accordion.Body>
                <Row className='text-center mb-2'>
                  <Col className='mx-2'>
                    <div className='mt-2'>Adult:</div></Col>
                    <Col><Button variant='secondary'>+</Button></Col>
                  <Col><Button variant='secondary' >-</Button></Col>
                </Row>
                <Row className='text-center mb-2'>
                  <Col className='mx-2'><div className='mt-2'>Child:</div></Col>
                  <Col><Button variant='secondary'>+</Button></Col>
                  <Col><Button variant='secondary' >-</Button></Col>
                </Row>
                <Row className='text-center mb-2'>
                  <Col xs='5' ><div className='mt-2'>Student: </div></Col>
                  <Col><Button variant='secondary'>+</Button></Col>
                  <Col><Button variant='secondary' >-</Button></Col>
                </Row>
                <Row className='text-center mb-2'>
                  <Col xs='5'><div className='mt-2'>Pension: </div></Col>
                  <Col><Button variant='secondary'>+</Button></Col>
                  <Col><Button variant='secondary' >-</Button></Col>
                  </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
        </Col>
      </Form.Group>

      <Col sm={{ span: 10, offset: 5 }}>
          <Button  variant="light" type="submit">
          Search
          </Button>
        </Col>
    </Form>
  </div>
};

export default Home;