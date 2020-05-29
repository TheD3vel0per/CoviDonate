import React from 'react';
import {
    Button,
    Card
} from 'react-bootstrap';

function Home() {

    const sampleData = [
        {
            "id": "1",
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
        }
    ]

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{sampleData[0].title}</Card.Title>
                <Card.Text>
                    {sampleData[0].shortDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>);

}

export default Home;