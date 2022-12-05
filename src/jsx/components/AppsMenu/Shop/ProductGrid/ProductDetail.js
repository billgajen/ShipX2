import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStateValue } from "../../../../../store/selectors/useStateValue";
import { setProductsAction } from "../../../../../store/actions/ProductActions";

import user from "../../../../../images/pic1.jpg";
import bg1 from "../../../../../images/big/img1.jpg";

const ProductDetail = () => {
	const history = useHistory();
  const dispatch = useDispatch();
  const { products } = useStateValue();

  const [productsData, setProductsData] = useState(products.productsState);
  const newProducts = [...productsData];
  const selectedProduct = newProducts.filter(
    (product) => product.id === products.selectedProductId
  );
  const [product, setProduct] = useState(selectedProduct[0]);
  const [editProductId, setEditProductId] = useState(null);

  // delete data
  const [deleteModal, setDeleteModal] = useState(false);

  // delete data submit
  const handleDeleteSubmit = () => {
    const newProducts = [...productsData];
    const updatedProducts = newProducts.filter(
      (product) => product.id !== products.selectedProductId
    );
    setProductsData(updatedProducts);
    dispatch(setProductsAction(updatedProducts));
    setDeleteModal(false);
		history.push("/products");
  };

  //For Image upload in ListBlog
  const [file, setFile] = React.useState(null);
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setTimeout(function () {
      let src = document.getElementById("saveImageFile").getAttribute("src");
      editFormData.productThumb = src;
    }, 200);
  };

  //Edit Modal
  const [editModal, setEditModal] = useState(false);

  // Edit function button click to edit
  const handleEditClick = (event) => {
    event.preventDefault();
    setEditProductId(product.id);
    const formValues = {
      id: product.id,
      productName: product.productName,
      productSKU: product.productSKU,
      productThumb: product.productThumb,
      productASIN: product.productASIN,
      productWidth: product.productWidth,
      productHeight: product.productHeight,
      productLength: product.productLength,
      productWeight: product.productWeight,
      productManufacturingCost: product.productManufacturingCost,
      shippingModeAirCost: product.shippingModeAirCost,
      shippingModeSeaCost: product.shippingModeSeaCost,
      shippingModeLandCost: product.shippingModeLandCost,
      productManufacturingDays: product.productManufacturingDays,
      fastestShippingDays: product.fastestShippingDays,
      shippingHandlingDays: product.shippingHandlingDays,
      myWarehouseStock: product.myWarehouseStock,
    };
    setEditFormData(formValues);
    setEditModal(true);
  };

  // edit  data
  const [editFormData, setEditFormData] = useState({
    productName: "",
    productSKU: "",
    productThumb: "",
    productASIN: "",
    productWidth: "",
    productHeight: "",
    productLength: "",
    productWeight: "",
    productManufacturingCost: "",
    shippingModeAirCost: "",
    shippingModeSeaCost: "",
    shippingModeLandCost: "",
    productManufacturingDays: "",
    fastestShippingDays: "",
    shippingHandlingDays: "",
    myWarehouseStock: "",
  });

  //update data function
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  // edit form data submit
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const newProduct = editFormData;
    const newProducts = [...productsData];
    const index = productsData.findIndex(
      (product) => product.id === editProductId
    );
    newProducts[index] = newProduct;
    setProduct(newProduct);
    setProductsData(newProducts);
    dispatch(setProductsAction(newProducts));
    setEditModal(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="mb-4">
          <Modal
            className="modal fade"
            show={editModal}
            onHide={setEditModal}
            size="xl"
          >
            <form>
              <div className="modal-header">
                <h4 className="modal-title fs-20">Edit Product</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditModal(false)}
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <i
                  className="flaticon-cancel-12 close"
                  data-dismiss="modal"
                ></i>
                <div className="add-contact-box edit_product_form">
                  <div className="add-contact-content">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="image-placeholder mb-4">
                          <div className="avatar-edit">
                            <input
                              type="file"
                              onChange={fileHandler}
                              id="imageUpload"
                              onClick={(event) => setFile(event.target.value)}
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
                              value={editFormData.productName}
                              onChange={handleEditFormChange}
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
                              value={editFormData.productSKU}
                              onChange={handleEditFormChange}
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
                              value={editFormData.productASIN}
                              onChange={handleEditFormChange}
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
                                <label className="text-white font-w500">
                                  Width
                                </label>
                                <div className="contact-name">
                                  <div className="input-group input-white">
                                    <input
                                      type="text"
                                      className="form-control"
                                      autoComplete="off"
                                      name="productWidth"
                                      value={editFormData.productWidth}
                                      onChange={handleEditFormChange}
                                    />
                                    <span class="input-group-text">cm</span>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group col-md-4 mb-3">
                                <label className="text-white font-w500">
                                  Height
                                </label>
                                <div className="contact-name">
                                  <div className="input-group input-white">
                                    <input
                                      type="text"
                                      className="form-control"
                                      autoComplete="off"
                                      name="productHeight"
                                      value={editFormData.productHeight}
                                      onChange={handleEditFormChange}
                                    />
                                    <span class="input-group-text">cm</span>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group col-md-4 mb-3">
                                <label className="text-white font-w500">
                                  Length
                                </label>
                                <div className="contact-name">
                                  <div className="input-group input-white">
                                    <input
                                      type="text"
                                      className="form-control"
                                      autoComplete="off"
                                      name="productLength"
                                      value={editFormData.productLength}
                                      onChange={handleEditFormChange}
                                    />
                                    <span class="input-group-text">cm</span>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group col-md-4 mb-3">
                                <label className="text-white font-w500">
                                  Weight
                                </label>
                                <div className="contact-name">
                                  <div className="input-group input-white">
                                    <input
                                      type="text"
                                      className="form-control"
                                      autoComplete="off"
                                      name="productWeight"
                                      value={editFormData.productWeight}
                                      onChange={handleEditFormChange}
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
                            <div class="text-white card-title h5">
                              Manufacturing
                            </div>
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
                                      value={
                                        editFormData.productManufacturingCost
                                      }
                                      onChange={handleEditFormChange}
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
                            <div class="text-white card-title h5">
                              Shipping Cost
                            </div>
                          </div>
                          <div class="mb-0 card-body">
                            <div className="row">
                              <div className="form-group col-md-4 mb-4">
                                <label className="text-blawhiteck font-w500">
                                  Air
                                </label>
                                <div className="contact-name">
                                  <div className="input-group input-white">
                                    <span class="input-group-text">$</span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      autoComplete="off"
                                      name="shippingModeAirCost"
                                      value={editFormData.shippingModeAirCost}
                                      onChange={handleEditFormChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group col-md-4 mb-3">
                                <label className="text-white font-w500">
                                  Sea
                                </label>
                                <div className="contact-name">
                                  <div className="input-group input-white">
                                    <span class="input-group-text">$</span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      autoComplete="off"
                                      name="shippingModeSeaCost"
                                      value={editFormData.shippingModeSeaCost}
                                      onChange={handleEditFormChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group col-md-4 mb-3">
                                <label className="text-white font-w500">
                                  Land
                                </label>
                                <div className="contact-name">
                                  <div className="input-group input-white">
                                    <span class="input-group-text">$</span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      autoComplete="off"
                                      name="shippingModeLandCost"
                                      value={editFormData.shippingModeLandCost}
                                      onChange={handleEditFormChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="text-black border_primary card card--form_element">
                          <div class="card-header">
                            <div class="text-black card-title h5">
                              Attachments
                            </div>
                          </div>
                          <div class="mb-0 card-body">
                            <div className="form-group mb-4">
                              <label className="text-black font-w500">
                                Designs
                              </label>
                              <div className="contact-name">
                                <div class="input-group mb-3">
                                  <div class="form-file">
                                    <input
                                      type="file"
                                      class="custom-file-input form-control"
                                    />
                                  </div>
                                  <button
                                    class="btn btn-primary btn-sm"
                                    type="button"
                                  >
                                    Upload
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-group mb-4">
                              <label className="text-black font-w500">
                                Documents
                              </label>
                              <div className="contact-name">
                                <div class="input-group mb-3">
                                  <div class="form-file">
                                    <input
                                      type="file"
                                      class="custom-file-input form-control"
                                    />
                                  </div>
                                  <button
                                    class="btn btn-primary btn-sm"
                                    type="button"
                                  >
                                    Upload
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="text-white bg-primary card card--form_element">
                          <div class="card-header">
                            <div class="text-white card-title h5">
                              Inventory Settings
                            </div>
                          </div>
                          <div class="mb-0 card-body">
                            <p className="text-white">
                              This section helps to notify when the next batch
                              need to be ordered.
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
                                      value={editFormData.myWarehouseStock}
                                      onChange={handleEditFormChange}
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
                                      value={
                                        editFormData.productManufacturingDays
                                      }
                                      onChange={handleEditFormChange}
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
                                      value={editFormData.fastestShippingDays}
                                      onChange={handleEditFormChange}
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
                                      value={editFormData.shippingHandlingDays}
                                      onChange={handleEditFormChange}
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
                                  <label
                                    class="form-check-label"
                                    for="customCheckBox1"
                                  >
                                    Notify when to order
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="text-white bg-primary card card--form_element">
                          <div class="card-header">
                            <div class="text-white card-title h5">
                              Order Settings
                            </div>
                          </div>
                          <div class="mb-0 card-body">
                            <p className="text-white">
                              Turn on/off Required Fields
                            </p>
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
                                  <label
                                    class="form-check-label"
                                    for="customCheckBox1"
                                  >
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
                                  <label
                                    class="form-check-label"
                                    for="customCheckBox1"
                                  >
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
                                  <label
                                    class="form-check-label"
                                    for="customCheckBox1"
                                  >
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
                                  <label
                                    class="form-check-label"
                                    for="customCheckBox1"
                                  >
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
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleEditFormSubmit}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditModal(false)}
                  className="btn btn-danger"
                >
                  <i className="flaticon-delete-1"></i> Discard
                </button>
              </div>
            </form>
          </Modal>
          <Modal
            className="modal fade"
            show={deleteModal}
            onHide={setDeleteModal}
          >
            <div className="modal-header">
              <h4 className="modal-title fs-20">
                Are you sure you want to delete <b>{product?.productName}</b>?
              </h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setDeleteModal(false)}
                data-dismiss="modal"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                onClick={handleDeleteSubmit}
                className="btn btn-danger"
              >
                <i className="flaticon-delete-1"></i> Delete
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap">
                <div className="mb-3 col-sm-2">
                  <div className="me-3">
                    <img
                      className="img-fluid"
                      src={product?.productThumb}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mb-3 col-sm-9">
                  <h4 className="fs-24 font-w700">{product?.productName}</h4>
                  <span className="d-block fs-22 font-w500">
                    SKU: {product?.productSKU}
                  </span>
                  <h3 className="d-block fs-18 font-w600">
                    ASIN: {product?.productASIN}
                  </h3>
                  <div className="d-flex align-items-center mt-4 flex-wrap">
                    <div className="invite mb-3">
                      <Link
                        to={"#"}
                        className="btn btn-primary light btn-rounded btn-md me-2 mb-2"
                      >
                        <i className="fas fa-plus me-3 scale5"></i>Create Order
                      </Link>
                      <Link
                        onClick={(event) => handleEditClick(event)}
                        className="btn btn-outline-light btn-rounded btn-md me-2 mb-2"
                      >
                        <i className="far fa-edit me-2 scale2"></i>Edit
                      </Link>
                      <button
                        type="button"
                        class="btn btn-success btn-rounded me-2"
                      >
                        <span class="btn-icon-start text-success">
                          <i class="fa fa-link color-success"></i>
                        </span>
                        Assign Supplier
                      </button>
                      <button
                        onClick={() => setDeleteModal(true)}
                        type="button"
                        class="btn btn-danger btn-rounded me-2"
                      >
                        <span class="btn-icon-start text-danger">
                          <i class="fa fa-trash color-danger"></i>
                        </span>
                        Delete Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-sm-12">
          <div className="card overflow-hidden">
            <div
              className="text-center p-3 overlay-box"
              style={{ backgroundImage: `url(${bg1})` }}
            >
              <div className="profile-photo">
                <img
                  src={product?.productThumb}
                  width="100"
                  className="m-auto img-fluid rounded-circle d-block"
                  alt=""
                />
              </div>
              <h3 className="mt-3 mb-1 text-white">Augo Biotech</h3>
              <p className="text-white mb-0">Supplier</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Location</span>{" "}
                <strong className="text-muted">China</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Email</span>{" "}
                <strong className="text-muted">first.last@company.com</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Phone</span>{" "}
                <strong className="text-muted">+1684123456</strong>
              </li>
            </ul>
            <div className="card-footer text-center border-0 mt-0">
              <button type="button" class="me-2 btn btn-danger btn-rounded">
                <span class="btn-icon-start text-danger">
                  <i class="fa fa-link color-danger"></i>
                </span>
                Remove Supplier
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-6 col-sm-12">
          <div className="row">
            <div className="col-lg-5">
              <div className="text-white bg-primary card">
                <div className="card-header">
                  <div className="text-white card-title h5">Manufacturing</div>
                </div>
                <div className="card-body">
                  <div className="profile-statistics">
                    <div className="text-center">
                      <div className="row">
                        <div className="col text-white">
                          <h2 className="m-b-0 text-white font-w700">
                            ${product?.productManufacturingCost}
                          </h2>
                          <span>per unit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="text-white bg-primary card">
                <div className="card-header">
                  <div className="text-white card-title h5">
                    Shipping per Unit
                  </div>
                </div>
                <div className="card-body">
                  <div className="profile-statistics">
                    <div className="text-center">
                      <div className="row">
                        <div className="col text-white">
                          <h3 className="m-b-0 text-white">
                            ${product?.shippingModeAirCost}
                          </h3>
                          <span>Air</span>
                        </div>
                        <div className="col text-white">
                          <h3 className="m-b-0 text-white">
                            ${product?.shippingModeSeaCost}
                          </h3>{" "}
                          <span>Sea</span>
                        </div>
                        <div className="col text-white">
                          <h3 className="m-b-0 text-white">
                            ${product?.shippingModeLandCost}
                          </h3>{" "}
                          <span>Ground</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Dimensions</div>
                </div>
                <div className="card-body">
                  <div className="profile-statistics">
                    <div className="text-center">
                      <div className="row">
                        <div className="col ">
                          <h3 className="m-b-0">{product?.productWidth}cm</h3>
                          <span>Width</span>
                        </div>
                        <div className="col">
                          <h3 className="m-b-0">{product?.productHeight}cm</h3>{" "}
                          <span>Height</span>
                        </div>
                        <div className="col">
                          <h3 className="m-b-0">{product?.productLength}cm</h3>{" "}
                          <span>Length</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h5">Weight</div>
                </div>
                <div className="card-body">
                  <div className="profile-statistics">
                    <div className="text-center">
                      <div className="row">
                        <div className="col">
                          <h3 className="m-b-0">{product?.productWeight}lbs</h3>{" "}
                          <span>Weight</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="row"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h5 className="text-black ">Design Files</h5>
                </div>
                <div className="card-body pt-3">
                  <div class="final-badge">
                    <span class="badge text-black border">
                      <i class="far fa-file-alt me-3"></i>
                      Master_Label_Desgin.psd
                    </span>
                    <span class="badge text-black border">
                      <i class="far fa-file-alt me-3"></i>Box_Design.ai
                    </span>
                    <span class="badge text-black border">
                      <i class="fas fa-image me-2"></i>Insert.jpg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h5 className="text-black ">Documents</h5>
                </div>
                <div className="card-body pt-3">
                  <div class="final-badge">
                    <span class="badge text-black border">
                      <i class="far fa-file-alt me-3"></i>
                      Certificate_of_Analysis.pdf
                    </span>
                    <span class="badge text-black border">
                      <i class="far fa-file-alt me-3"></i>product_listing.csv
                    </span>
                    <span class="badge text-black border">
                      <i class="fas fa-image me-2"></i>USDA_Organic.pdf
                    </span>
                    <span class="badge text-black border">
                      <i class="fas fa-image me-2"></i>ISO_Certificate.pdf
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
