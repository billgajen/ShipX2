import React from "react";

export const initialWarehouseFormState = {
  warehouseName: "",
  firstLine: "",
  city: "",
  county: "",
  zipCode: "",
  country: "",
};


const AddWarehouseForm = ({
  onWarehouseNameChange,
  onFirstLineChange,
  onCityChange,
  onCountyChange,
  onZipCodeChange,
  onCountryChange,
  onClickSubmit,
  onClickCancel,
}) => {
  return (
    <div className="modal-body">
      <i className="flaticon-cancel-12 close"></i>
      <div className="add-contact-box">
        <div className="add-contact-content">
          <div className="form-group mb-3">
            <label className="text-black font-w500">Warehouse name</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="warehouseName"
                required="required"
                onChange={onWarehouseNameChange}
                placeholder="Warehouse name"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">
              First line of address
            </label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="firstLine"
                required="required"
                onChange={onFirstLineChange}
                placeholder="First line of address"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">City</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="city"
                required="required"
                onChange={onCityChange}
                placeholder="City"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">County</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="county"
                required="required"
                onChange={onCountyChange}
                placeholder="County"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Zip code</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="zipCode"
                required="required"
                onChange={onZipCodeChange}
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Country</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="country"
                required="required"
                onChange={onCountryChange}
                placeholder="Country"
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
          Add
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

export default AddWarehouseForm;
