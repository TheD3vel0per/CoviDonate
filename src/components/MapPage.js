import React, { Component } from "react";
import { render } from "react-dom";
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardDeck,
  CardGroup,
  Container
} from 'react-bootstrap';

const API_KEY = 'AIzaSyAixXVA1zMyB8fb4O_PY5oZQw3N_ONAetQ'
// u big P bro ;P
// I know im big P boi

class MapPage extends React.Component {

  state = {
    coords: {
      longitude: 0,
      latitude: 0,
    },
    location: {
      country: "",
      postal_code: "",
      locality: "",
      sublocality: ""
    },
    projects: []
  };

  loadRecommended = (tags) => {
    console.log('load recommended');
    fetch('/api/projects/recommended', {
      method: 'POST',
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
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      this.setState({
        coords: position.coords
      });

      const loc = {  // Temp Variable
        country: "",
        postal_code: "",
        locality: "",
        sublocality: ""
      };

      // Get address from latitude & longitude.
      Geocode.fromLatLng(`${this.state.coords.latitude}`, `${this.state.coords.longitude}`, API_KEY)
        .then((response) => {
          const address = response.results[0].formatted_address;
          console.log(address);

          for (let i = 0; i < response.results[0].address_components.length; ++i) {
            for (let j = 0; j < response.results[0].address_components[i].types.length; ++j) {
              if (response.results[0].address_components[i].types[j] == "country")
                loc.country = response.results[0].address_components[i].long_name;
              else if (response.results[0].address_components[i].types[j] == "postal_code")
                loc.postal_code = response.results[0].address_components[i].long_name;
              else if (response.results[0].address_components[i].types[j] == "locality")
                loc.locality = response.results[0].address_components[i].long_name;
              else if (response.results[0].address_components[i].types[j] == "sublocality")
                loc.sublocality = response.results[0].address_components[i].long_name;
            }
          }

          this.setState({
            coords: position.coords,
            location: loc
          });
          this.loadRecommended([loc.locality]);
        }).catch(error => {
          console.error(error);
        });


    });




  }

  // set response language. Defaults to english.
  render() {
    return (
      <>
        <div onLoad={this.load()}>
          <h4>Using geolocation JavaScript API in React, and Reverse Geocoding in Google Cloud</h4>
          <p>Longitude: {this.state.coords.longitude}</p>
          <p>Latitude:  {this.state.coords.latitude} </p>
          <p>Country:   {this.state.location.country} </p>
          <p>Locality:  {this.state.location.locality} </p>
          <p>See projects in your area below!</p>
        </div>
        <div onLoad={this.load()}>
          <Container fluid={true} >
            <div className="row">
              {this.state.projects.map(obj => {
                return (
                  <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-2">
                    <Card className="border-info">
                      <Card.Img variant="top" src={obj.image} alt="Generic placeholder in case pic fails to load" />
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

export default MapPage;
