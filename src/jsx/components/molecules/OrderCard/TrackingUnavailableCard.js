import React from "react";
import { Link } from "react-router-dom";
import { getShippingIcon } from "./TrackingCard";

const TrackingUnavailable = ({ shippingMode }) => {
  return (
    <>
      <div className="d-flex align-items-center project-image mb-4">
        <div className="circle-icon">
          <span className="ms-0 me-3">
            <i className={`fas ${getShippingIcon(shippingMode)}`}></i>
          </span>
        </div>
        <div>
          <h3 className="fs-16 text-black font-w600 mb-0">Shipping Mode</h3>
          <span className="d-block fs-12 font-w500">{shippingMode}</span>
        </div>
      </div>
      <div className="invite mb-0">
        <Link
          to={"#"}
          className="btn btn-xs btn-primary light btn-rounded me-2 mb-0"
        >
          <i className="fa fa-plus me-3 scale3"></i>Tracking Details
        </Link>
      </div>
    </>
  );
};

export default TrackingUnavailable;