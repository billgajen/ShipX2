import React from "react";
import user from "../../../images/pic1.jpg";

export const initialFormState = {
  productName: "",
  productSKU: "",
  productThumb: "",
  productASIN: "",
  productWidth: "",
  productHeight: "",
  productLength: "",
  productWeight: "",
  productSize: "",
  productManufacturingCost: "",
  shippingModeAirCost: "",
  shippingModeSeaCost: "",
  shippingModeLandCost: "",
  productManufacturingDays: "",
  fastestShippingDays: "",
  shippingHandlingDays: "",
  myWarehouseStock: "",
  amazonIntegrated: false,
};

const AddProductForm = ({
  onChangeFile,
  onClickFile,
  file,
  onProductNameChange,
  onProductASINChange,
  onClickSubmit,
  onClickCancel,
}) => {
  return (
    <div className="modal-body">
      <i className="flaticon-cancel-12 close"></i>
      <div className="add-contact-box">
        <div className="add-contact-content">
          <div className="image-placeholder">
            <div className="avatar-edit">
              <input
                type="file"
                onChange={onChangeFile}
                id="imageUpload"
                onClick={onClickFile}
              />
              <label htmlFor="imageUpload" name=""></label>
            </div>
            <div className="avatar-preview">
              <div id="imagePreview">
                <img
                  id="saveImageFile"
                  src={file ? URL.createObjectURL(file) : user}
                  alt={file ? file.name : null}
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Name</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="productName"
                required="required"
                onChange={onProductNameChange}
                placeholder="name"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">SKU</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="productSKU"
                required="required"
                onChange={onProductASINChange}
                placeholder="SKU"
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

export default AddProductForm;
