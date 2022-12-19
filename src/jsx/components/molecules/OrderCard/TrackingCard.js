import React from "react";

export const getShippingIcon = (shippingMode) => {
  switch (shippingMode) {
    case "Air": {
      return "fa-plane";
    }
    case "Ship": {
      return "fa-ship";
    }
    case "Land": {
      return "fa-truck";
    }
    default: {
      return;
    }
  }
};

const TrackingCard = ({
  shipmentAgentLogo,
  shipmentMasterTrackingID,
  shippingMode,
}) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center project-image mb-3">
          <img src={shipmentAgentLogo} alt="" />
          <div>
            <small className="d-block fs-16 font-w700">Tracking ID</small>
            <span className="d-block fs-12 font-w500">
              {shipmentMasterTrackingID}
            </span>
          </div>
        </div>
        <div className="circle-icon">
          <span className="ms-0">
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
    </>
  );
};

export default TrackingCard;