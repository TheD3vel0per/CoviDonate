import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'

import {
    FacebookIcon,
    TwitterIcon
  } from "react-share";


function Project() {

    const { id } = useParams();

    // Define a project and a Set project using constructor, React.useState returns an array
    const [project, projectSet] = React.useState({
        "id": "100",
        "title": "COVID Masks",
        "shortDescription": "Project to fund 3D printing of masks",
        "longDescription": " Every since the dawn of time, man has worn masks to keep safe from rude people who cough everywhere and protest lockdown. In our project.... GIVE US MONEY!!!!!  Congue eu consequat ac felis donec et odio. Ac auctor augue mauris augue neque gravida in. Consequat semper viverra nam libero justo laoreet. Proin fermentum leo vel orci. Mattis rhoncus urna neque viverra justo nec ultrices. Nibh tellus molestie nunc non blandit massa enim. Libero nunc consequat interdum varius sit amet. Quam adipiscing vitae proin sagittis nisl rhoncus. Euismod lacinia at quis risus sed vulputate. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Sed id semper risus in. Eget dolor morbi non arcu risus quis varius. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
        "image": "",
        "companyName": "Masks R Us",
        "companyUrl": "https://loremipsum.io/",
        "finance": {
            "donatedSoFar": "90",
            "donationGoals": "100"
        },
        "tags": ["keywords"]
    });

    // percent to fill the donation progress bar 
    var percent = 100 * project['finance']['donatedSoFar'] / project['finance']['donationGoals'];

    const load = () => {
        // API pulls the projectto display
        fetch(`/api/project/${id}`)
            .then(async (result) => {
                const data = await result.json();
                projectSet(data);
            })
            .catch(error => {
                projectSet({
                    "id": "100",
                    "title": "COVID Masks",
                    "shortDescription": "Project to fund 3D printing of masks",
                    "longDescription": " Every since the dawn of time, man has worn masks to keep safe from rude people who cough everywhere and protest lockdown. In our project.... GIVE US MONEY!!!!!  Congue eu consequat ac felis donec et odio. Ac auctor augue mauris augue neque gravida in. Consequat semper viverra nam libero justo laoreet. Proin fermentum leo vel orci. Mattis rhoncus urna neque viverra justo nec ultrices. Nibh tellus molestie nunc non blandit massa enim. Libero nunc consequat interdum varius sit amet. Quam adipiscing vitae proin sagittis nisl rhoncus. Euismod lacinia at quis risus sed vulputate. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Sed id semper risus in. Eget dolor morbi non arcu risus quis varius. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
                    "image": "",
                    "companyName": "Masks R Us",
                    "companyUrl": "https://loremipsum.io/",
                    "finance": {
                        "donatedSoFar": "10",
                        "donationGoals": "100"
                    },
                    "tags": ["keywords"]
                });
            });
    };

    const percentage = 0;
    

    // render the following everytime the app is launched
    return (
        <>

            <div className="text-center p-5" id="wrapper" onLoad={load}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/images/people-in-water.jpg" alt="Generic placeholder in case pic fails to load" style={{ maxHeight: '500px', objectFit: 'cover' }} />

                    <Card.Body>

                        <Card.Title id="title" style={{
                            textShadow: '0px 1px 3px #454545',
                            textShadow: '0px 3px 7px #454545',
                            textShadow: '0px 5px 10px #e0e0e0',
                            fontSize: '3em'
                        }} >{project.title} </Card.Title>

                        <Card.Subtitle style={{fontSize: '1.2em',
                                                textShadow: '0px 1px 3px #454545',
                                                textShadow: '0px 3px 7px #454545',
                                                textShadow: '0px 5px 10px #e0e0e0',
                                                marginBottom: 45}}>
                            {project.shortDescription}
                        </Card.Subtitle>

                        <div className="container">
                        <ProgressBar style = {{marginBottom: 25}}>
                            <ProgressBar animated striped variant="success" now={percent} key={1} />
                            
                        </ProgressBar>
                        <Button href="#" className="m-1" size="lg" variant="outline-success" style = {{marginBottom: 50}}>Donate</Button>
                        </div>

                        <p></p>
                        <p></p>
                        <Card.Text>
                            {project.longDescription}
                        </Card.Text>
                        
                        <p ></p>
                        <Button href={project.companyUrl} className="m-3" variant="outline-dark"> Company Website </Button>
                        {/* NOTE TO NOAH, UNCOMMENT AND TEST THE CODE BELOW*/}
                        {/*  <FacebookIcon url={window.location.href} size={32}/> */}
                        <TwitterIcon size={32}/>
                    
                    <div></div>
                    
                    </Card.Body>

                </Card>

            </div>

        </>
    );
}

export default Project;
