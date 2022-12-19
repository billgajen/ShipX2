import React from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../../../../images/freight/amazon.png";

const AMZCreateLabelCard = () => {
  return (
    <>
      <div className="d-flex align-items-center project-image mb-4">
        <img src={amazonLogo} alt="Amazon logo" />
        <div>
          <small className="d-block fs-16 font-w700">Send to Amazon</small>
        </div>
      </div>
      <div className="invite mb-0">
        <Link
          to={"#"}
          className="btn btn-xs btn-danger light btn-rounded me-2 mb-0"
        >
          <i className="fab fa-amazon me-3 scale3"></i>Create Label
        </Link>
      </div>
    </>
  );
};

export default AMZCreateLabelCard;
