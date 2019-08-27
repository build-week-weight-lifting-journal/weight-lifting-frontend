import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PulseSpinner } from "react-spinners-kit";
import { getBodyCategoryData } from "../actions/index";

const BodyCategoryList = () => {
  return (
    <div>
      <div className="bodyNav">
        <p>Cancel</p>
        <p>Workout Categories</p>{" "}
        <Link to={{ pathname: "/", state: {} }}>Save</Link>
      </div>
    </div>
  );
};

export default BodyCategoryList;
