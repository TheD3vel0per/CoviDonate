import React from 'react';




const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient;
// Typescript:
// import { WebServiceClient } from '@maxmind/geoip2-node';
 
const client = new WebServiceClient('1234', 'AGjQdO7dISjQwz4t');
 
client.insights('142.1.1.1').then(response => {
  console.log(response.country.isoCode); // 'CA'
  console.log(response.postal.code); // 'M5S'
  console.log(response.traits.userType); // 'school'
});




function CityPage() {
    var geo = geoip.lookup(ip);

    console.log("The IP is %s", geoip.pretty(ip));

    return;

}

export default CityPage;