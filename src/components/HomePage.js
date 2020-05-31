import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardDeck,
    CardGroup,
    Container
} from 'react-bootstrap';

import sampleData from "../res/projects.json";

function HomePage() {

    const [projects, setProjects] = React.useState(sampleData);

    const load = () => {
        console.log('homepage load!');
        fetch('/api/projects')
            .then(async result => {
                const data = await result.json();
                setProjects(data);
            })
            .catch(error => {});
    };

    const sort_cards = (event) =>
    {
        const algorithm = event.target.value;  // The 'value' property of the selected option
        switch (algorithm)
        {
            case "prog-rel":
                setProjects(projects.sort((p) => p.finance.donatedSoFar));
                break;
            case "prog-abs":
                setProjects(projects.sort((p) => p.finance.donatedSoFar / p.finance.donationGoals));
                break;
            case "fnd-goal":
                setProjects(projects.sort((p) => p.finance.donationGoals));
                break;
            default:
                console.log("Selected invalid algorithm!!")
                break;
        }

        // console.log(projects);  // Validate that the projects variable is sorting
    }

    return (
        <>
            <div onLoad={load}>
                <Container fluid={true} >
                    <div>
                        <select id="sort_alg_selecter" style={{marginRight: "2em"}} onChange={sort_cards}>
                            <option selected disabled>Select Sorting Method</option>
                            <option disabled>Popularity (Traffic)</option>
                            <option value="prog-rel"> Progress (Relative)</option>
                            <option value="prog-abs"> Progress (Absolute)</option>
                            <option value="fnd-goal"> Fundraising Goal</option>
                            <option disabled>Project Age</option>
                            <option disabled>Remaining Project Time</option>
                        </select>
                    </div>
                    <hr/>
                    <div className="row">
                        {projects.map(obj => {
                            return (
                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-2">
                                    <Card className="border-info">
                                        <Card.Img variant="top" src="/images/people-in-water.jpg" alt="Generic placeholder in case pic fails to load" />
                                        <Card.Body>
                                            <Card.Title>{obj.title}</Card.Title>
                                            <Card.Text>
                                                {obj.shortDescription}
                                            </Card.Text>
                                            {/* <!--  click={() => navToPage(obj._id)} --> */}
                                            {/* <Button variant="primary" to={'/projects/'+obj._id}>Go somewhere</Button> */}
                                            <Link to={'/project/' + obj._id} className="button">Go somewhere</Link>
                                        </Card.Body>
                                    </Card>
                                </div>

                            );

                        })}

                    </div>

                </Container>
            </div>
        </>
    );
}

export default HomePage;