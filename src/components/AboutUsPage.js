import React from "react";
import devs from "../res/devs.json"

const AboutUsPage = () => {
  console.log(devs);
console.log(process.env.PUBLIC_URL);
  return (
    devs.map(dev =>
      <table>
        <tr>  
          <td rowspan="3">
            <img src="../res/headshots/thomas.jpg" alt=""/>
          </td>
          <td>
            <h3 style="text-align: left">{dev.name}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h5 style="text-align: left">{dev.role}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <p style="text-align: left"> {dev.desc}</p>
          </td>
        </tr>
        <tr><hr/></tr>
      </table>
    )
  );
}

export default AboutUsPage;