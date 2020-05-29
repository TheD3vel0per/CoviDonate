import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image'

function Project() {

    const project = {
        "id": "100",
        "title": "COVID Masks",
        "shortDescription": "Project to fund 3D printing of masks",
        "longDescription": " Every since the dawn of time, man has worn masks to keep safe from rude people who cough everywhere and protest lockdown. In our project.... GIVE US MONEY!!!!!  Congue eu consequat ac felis donec et odio. Ac auctor augue mauris augue neque gravida in. Consequat semper viverra nam libero justo laoreet. Proin fermentum leo vel orci. Mattis rhoncus urna neque viverra justo nec ultrices. Nibh tellus molestie nunc non blandit massa enim. Libero nunc consequat interdum varius sit amet. Quam adipiscing vitae proin sagittis nisl rhoncus. Euismod lacinia at quis risus sed vulputate. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Sed id semper risus in. Eget dolor morbi non arcu risus quis varius. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
        "image": "",
        "companyName": "Masks R Us",
        "companyUrl": "",
        "finance": {
            "donatedSoFar": "0",
            "donationGoals": "100000"
        },
        "tags": ["keywords"]
    };

    //const genProgress = () => {100*(project.finance[donatedSoFar]/project.finance[donationGoals])};

    return (
        <>

            <div className="text-center p-5" id="wrapper">
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="/images/green.jpg" alt="Generic placeholder in case pic fails to load" style={{maxHeight: '500px', objectFit: 'cover'}}/>

                <Card.Body>

                    <Card.Title style={{ fontSize: '2em' }}>{project.title}</Card.Title>

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
                    <Button className="m-1" as="input" type="submit" variant="outline-success" value="Donate" />{' '}
                    <p ></p>
                    <Button className="m-3" variant="outline-dark"> Company Website </Button>
                    <Button className="m-3" variant="outline-dark"> Share </Button>
                    <Button className="m-3" variant="outline-dark"> Subscribe </Button> 
                </Card.Body>

            </Card>
            </div>
        </>
    );
}

export default Project;
