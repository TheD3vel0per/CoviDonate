import React, { Component } from "react";
import { render } from "react-dom";
import Geocode from "react-geocode";

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
    }
  };

  load = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

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
        }).catch(error => {
          console.error(error);
        });


    });




  }

  // set response language. Defaults to english.
  render() {
    return (
      <div onLoad={this.load}>
        <h4>Using geolocation JavaScript API in React</h4>
        <p>Longitude: {this.state.coords.longitude}</p>
        <p>Latitude:  {this.state.coords.latitude} </p>
        <p>Country:   {this.state.location.country} </p>
        <p>loaclity:  {this.state.location.locality} </p>
      </div>
    );
  }
}

export default MapPage;
