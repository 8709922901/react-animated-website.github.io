import React from "react";
import web from "../images/About.png"
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
