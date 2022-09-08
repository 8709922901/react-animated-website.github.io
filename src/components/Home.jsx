import React from "react";
import web from "../images/rocketman.png"
// import { NavLink } from "react-router-dom";
import Common from "./Common";


const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business with"
        imgsrc={web}
        visit="/services"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
