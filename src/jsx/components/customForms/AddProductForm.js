import React, { useState } from "react";
import user from "../../../images/pic1.jpg";

export  const initialFormState = {
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
  };

const AddProductForm = ({
  onProductNameChange,
  onProductASINChange,
}) => {
  //For Image upload in ListBlog
  // const [addCard, setAddCard] = useState(false);
  // const [addFormData, setAddFormData] = useState(initialFormState);
  const [file, setFile] = useState(null);

  const fileHandler = (e, addFormData) => {
    setFile(e.target.files[0]);
    setTimeout(function () {
      let src = document.getElementById("saveImageFile").getAttribute("src");
      addFormData.productThumb = src;
    }, 200);
  };

  return (
    <form>
      <div className="modal-body">
        <i className="flaticon-cancel-12 close"></i>
        <div className="add-contact-box">
          <div className="add-contact-content">
            <div className="image-placeholder">
              <div className="avatar-edit">
                <input
                  type="file"
                  onChange={(addFormData) => fileHandler(addFormData)}
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
      </div>
    </form>
  );
};

export default AddProductForm;