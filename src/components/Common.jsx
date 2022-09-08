import React from "react";
// import web from "../images/rocketman.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div>
                    <h1>
                      {props.name}
                      <strong className="brand-name"> Faizan Azad </strong>
                    </h1>
                    <h2 className="my-3">
                      We are the team of talented developer making website
                    </h2>
                    <div className="mt-3">
                      <NavLink className="btn-get-started" to={props.visit}>
                        {props.btnName}
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <div>
                    <img
                      src={props.imgsrc}
                      className="w-100 animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;