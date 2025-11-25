import React from "react";
import spaceVedio from "../../../assets/space.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <video src={spaceVedio} autoPlay loop muted></video>

      <div className="content">
        <h1>Travel. Galaxies.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
          impedit.
        </p>
        <div className="buttons">
          <Link to="/training">Try Now!</Link>
          <Link to="/contact">Launch</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
