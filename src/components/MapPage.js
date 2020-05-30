import React from "react";
import axios from 'axios'

function MapPage(props) {

  const [country, countrySet] = React.useState('');
  const [province, provinceSet] = React.useState('');

  // const getGeoInfo = () => {
  //   axios.get('https://ipapi.co/json/').then((response) => {
  //     let data = response.data;
  //     stateSet({
  //       countryName: data.country_name,
  //       countryCode: data.country_calling_code
  //     });
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // };

  //countryName: data.country_name,
  //countryCode: data.country_calling_code

  const getGeoInfo = () => {

    fetch('https://ipapi.co/json')
      .then((result) => {
        console.log('endpoint data received')
        return result.json();
      }).then((data) => {
        countrySet(data['country']);
        provinceSet(data['region']);
      }).catch(console.log);
  };

  return (
    <div onLoad={getGeoInfo()}>
      <p>Country: {country}</p>
      <p>Province: {province}</p>
    </div>
  );
}


export default MapPage;