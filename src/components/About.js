import React from "react";
import Links from "./Links";

function About(props) {
  const hasBio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {hasBio ? <p>{hasBio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links/>
    </div>
    )
}


export default About;
