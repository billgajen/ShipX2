import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { nanoid } from "nanoid";
import {
  setProductsAction,
  setSelectedProductIdAction,
} from "../../../store/actions/ProductActions";
import { useDispatch } from "react-redux";
import { useStateValue } from "../../../store/selectors/useStateValue";
import AddProductForm, {
  initialFormState,
} from "../customForms/AddProductForm";

import user from "./../../../images/pic1.jpg";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useStateValue();

  const [addCard, setAddCard] = useState(false);
  const [productsData, setProducts] = useState(products.productsState);

  //For Image upload in ListBlog
  const [file, setFile] = useState(null);
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setTimeout(function () {
      let src = document.getElementById("saveImageFile").getAttribute("src");
      addFormData.productThumb = src;
    }, 200);
  };

  //Add data
  const [addFormData, setAddFormData] = useState(initialFormState);

  // Add Product function
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  //Add Submit data
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let errorMsg = "";
    if (addFormData.productName === "") {
      error = true;
      errorMsg = "Please fill Name";
    } else if (addFormData.productSKU === "") {
      error = true;
      errorMsg = "Please fill profile.";
    } else if (addFormData.productThumb === "") {
      error = true;
      errorMsg = "Please attached image";
    }
    if (!error) {
      const newProduct = {
        id: nanoid(),
        productName: addFormData.productName,
        productSKU: addFormData.productSKU,
        productThumb: addFormData.productThumb,
        productASIN: addFormData.productASIN,
        productWidth: addFormData.productWidth,
        productHeight: addFormData.productHeight,
        productLength: addFormData.productLength,
        productWeight: addFormData.productWeight,
        productSize: addFormData.productSize,
        productManufacturingCost: addFormData.productManufacturingCost,
        shippingModeAirCost: addFormData.shippingModeAirCost,
        shippingModeSeaCost: addFormData.shippingModeSeaCost,
        shippingModeLandCost: addFormData.shippingModeLandCost,
        productManufacturingDays: addFormData.productManufacturingDays,
        fastestShippingDays: addFormData.fastestShippingDays,
        shippingHandlingDays: addFormData.shippingHandlingDays,
        myWarehouseStock: addFormData.myWarehouseStock,
        amazonIntegrated: false,
      };
      const newProducts = [...productsData, newProduct];
      setProducts(newProducts);
      dispatch(setProductsAction(newProducts));
      setAddCard(false);
      swal("Good job!", "Successfully Added", "success");
      addFormData.name = addFormData.productSKU = addFormData.productThumb = "";
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  console.log("Products", products);

  //Edit Modal
  const [editModal, setEditModal] = useState(false);

  // Edit function editable page loop
  const [editProductId, setEditProductId] = useState(null);

  // Edit function button click to edit
  const handleEditClick = (event, product) => {
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
      productSize: product.productSize,
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
  const [editFormData, setEditFormData] = useState(initialFormState);

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
    const editedProduct = {
      id: editProductId,
      productName: editFormData.productName,
      productSKU: editFormData.productSKU,
      productThumb: editFormData.productThumb,
      productASIN: editFormData.productASIN,
      productWidth: editFormData.productWidth,
      productHeight: editFormData.productHeight,
      productLength: editFormData.productLength,
      productWeight: editFormData.productWeight,
      productSize: editFormData.productSize,
      productManufacturingCost: editFormData.productManufacturingCost,
      shippingModeAirCost: editFormData.shippingModeAirCost,
      shippingModeSeaCost: editFormData.shippingModeSeaCost,
      shippingModeLandCost: editFormData.shippingModeLandCost,
      productManufacturingDays: editFormData.productManufacturingDays,
      fastestShippingDays: editFormData.fastestShippingDays,
      shippingHandlingDays: editFormData.shippingHandlingDays,
      myWarehouseStock: editFormData.myWarehouseStock,
    };
    const newProducts = [...productsData];
    const index = productsData.findIndex(
      (product) => product.id === editProductId
    );
    newProducts[index] = editedProduct;
    setProducts(newProducts);
    dispatch(setProductsAction(newProducts));
    setEditProductId(null);
    setEditModal(false);
  };

  const handleSelectedProductId = (id) => {
    dispatch(setSelectedProductIdAction(id));
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="input-group contacts-search mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
          />
          <span className="input-group-text">
            <Link to={"#"}>
              <i className="flaticon-381-search-2"></i>
            </Link>
          </span>
        </div>
        <div className="mb-4">
          <Link
            to={"#"}
            className="btn btn-primary btn-rounded fs-18"
            onClick={() => setAddCard(true)}
          >
            + New Product
          </Link>
          <Modal className="modal fade" show={addCard} onHide={setAddCard}>
            <div className="modal-header">
              <h4 className="modal-title fs-20">Add Product</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setAddCard(false)}
              ></button>
            </div>
            <form>
              <AddProductForm
                onChangeFile={fileHandler}
                onClickFile={(event) => setFile(event.target.value)}
                file={file}
                onProductNameChange={handleAddFormChange}
                onProductASINChange={handleAddFormChange}
                onClickSubmit={handleAddFormSubmit}
                onClickCancel={() => setAddCard(false)}
              />
            </form>
          </Modal>
          <Modal
            className="modal fade"
            show={editModal}
            onHide={setEditModal}
            size="xl"
          >
            <div className="modal-header">
              <h4 className="modal-title fs-20">Edit Product</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setEditModal(false)}
                data-dismiss="modal"
              ></button>
            </div>
            <form>
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
            </form>
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
          </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            {productsData.map((product, index) => (
              <div
                className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items"
                key={index}
              >
                <div className="card contact-bx item-content">
                  <div className="card-body user-profile">
                    <div className="image-bx">
                      <Link
                        onClick={() => handleSelectedProductId(product.id)}
                        to={`/product-detail/${product.id}`}
                      >
                        <img
                          src={product.productThumb}
                          alt=""
                          className="rounded-circle"
                        />
                      </Link>
                    </div>
                    <div className="media-body user-meta-info">
                      <h6 className="fs-18 font-w600 my-1">
                        <Link
                          onClick={() => handleSelectedProductId(product.id)}
                          to={`/product-detail/${product.id}`}
                          className="text-black user-name"
                          data-name=""
                        >
                          {product.productName}
                        </Link>
                      </h6>
                      <span className="d-block fs-14 mb-3 user-work">
                        {product.productSKU}
                      </span>
                      <ul>
                        <li>
                          <Link to={"#"}>
                            <i className="fas fa-plus"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={(event) => handleEditClick(event, product)}
                          >
                            <i className="far fa-edit"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
