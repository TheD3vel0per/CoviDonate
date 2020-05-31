import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import {
    FacebookIcon,
    TwitterIcon
} from "react-share";

import sampleProjects from "../res/projects.json";
const PROJECT_SCHEME = {
    "_id": "",
    "title": "",
    "shortDescription": "",
    "longDescription": "",
    "image": "",
    "companyName": "",
    "companyUrl": "",
    "finance": {
        "donatedSoFar": "",
        "donationGoals": ""
    },
    "tags": []
};

class ProjectPage extends React.Component {
    

    state = {
        index: 0,
        recommended: [],
        project: PROJECT_SCHEME
    }


    constructor(props) {
        super(props);
        console.log(props)
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({ index: selectedIndex });
    };

    loadProject = () => {
        const id = this.props.match.params.id;

        // API pulls the projectto display
        fetch(`/api/project/${id}`)
            .then(async (result) => {
                const data = await result.json();
                this.setState({
                    project: data
                });
                this.loadRecommended(data['tags']);
            })
            .catch((err)=>{
                this.setState({project: sampleProjects.find((e) => e._id === id)});
            });
    };

    loadRecommended = (tags) => {
        console.log('load recommended')
        fetch('/api/projects/recommended', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tags: tags
            })
        }).then(async (result) => {
            const data = await result.json();
            this.setState({
                recommended: data
            });
        }).catch(console.log);
    }

    load = () => {
        this.loadProject();
    }

    render = () => {
        const percent = 100 * this.state.project.finance.donatedSoFar / this.state.project.finance.donationGoals;
        return (
            <>

                <div className="text-center p-5" id="wrapper" onLoad={this.load}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="/images/people-in-water.jpg" alt="Generic placeholder in case pic fails to load" style={{ maxHeight: '500px', objectFit: 'cover' }} />

                        <Card.Body>

                            <Card.Title id="title" style={{
                                textShadow: '0px 1px 3px #454545',
                                textShadow: '0px 3px 7px #454545',
                                textShadow: '0px 5px 10px #e0e0e0',
                                fontSize: '3em'
                            }} >{this.state.project.title} </Card.Title>

                            <Card.Subtitle style={{
                                fontSize: '1.2em',
                                textShadow: '0px 1px 3px #454545',
                                textShadow: '0px 3px 7px #454545',
                                textShadow: '0px 5px 10px #e0e0e0',
                                marginBottom: 45
                            }}>
                                {this.state.project.shortDescription}
                            </Card.Subtitle>

                            <div className="container">
                                <ProgressBar style={{ marginBottom: 25 }}>
                                    <ProgressBar animated striped variant="success" now={percent} key={1} />

                                </ProgressBar>
                                <Link to="/donate" variant="outline-success" className="button m-1" >Donate</Link>
                            </div>

                            <p></p>
                            <p></p>
                            <Card.Text>
                                {this.state.project.longDescription}
                            </Card.Text>

                            <p ></p>
                            <Button href={this.state.project.companyUrl} target="_blank" className="m-3" variant="outline-dark"> Company Website </Button>
                            {/* NOTE TO NOAH, UNCOMMENT AND TEST THE CODE BELOW*/}
                            <FacebookIcon url={window.location.href} size={32} />
                            <TwitterIcon size={32} />

                            <div></div>

                        </Card.Body>

                    </Card>

                    <Container>

                        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                            {this.state.recommended.map(pj => (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/images/people-in-water.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>{pj.title}</h3>
                                        <p>{pj.shortDescription}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                    </Container>

                </div>

            </>
        );
    }

}

export default ProjectPage;
