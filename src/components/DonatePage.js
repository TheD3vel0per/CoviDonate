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

    const [validated, setValidated] = React.useState(false);
    {/* code snippet to authenticate user on page. 
    If not logged in returns Null, None, or empty or something*/}

    {/* localStorage.getItem('token) =*/}

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <>
            <Form>
                <Container>
                    <Form.Row>
                        <Col style={{
                            marginTop: '25%',
                            marginBottom: 30,
                            textAlign: 'center'
                        }}
                        ><h2 style={{
                            color: '#454545',
                            fontWeight: 'bold',
                            fontSize: '3em',
                            textShadow: '0px 1px 3px #454545',
                            textShadow: '0px 5px 4px #454545',
                            textShadow: '0px 7px 16px #e0e0e0'
                        }}>Donate Now</h2>
                        </Col>
                    </Form.Row>
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

                    
                

                </Container>

            </Form>


        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Container>
        <Form.Row>

        
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03" className="">
          <Form.Label>Other Amount</Form.Label>
          <Form.Control type="text" placeholder="CAD $" required />
          <Form.Control.Feedback type="invalid">
            Please provide a number.
          </Form.Control.Feedback>
        </Form.Group>

      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button size="lg" type="submit"> Donate </Button>
      </Container>

    </Form>
        </>
    );
}

export default DonatePage;