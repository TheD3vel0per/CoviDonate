import React from 'react';
import {
    Button,
    Card,
    CardGroup
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

    const variant = [
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
    ]
    var k = 0;
    

    return (

        <div>
            <CardGroup>

                {sampleData.map(obj => (
                    <Card style={{ width: '18rem' }}
                        bg={variant[genRand()].toLowerCase()}
                        text7={variant[genRand()].toLowerCase() === 'light' ? 'dark' : 'white'}>
                        <Card.Img variant="top" src="/images/green.jpg" alt="Generic placeholder in case pic fails to load" />
                        <Card.Body>
                            <Card.Title>{obj.title}</Card.Title>
                            <Card.Text>
                                {obj.shortDescription}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>))}
            </CardGroup>
        </div>
    );
}

export default Home;