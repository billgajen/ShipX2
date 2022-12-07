import React from "react";
import user from "../../../images/pic1.jpg";

const EditProductForm = ({
  onChangeFile,
  onClickFile,
  file,
  onProductNameChange,
  productName,
  onProductASINChange,
  productASIN,
  onProductSKUChange,
  productSKU,
  onProductWidthChange,
  productWidth,
  onProductHeightChange,
  productHeight,
  onProductLengthChange,
  productLength,
  onProductWeightChange,
  productWeight,
  onProductManufacturingCostChange,
  productManufacturingCost,
  onChangeShippingModeAirCost,
  productShippingModeAirCost,
  onChangeShippingModeSeaCost,
  productShippingModeSeaCost,
  onChangeShippingModeLandCost,
  productShippingModeLandCost,
  onChangeMyWarehouseStock,
  productMyWarehouseStock,
  onChangeProductManufacturingDays,
  productManufacturingDays,
  onChangeFastestShippingDays,
  productFastestShippingDays,
  onChangeShippingHandlingDays,
  productShippingHandlingDays,
}) => {
  return (
    <div className="modal-body">
      <i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
      <div className="add-contact-box edit_product_form">
        <div className="add-contact-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="image-placeholder mb-4">
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
              <div className="form-group mb-3 input-primary">
                <label className="text-black font-w500">Name</label>
                <div className="contact-name">
                  <input
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    name="productName"
                    required="required"
                    value={productName}
                    onChange={onProductNameChange}
                  />
                </div>
              </div>
              <div className="form-group mb-3 input-primary">
                <label className="text-black font-w500">SKU</label>
                <div className="contact-name">
                  <input
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    name="productSKU"
                    required="required"
                    value={productSKU}
                    onChange={onProductSKUChange}
                  />
                </div>
              </div>
              <div className="form-group mb-3 input-primary">
                <label className="text-black font-w500">ASIN</label>
                <div className="contact-name">
                  <input
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    name="productASIN"
                    value={productASIN}
                    onChange={onProductASINChange}
                  />
                </div>
              </div>
              <div class="text-white bg-primary card card--form_element">
                <div class="card-header">
                  <div class="text-white card-title h5">
                    Dimensions & Weight
                  </div>
                </div>
                <div class="mb-0 card-body">
                  <div className="row">
                    <div className="form-group col-md-4 mb-3">
                      <label className="text-white font-w500">Width</label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="productWidth"
                            value={productWidth}
                            onChange={onProductWidthChange}
                          />
                          <span class="input-group-text">cm</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-4 mb-3">
                      <label className="text-white font-w500">Height</label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="productHeight"
                            value={productHeight}
                            onChange={onProductHeightChange}
                          />
                          <span class="input-group-text">cm</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-4 mb-3">
                      <label className="text-white font-w500">Length</label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="productLength"
                            value={productLength}
                            onChange={onProductLengthChange}
                          />
                          <span class="input-group-text">cm</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-4 mb-3">
                      <label className="text-white font-w500">Weight</label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="productWeight"
                            value={productWeight}
                            onChange={onProductWeightChange}
                          />
                          <span class="input-group-text">lbs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-white bg-primary card card--form_element">
                <div class="card-header">
                  <div class="text-white card-title h5">Manufacturing</div>
                </div>
                <div class="mb-0 card-body">
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <label className="text-white font-w500">
                        Cost per unit
                      </label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <span class="input-group-text">$</span>
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="productManufacturingCost"
                            value={productManufacturingCost}
                            onChange={onProductManufacturingCostChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div class="text-white bg-primary card card--form_element">
                <div class="card-header">
                  <div class="text-white card-title h5">Shipping Cost</div>
                </div>
                <div class="mb-0 card-body">
                  <div className="row">
                    <div className="form-group col-md-4 mb-4">
                      <label className="text-blawhiteck font-w500">Air</label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <span class="input-group-text">$</span>
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="shippingModeAirCost"
                            value={productShippingModeAirCost}
                            onChange={onChangeShippingModeAirCost}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-4 mb-3">
                      <label className="text-white font-w500">Sea</label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <span class="input-group-text">$</span>
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="shippingModeSeaCost"
                            value={productShippingModeSeaCost}
                            onChange={onChangeShippingModeSeaCost}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-4 mb-3">
                      <label className="text-white font-w500">Land</label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <span class="input-group-text">$</span>
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="shippingModeLandCost"
                            value={productShippingModeLandCost}
                            onChange={onChangeShippingModeLandCost}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-black border_primary card card--form_element">
                <div class="card-header">
                  <div class="text-black card-title h5">Attachments</div>
                </div>
                <div class="mb-0 card-body">
                  <div className="form-group mb-4">
                    <label className="text-black font-w500">Designs</label>
                    <div className="contact-name">
                      <div class="input-group mb-3">
                        <div class="form-file">
                          <input
                            type="file"
                            class="custom-file-input form-control"
                          />
                        </div>
                        <button class="btn btn-primary btn-sm" type="button">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-black font-w500">Documents</label>
                    <div className="contact-name">
                      <div class="input-group mb-3">
                        <div class="form-file">
                          <input
                            type="file"
                            class="custom-file-input form-control"
                          />
                        </div>
                        <button class="btn btn-primary btn-sm" type="button">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-white bg-primary card card--form_element">
                <div class="card-header">
                  <div class="text-white card-title h5">Inventory Settings</div>
                </div>
                <div class="mb-0 card-body">
                  <p className="text-white">
                    This section helps to notify when the next batch need to be
                    ordered.
                  </p>
                  <div className="row">
                    <div className="form-group col-md-12 mb-4">
                      <label className="text-blawhiteck font-w500">
                        My Warehouse Stock
                      </label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="myWarehouseStock"
                            value={productMyWarehouseStock}
                            onChange={onChangeMyWarehouseStock}
                          />
                          <span class="input-group-text">Units</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <label className="text-blawhiteck font-w500">
                        Manufacturing Time
                      </label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="productManufacturingDays"
                            value={productManufacturingDays}
                            onChange={onChangeProductManufacturingDays}
                          />
                          <span class="input-group-text">Days</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="text-white font-w500">
                        Fastest Shipping Time
                      </label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="fastestShippingDays"
                            value={productFastestShippingDays}
                            onChange={onChangeFastestShippingDays}
                          />
                          <span class="input-group-text">Days</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label className="text-white font-w500">
                        Shipment Handling Time
                      </label>
                      <div className="contact-name">
                        <div className="input-group input-white">
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="shippingHandlingDays"
                            value={productShippingHandlingDays}
                            onChange={onChangeShippingHandlingDays}
                          />
                          <span class="input-group-text">Days</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-6">
                      <div class="form-check custom-checkbox mb-3 checkbox-success">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="customCheckBox1"
                          required=""
                          checked
                        />
                        <label class="form-check-label" for="customCheckBox1">
                          Notify when to order
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-white bg-primary card card--form_element">
                <div class="card-header">
                  <div class="text-white card-title h5">Order Settings</div>
                </div>
                <div class="mb-0 card-body">
                  <p className="text-white">Turn on/off Required Fields</p>
                  <div className="row">
                    <div class="col-xl-4 col-xxl-6 col-6">
                      <div class="form-check custom-checkbox mb-3 checkbox-success">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="customCheckBox1"
                          required=""
                          checked
                        />
                        <label class="form-check-label" for="customCheckBox1">
                          Expiry Date
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-4 col-xxl-6 col-6">
                      <div class="form-check custom-checkbox mb-3 checkbox-success">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="customCheckBox1"
                          required=""
                          checked
                        />
                        <label class="form-check-label" for="customCheckBox1">
                          Expiry Date
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-4 col-xxl-6 col-6">
                      <div class="form-check custom-checkbox mb-3 checkbox-success">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="customCheckBox1"
                          required=""
                          checked
                        />
                        <label class="form-check-label" for="customCheckBox1">
                          Expiry Date
                        </label>
                      </div>
                    </div>
                    <div class="col-xl-4 col-xxl-6 col-6">
                      <div class="form-check custom-checkbox mb-3 checkbox-success">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="customCheckBox1"
                          required=""
                          checked
                        />
                        <label class="form-check-label" for="customCheckBox1">
                          Expiry Date
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductForm;