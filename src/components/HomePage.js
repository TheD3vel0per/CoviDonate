import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardDeck,
    CardGroup,
    Container
} from 'react-bootstrap';

function HomePage() {

    const sampleData = [
        {
            "_id": "5ed177e4859e1259c9ebdb04",
            "title": "A",
            "shortDescription": "A_Short_Description",
            "longDescription": "A_long_Description",
            "image": "",
            "companyName": "A_Company_Name",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        },
        {
            "id": "2",
            "title": "B",
            "shortDescription": "B_Short_Description",
            "longDescription": "B_Long_Descripton",
            "image": "",
            "companyName": "",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        },
        {
            "id": "3",
            "title": "C",
            "shortDescription": "C_Short_Description",
            "longDescription": "C_long_Description",
            "image": "",
            "companyName": "C_Company_Name",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        },
        {
            "id": "4",
            "title": "D",
            "shortDescription": "D_Short_Description",
            "longDescription": "D_long_Description",
            "image": "",
            "companyName": "D_Company_Name",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        },
        {
            "id": "5",
            "title": "E",
            "shortDescription": "E_Short_Description",
            "longDescription": "E_long_Description",
            "image": "",
            "companyName": "E_Company_Name",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        },
        {
            "id": "6",
            "title": "F",
            "shortDescription": "F_Short_Description",
            "longDescription": "F_long_Description",
            "image": "",
            "companyName": "F_Company_Name",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        },
        {
            "id": "7",
            "title": "F",
            "shortDescription": "F_Short_Description",
            "longDescription": "F_long_Description",
            "image": "",
            "companyName": "F_Company_Name",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        },
        {
            "id": "8",
            "title": "F",
            "shortDescription": "F_Short_Description",
            "longDescription": "F_long_Description",
            "image": "",
            "companyName": "F_Company_Name",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        },
        {
            "id": "9",
            "title": "F",
            "shortDescription": "F_Short_Description",
            "longDescription": "F_long_Description",
            "image": "",
            "companyName": "F_Company_Name",
            "companyUrl": "",
            "finance": {
                "donatedSoFar": "",
                "donationGoals": ""
            },
            "tags": ["keywords"]
        }
    ];

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
                break;
            case "prog-abs":
                break;
            case "fnd-goal":
                break;
            default:
                console.log("Selected invalid algorithm!!")
                break;
        }
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