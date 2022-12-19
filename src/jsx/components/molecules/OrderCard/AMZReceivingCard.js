import React from "react";

const AMZReceivingCard = ({ destinationLogo, destinationShippingID }) => {
  return (
    <>
      <div className="d-flex align-items-center project-image mb-3">
        <img src={destinationLogo} alt="" />
        <div>
          <small className="d-block fs-16 font-w700">Shipping ID</small>
          <span className="d-block fs-12 font-w500">
            {destinationShippingID}
          </span>
        </div>
      </div>
      <span className="d-block fs-16 text-black font-w600">Receiving</span>
      <div className="progress mb-2">
        <div
          className="progress-bar progress-animated"
          style={{ width: "75%" }}
        ></div>
      </div>
      <span className="d-block fs-12 font-w500">
        Delivered to IND9,1151 S GRAHAM RD,GREENWOOD,IN,46143-7830,US
      </span>
    </>
  );
};

export default AMZReceivingCard;
