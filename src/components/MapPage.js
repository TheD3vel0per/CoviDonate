import React, { Component } from "react";
import { render } from "react-dom";
import Geocode from "react-geocode";

const API_KEY = 'AIzaSyAixXVA1zMyB8fb4O_PY5oZQw3N_ONAetQ'
// u big P bro ;P
// I know im big P boi

function MapPage() {

  const [coords, coordsSet] = React.useState({
    longitude: 0,
    latitude: 0,
  });

  const load = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      coordsSet(position.coords);

      // Get address from latitude & longitude.
      Geocode.fromLatLng(`${coords.latitude}`, `${coords.longitude}`, API_KEY)
        .then(response => {
          const address = response.results[0].formatted_address;
          console.log(address);
        }).catch(error => {
          console.error(error);
        });

    });




  };

  // set response language. Defaults to english.


  return (
    <div onLoad={load()}>
      <h4>Using geolocation JavaScript API in React</h4>
      <p>Longitude: {coords.longitude}</p>
      <p>Latitude:  {coords.latitude} </p>
    </div>
  );
}


export default MapPage;