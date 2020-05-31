import React from 'react';

function CityPage() {
    var geo = geoip.lookup(ip);

    console.log("The IP is %s", geoip.pretty(ip));

    return()

}

export default CityPage;