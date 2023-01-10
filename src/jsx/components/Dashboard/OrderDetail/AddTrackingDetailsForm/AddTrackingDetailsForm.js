import React from "react";

const AddTrackingDetailsForm = ({
  onChangeService,
  onTotalCostChange,
  serviceOptions,
  onClickSubmit,
  onClickCancel,
}) => {
  serviceOptions = ["DHL", "UPS", "FEDEX", "USPS"]
  return (
    <div className="modal-body">
      <i className="flaticon-cancel-12 close"></i>
      <div className="add-contact-box">
        <div className="add-contact-content">
          <div className="form-group mb-3">
            <label className="text-black font-w500">Shipment services</label>
            <select
              defaultValue={"option"}
              className="form-control form-control-md"
              name="productName"
              onChange={onChangeService}
            >
              <option value="select">Select a service</option>
              {serviceOptions &&
                serviceOptions.map((option) => (
                  <option>{option}</option>
                ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Tracking number</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="trackingNumber"
                required="required"
                onChange={onTotalCostChange}
                placeholder="Total cost"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onClickSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onClickCancel}
          className="btn btn-danger"
        >
          {" "}
          <i className="flaticon-delete-1"></i> Discard
        </button>
      </div>
    </div>
  );
};

export default AddTrackingDetailsForm;
