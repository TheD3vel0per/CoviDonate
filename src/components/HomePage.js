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

class HomePage extends React.Component {
    
    state = {
        projects: []
    };

    load = () => {
        console.log('homepage load!');
        fetch('/api/projects')
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    projects: data
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({projects: sampleData});
            });
    };

    handleButtonClick = () => {
      this.render();
    }
    
    sort_cards = (event) => {
        const algorithm = event.target.value;  // The 'value' property of the selected option
        const projects = this.state.projects.concat();  // Make a copy

        switch (algorithm)
        {
            case "prog-abs":  // The absolute difference between the goal and the currently raised funds
                projects.sort((p1, p2) =>   // i.e. "The amount to go" - smallest first.
                    (p1.finance.donationGoals - p1.finance.donatedSoFar) - (p2.finance.donationGoals - p2.finance.donatedSoFar));
                break;
            case "prog-rel":  // The percentage of the goal raised; biggest first
                projects.sort((p1, p2) => 
                    p2.finance.donatedSoFar / p2.finance.donationGoals - p1.finance.donatedSoFar / p1.finance.donationGoals);
                break;
            case "fnd-goal":  // The fundraising goal; biggest first
                projects.sort((p1, p2) => p2.finance.donationGoals - p1.finance.donationGoals);
                break;
            case "tot-fnds":  // The total funds raised thus far; biggest first
                projects.sort((p1, p2) => p2.finance.donatedSoFar - p1.finance.donatedSoFar);
            default:
                console.log("Selected invalid algorithm!!")
                break;
        }

        this.setState({projects: projects});
        console.log(projects);  // Validate that the projects variable is sorting
    }

    render() {
        return (
            <>
                <div onLoad={this.load()}>
                    <Container fluid={true} >
                        <div>
                            <select id="sort_alg_selecter" style={{marginRight: "2em"}} onChange={this.sort_cards}>
                                <option selected disabled>Select Sorting Method</option>
                                <option value="prog-rel">  Progress (% of Goal)     </option>
                                <option value="prog-abs">  Progress ($ From Goal)   </option>
                                <option value="fnd-goal">  Fundraising Goal         </option>
                                <option value="tot-fnds">  Total Funds Raised       </option>
                                <option disabled>Project Age</option>
                                <option disabled>Remaining Project Time</option>
                            </select>
                        </div>
                        <hr/>
                        <div className="row">
                            {this.state.projects.map(obj => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-2">
                                        <Card className="border-info">
                                            <Card.Img variant="top" src={obj.imag} alt="Generic placeholder in case pic fails to load" />
                                            <Card.Body>
                                                <Card.Title>{obj.title}</Card.Title>
                                                <Card.Text>
                                                    {obj.shortDescription}
                                                </Card.Text>
                                                {/* <!--  click={() => navToPage(obj._id)} --> */}
                                                {/* <Button variant="primary" to={'/projects/'+obj._id}>Go somewhere</Button> */}
                                                <Link to={'/project/' + obj._id} className="button">Project Page</Link>
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
    }

export default HomePage;