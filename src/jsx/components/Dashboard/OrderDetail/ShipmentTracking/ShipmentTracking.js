import React from "react";
import { getShippingIcon } from "../../../molecules/OrderCard/TrackingCard";
import freight1 from "./../../../../../images/freight/dhl.png";

const ShipmentTracking = ({ trackingId, shippingMode }) => {
  return (
    <div>
      <div className="freight_tracking">
        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
            <div className="d-flex align-items-center project-image">
              <img src={freight1} alt="" />
              <div>
                <small className="d-block fs-16 font-w700">Tracking ID</small>
                <span className="d-block fs-12 font-w500">{trackingId}</span>
              </div>
            </div>
            <div className="circle-icon">
              <span className="ms-2 me-0">
                <i class={`fas ${getShippingIcon(shippingMode)}`}></i>
              </span>
            </div>
          </div>
          <span className="d-block fs-16 text-black font-w600">In Transit</span>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-animated bg-success"
              style={{ width: "50%" }}
            ></div>
          </div>
          <span className="d-block fs-12 font-w500">
            Shipment has departed from a DHL facility CINCINNATI HUB - USA
          </span>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <h6 className="mb-0">From:</h6>
            <div className="fs-12 font-w400">
              <span className="d-block">State Name</span>
              <span className="d-block">CN</span>
            </div>
          </div>
          <div className="col-xl-6">
            <h6 className="mb-0">To:</h6>
            <div className="fs-12 font-w400">
              <span className="d-block">IN 46143-7830</span>
              <span className="d-block">US (IND9)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer text-center border-0 mt-0">
        <button type="button" class="me-2 btn btn-primary btn-rounded">
          <span class="btn-icon-start text-primary">
            <i className="fas fa-plus"></i>
          </span>
          Tracking details
        </button>
      </div>
    </div>
  );
};

export default ShipmentTracking;
