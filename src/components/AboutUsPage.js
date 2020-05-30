import React from "react";
import devs from "../res/devs.json"

const AboutUsPage = () => {
  const style = {textAlign: "left"};

  return (
    devs.map(dev =>
      <table>
        <tr>  
          <td rowspan="3">
            <img src={dev.path} alt=""/>
          </td>
          <td>
            <h3 style={style}>{dev.name}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h5 style={style}>{dev.role}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <p style={style}> {dev.desc}</p>
          </td>
        </tr>
        <tr><hr/></tr>
      </table>
    )
  );
}

export default AboutUsPage;