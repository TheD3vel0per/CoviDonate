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

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    {/* code snippet to authenticate user on page. 
    If not logged in returns Null, None, or empty or something*/}

    { /* localStorage.getItem('token) =*/ }
    var user_state = localStorage.getItem('token');

    return (
        <>
            
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Container>
                    <Form.Row>
                        <Col style={{
                            marginTop: '25%',
                            marginBottom: 30,
                            textAlign: 'center'
                        }}
                        ><h2 style={{
                    
                            color: '#141114',
                            fontWeight: 'bold',
                            fontSize: '4em',
                            textShadow: '5px 8px 10px #696969',                       
                        }}>Donate Now</h2>
                        </Col>
                    </Form.Row>
                    <Form.Row >
                        <Col style={{
                            width: 'inherit'
                        }}><Button style={{border: '1px solid #8f8f8f', 
                                            boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $5 </Button>{' '}</Col>
                        <Col><Button style={{border: '1px solid #8f8f8f', 
                                            boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $10 </Button>{' '}</Col>
                        <Col><Button style={{border: '1px solid #8f8f8f', 
                                            boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $20 </Button>{' '}</Col>
                        <Col><Button style={{border: '1px solid #8f8f8f', 
                                            boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $50 </Button>{' '}</Col>
                        <Col style={{
                            marginBottom: '10%'
                        }}><Button style={{border: '1px solid #8f8f8f', 
                        boxShadow: '2px 5px 10px #888888'}} block variant="primary"> $100 </Button>{' '}</Col>

                    </Form.Row>
                    <p></p>
            
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03" className="">
                    <Form.Label>Other Amount</Form.Label>
                    <Form.Control type="text" placeholder="CAD $" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a number.
                    </Form.Control.Feedback>
                    </Form.Group>
                    
                
                </Form.Row>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>


                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        />
                </Form.Group>
                
                <Button size="lg" type="number submit"> Donate </Button>
            
            </Container>
        </Form>

        
        </>
    );
}

export default DonatePage;