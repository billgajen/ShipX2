import React from "react";

const UploadInvoiceForm = ({
  onChangeFile,
  onTotalCostChange,
  onProductSKUChange,
  onClickSubmit,
  onClickCancel,
}) => {
  return (
    <div className="modal-body">
      <i className="flaticon-cancel-12 close"></i>
      <div className="add-contact-box">
        <div className="add-contact-content">
          <div className="form-group mb-3">
            <label className="text-black font-w500">Total Cost</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="totalCost"
                required="required"
                onChange={onTotalCostChange}
                placeholder="Total cost"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Product SKU</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="productSKU"
                required="required"
                onChange={onProductSKUChange}
                placeholder="SKU"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Attach Invoice</label>
            <div className="contact-name">
              <input
                type="file"
                className="form-file-input form-control"
                accept=".pdf"
                onChange={onChangeFile}
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
          Upload
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

export default UploadInvoiceForm;
