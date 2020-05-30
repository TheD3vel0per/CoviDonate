import React from 'react';
import {
    Button,
    Row,
    Container,
    Col,
    InputGroup,
    FormControl,
    Form
} from 'react-bootstrap';

function DonatePage() {

    const [value, setValue] = React.useState([1, 2, 3, 4, 5]);

    return (
        <>
    <Form>
        <Container>
        <Row>
    <Col style={{marginTop: '25%', 
                marginBottom: 30, 
                textAlign: 'center'}}
                ><h2 style={{
                    color: '#454545',
                    fontWeight: 'bold',
                    fontSize: '3em',
                textShadow: '0px 1px 3px #454545',
                textShadow: '0px 5px 4px #454545',
                textShadow: '0px 7px 16px #e0e0e0'
                }}>Donate Now</h2>
                </Col>
    </Row>
  <Row >
    <Col style={{
        width: 'inherit'
    }}><Button block variant="primary"> $5 </Button>{' '}</Col>
    <Col><Button block variant="primary"> $10 </Button>{' '}</Col>
    <Col><Button block variant="primary"> $20 </Button>{' '}</Col>
    <Col><Button block variant="primary"> $50 </Button>{' '}</Col>
    <Col style={{
        marginBottom: '10%'
    }}><Button block variant="primary"> $100 </Button>{' '}</Col>
       
    </Row>
    <p></p>

    <Row >
    <h4>Other Amount: </h4>
    <InputGroup style = {{width: '80%'}} className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
      <Button variant="primary" type="submit">Submit</Button>
    </InputGroup.Append>
  </InputGroup>
    </Row>

    </Container>

 </Form>
        </>
    );
}

export default DonatePage;