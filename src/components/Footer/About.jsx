import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import logoImage from '../../imeges/logo.png';

function About() {
  return (
    <div className="container">
      <div className="AllAbout">
        <img
          src={logoImage}
          alt="Logo"
          className="ImageAbout"
        />
        <h4>WE WELCOME EVERYBODY</h4>
        <p>
          {" "}
          This is not just a strapline. We welcome everybody, regardless of
          size, ability, age, ethnicity, religion, gender, sex, or sexual
          orientation. Our gyms are friendly, supportive, and judgement-free
          spaces where everybody can come in, work out and leave feeling good
        </p>
        <h4>QUALITY, AFFORDABLE GYMS, EVERYWHERE</h4>
        <p>
          We're committed to bringing high quality, affordable gyms to everyone,
          everywhere. We do this by keeping our prices, low, making it as easy
          to leave as it is to join, opening our gyms night and day and
          providing our members with the support and inspiration they need where
          and when they need it.
        </p>

        <h4> WE'RE MORE THAN JUST A GYM</h4>
        <p>
          For many, Megalodon is a community. For some it's an escape. For
          others it's a place to smash a PB or become a better version of
          themselves. Everyone is on their own journey and we believe a
          welcoming smile and a bit of support can make someone's day!
        </p>
      </div>
    </div>
  );
}

export default About;
