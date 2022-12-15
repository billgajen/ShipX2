import React from "react";
import { Link } from "react-router-dom";

const AddOrderForm = ({
  onChangeProduct,
  onClickNewProduct,
  onChangeOrderUnits,
  onChangeDestination,
  productOptions,
  onSubmitForm,
  onCloaseModal,
}) => {
  return (
    <form>
      <div className="modal-body">
        <i className="flaticon-cancel-12 close"></i>
        <div className="add-contact-box">
          <div className="add-contact-content">
            <div className="form-group mb-3">
              <div className="product-label-holder">
                <label className="text-black font-w500">Product</label>
                <Link to={"#"} onClick={onClickNewProduct}>Add New Product</Link>
              </div>
              <select
                defaultValue={"option"}
                className="form-control form-control-md"
                name="productName"
                onChange={onChangeProduct}
              >
                <option value="select">Select a product</option>
                {productOptions &&
                  productOptions.map((option) => (
                    <option>{`${option.productName} (${option.productSKU})`}</option>
                  ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label className="text-black font-w500">Number of Units</label>
              <div className="contact-name">
                <input
                  type="numeber"
                  className="form-control"
                  autoComplete="off"
                  name="orderUnits"
                  required="required"
                  onChange={onChangeOrderUnits}
                  placeholder="units"
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="text-black font-w500">Destination</label>
              <div className="contact-name">
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  name="destination"
                  required="required"
                  onChange={onChangeDestination}
                  placeholder="destination"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onSubmitForm}
        >
          Add
        </button>
        <button
          type="button"
          onClick={onCloaseModal}
          className="btn btn-danger"
        >
          {" "}
          <i className="flaticon-delete-1"></i> Discard
        </button>
      </div>
    </form>
  );
};

export default AddOrderForm;