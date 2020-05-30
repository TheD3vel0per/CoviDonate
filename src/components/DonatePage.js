import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function DonatePage() {

    return (
        <>

<Container>
  <Row>
    <Col><Button variant="primary"> $5 </Button>{' '}</Col>
    <Col><Button variant="primary"> $10 </Button>{' '}</Col>
    <Col><Button variant="primary"> $20 </Button>{' '}</Col>
  </Row>
  <Row>
    <Col><Button variant="primary"> $50 </Button>{' '}</Col>
    <Col><Button variant="primary"> $100 </Button>{' '}</Col>
    <Col><Button as="input" type="submit" variant="primary"> Enter Amount (CAD $) </Button>{' '}</Col>
  </Row>

</Container>

         
              
        </>
    );
}

export default DonatePage;