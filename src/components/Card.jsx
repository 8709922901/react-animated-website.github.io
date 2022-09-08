// import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../images/laptop.png";

const card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 my-4 d-flex align-items-stretch mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} style={{ height:200, borderBottom:'1px solid black'}} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
