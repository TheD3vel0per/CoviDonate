import React from 'react';
import {
    Button,
    Card,
    CardDeck,
    CardGroup
} from 'react-bootstrap';
import './styles/Home.css';


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
    var k = -1;

    let rows = [];

    return (
        

        <div>
            <CardGroup>

                {sampleData.map(obj => {

                    k = k + 1;

                    if (k == variant.length) {
                        k = 0;
                    }


                    return (

                        <div class="card-columns">
                        <Card border="secondary" style={{ width: '18rem' }}
                            <Card.Img variant="top" src="/images/green.jpg" alt="Generic placeholder in case pic fails to load" />
                            <Card.Body>
                                <Card.Title>{obj.title}</Card.Title>
                                <Card.Text>
                                    {obj.shortDescription}
                                </Card.Text>
                                <Button variant={variant[k].toLowerCase()=== 'dark' ? 'light' : 'dark'}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        
                    );

                })}
               

            </CardGroup>
            
        </div>
    );
}

export default Home;