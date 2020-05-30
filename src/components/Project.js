import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image'
import './styles/Project.css';

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
            "donatedSoFar": "0",
            "donationGoals": "100000"
        },
        "tags": ["keywords"]
    });

    // API pulls the projectto display
    // fetch(`/api/project/${id}`)
    //     .then(async (result) => {
    //         const data = await result.json();
    //         projectSet(data);
    //     })
    //     .catch(error => {
    //         projectSet({
    //             "id": "100",
    //             "title": "COVID Masks",
    //             "shortDescription": "Project to fund 3D printing of masks",
    //             "longDescription": " Every since the dawn of time, man has worn masks to keep safe from rude people who cough everywhere and protest lockdown. In our project.... GIVE US MONEY!!!!!  Congue eu consequat ac felis donec et odio. Ac auctor augue mauris augue neque gravida in. Consequat semper viverra nam libero justo laoreet. Proin fermentum leo vel orci. Mattis rhoncus urna neque viverra justo nec ultrices. Nibh tellus molestie nunc non blandit massa enim. Libero nunc consequat interdum varius sit amet. Quam adipiscing vitae proin sagittis nisl rhoncus. Euismod lacinia at quis risus sed vulputate. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Sed id semper risus in. Eget dolor morbi non arcu risus quis varius. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.",
    //             "image": "",
    //             "companyName": "Masks R Us",
    //             "companyUrl": "https://loremipsum.io/",
    //             "finance": {
    //                 "donatedSoFar": "0",
    //                 "donationGoals": "100000"
    //             },
    //             "tags": ["keywords"]
    //         });
    //     });

    // calculate the percentage for progress bar
    //const genProgress = () => {100*(project.finance[donatedSoFar]/project.finance[donationGoals])};

    // render the following everytime the app is launched
    return (
        <>

            <div className="text-center p-5" id="wrapper">
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/images/people-in-water.jpg" alt="Generic placeholder in case pic fails to load" style={{ maxHeight: '500px', objectFit: 'cover' }} />

                    <Card.Body>

                        <Card.Title id="title" style={{
                            textShadow: '0px 1px 3px #454545',
                            textShadow: '0px 3px 5px #ababab',
                            textShadow: '0px 5px 10px #e0e0e0',
                            fontSize: '3em'
                        }} >{project.title} </Card.Title>

                        <Card.Text>
                            {project.shortDescription}
                        </Card.Text>
                        <div className="container">
                            
                            <ProgressBar>
                                <ProgressBar animated striped variant="success" now={40} key={1} />
                                <ProgressBar variant="warning" now={100 - (40 / 100)} key={2} />
                            </ProgressBar>
                        </div>
                        <p></p>
                        <p></p>
                        <Card.Text>
                            {project.longDescription}
                        </Card.Text>
                        <Button href="#" className="m-1" size="lg" variant="outline-success">Donate</Button>
                        <p ></p>
                        <Button href={project.companyUrl} className="m-3" variant="outline-dark"> Company Website </Button>
                        <Button href="#" className="m-3" variant="outline-dark"> Share </Button>
                        <Button href="#" className="m-3" variant="outline-dark"> Subscribe </Button>
                    </Card.Body>

                    </Card>


            </div>
        </>
    );
}

export default Project;
