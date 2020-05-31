import React, { Component } from "react";
import { render } from "react-dom";


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
      
    });
  };

  return (
    <div onLoad={load()}>
      <h4>Using geolocation JavaScript API in React</h4>
      <p>Longitude: {coords.longitude}</p>
      <p>Latitude: {coords.latitude} </p>
    </div>
  );
}


export default MapPage;