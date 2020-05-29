import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Project() {

    const project = {
        "id": "100",
        "title": "COVID Masks",
        "shortDescription": "Project to fund 3D printing of masks",
        "longDescription": " Every since the dawn of time, man has worn masks to keep safe from rude people who cough everywhere and protest lockdown. In our project.... GIVE US MONEY!!!!!",
        "image": "",
        "companyName": "Masks R Us",
        "companyUrl": "",
        "finance": {
            "donatedSoFar": "0",
            "donationGoals": "100000"
        },
        "tags": ["keywords"]
    };

    return (
        <>

            <div className="text-center p-5" id="wrapper">
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180" />

                <Card.Body>
                
                    <Card.Title >{project.title}</Card.Title>

                <Card.Text>
                    {project.shortDescription}
                </Card.Text>
                <div className="container">
                <ProgressBar>
                    <ProgressBar animated striped variant="success" now={40} key={1} />
                    <ProgressBar variant="warning" now={100-(40/100)} key={2} />
                </ProgressBar>
                </div>
                <p></p>
                <p></p>
                    <Card.Text>
                        {project.longDescription}
                    </Card.Text>
                    <Button className="m-3" variant="outline-dark"> Company Website </Button>
                    <Button className="m-3" variant="outline-dark"> Share </Button>
                    <Button className="m-3" variant="outline-dark"> Subscribe </Button>
                    <p></p>
                    <Button as="input" type="submit" variant="outline-success" value="Donate" />{' '}
                    
                </Card.Body>

            </Card>
            </div>
        </>
    );
}

export default Project;
