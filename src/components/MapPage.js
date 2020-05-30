import React from "react";
import axios from 'axios'

function MapPage(props) {

  const [state, stateSet] = React.useState('');

  const getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      stateSet({
        countryName: {this.state.countryName},
        countryCode: data.country_calling_code
      });
    }).catch((error) => {
      console.log(error);
    });
  };

  const onLoad = () => {
    this.getGeoInfo();
  };

  return (
    <div onLoad={onLoad}>
      <p>Country Name: {state.countryName}</p>
      <p>Country Code: {state.countryCode}</p>
    </div>
  );
}


export default MapPage;