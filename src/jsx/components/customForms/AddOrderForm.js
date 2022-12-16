import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddOrderForm = ({
  onChangeProduct,
  onClickNewProduct,
  onChangeOrderUnits,
  onChangeShippingMode,
  onChangeDestination,
  productOptions,
  destinationOptions,
  onSubmitForm,
  onCloaseModal,
}) => {
  const [myWarehouseOption, setMyWarehouseOption] = useState(false);

  return (
    <form>
      <div className="modal-body">
        <i className="flaticon-cancel-12 close"></i>
        <div className="add-contact-box">
          <div className="add-contact-content">
            <div className="form-group mb-3">
              <div className="product-label-holder">
                <label className="text-black font-w500">Product</label>
                <Link to={"#"} onClick={onClickNewProduct}>
                  Add New Product
                </Link>
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
                  type="number"
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
              <div className="product-label-holder">
                <label className="text-black font-w500">Shipping Mode</label>
              </div>
              <select
                defaultValue={"option"}
                className="form-control form-control-md"
                name="shippingMode"
                onChange={onChangeShippingMode}
              >
                <option value="select">Select Shipping Mode</option>
                <option>Air</option>
                <option>Ship</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <div className="product-label-holder">
                <label className="text-black font-w500">
                  Destination option
                </label>
              </div>
              <div className="col-sm-9 radio-holder">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    value="option1"
                    onChange={() => setMyWarehouseOption(false)}
                    defaultChecked
                  />
                  <label className="form-check-label">Amazon FBA</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    value="option2"
                    onChange={() => setMyWarehouseOption(true)}
                  />
                  <label className="form-check-label">My Warehouse</label>
                </div>
              </div>
            </div>
            {myWarehouseOption && (
              <div className="form-group mb-3">
                <div className="product-label-holder">
                  <label className="text-black font-w500">Destination</label>
                </div>
                <select
                  defaultValue={"option"}
                  className="form-control form-control-md"
                  name="destination"
                  onChange={onChangeDestination}
                >
                  <option value="select">Select a destination</option>
                  {destinationOptions &&
                    destinationOptions.map((option) => (
                      <option>{option.warehouseName}</option>
                    ))}
                </select>
              </div>
            )}
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