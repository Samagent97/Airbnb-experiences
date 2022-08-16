import React from "react";
import body from "../../assets/Group 77.png";
import './Hero.css'

function Hero() {
  return (
    <section className="miro">
      <div>
        <img src={body} alt="" className="hero--photo" />
      </div>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
