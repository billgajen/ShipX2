import React from "react";
import amazonLogo from "./../../../../../images/freight/amazon.png";

const AmazonShippingCard = ({
  shippingId,
  receivedProgress,
  orderUnits,
  receivedUnits,
}) => {
  return (
    <>
      <div className="amazon_tracking mb-4">
        <div className="mb-3">
          <div className="d-flex align-items-center project-image mb-3">
            <img src={amazonLogo} alt="" />
            <div>
              <small className="d-block fs-16 font-w700">Shipping ID</small>
              <span className="d-block fs-12 font-w500">{shippingId}</span>
            </div>
          </div>
          <span className="d-block fs-16 text-black font-w600">Receiving</span>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-animated"
              style={{ width: `${receivedProgress}%` }}
            ></div>
          </div>
          <span className="d-block fs-12 font-w500">
            IND9, 1151 S GRAHAM RD, GREENWOOD, IN, 46143-7830, US
          </span>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <h6 className="mb-0">Units expected</h6>
            <div className="">
              <span className="fs-18 font-w600 d-block text-success">
                {orderUnits}
              </span>
            </div>
          </div>
          <div className="col-xl-6">
            <h6 className="mb-0">Units received</h6>
            <div className="">
              <span className="fs-18 font-w400 d-block text-danger">
                {receivedUnits}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer text-center border-0 mt-0">
        <button type="button" class="me-2 btn btn-primary btn-rounded">
          <span class="btn-icon-start text-primary">
            <i className="fab fa-amazon"></i>
          </span>
          Shipping ID
        </button>
      </div>
    </>
  );
};

export default AmazonShippingCard;
