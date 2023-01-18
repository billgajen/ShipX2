import React from "react";
import DatePicker from "react-datepicker";

const UpdateBatchInfoForm = ({
  onLOTNumberChange,
  selectedDate,
  onDateChange,
  onBatchNumberChange,
  onColorChange,
  onModelNumberChange,
  onTypeChange,
  onSizeChange,
  lotNumberValue,
  expiryDateValue,
  batchNumberValue,
  colorValue,
  modelNumberValue,
  typeValue,
  sizeValue,
  onClickSubmit,
  onClickCancel,
}) => {
  return (
    <div className="modal-body">
      <i className="flaticon-cancel-12 close"></i>
      <div className="add-contact-box">
        <div className="add-contact-content">
          <div className="form-group mb-3">
            <label className="text-black font-w500">LOT Number</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="lotNumber"
                value={lotNumberValue}
                onChange={onLOTNumberChange}
                placeholder="LOT number"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Product Expiry</label>
            <div class="form-group mb-1 col-md-4">
              <DatePicker
                className="form-control"
                name="expiryDate"
                selected={selectedDate}
                onChange={onDateChange}
                minDate={new Date()}
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Batch Number</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="batchNumber"
                value={batchNumberValue}
                onChange={onBatchNumberChange}
                placeholder="Batch number"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Color</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="color"
                onChange={onColorChange}
                placeholder="Color"
                value={colorValue}
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Model Number</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="modelNumber"
                onChange={onModelNumberChange}
                placeholder="Model number"
                value={modelNumberValue}
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Type</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="type"
                onChange={onTypeChange}
                placeholder="Type"
                value={typeValue}
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label className="text-black font-w500">Size</label>
            <div className="contact-name">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                name="size"
                onChange={onSizeChange}
                placeholder="Size"
                value={sizeValue}
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
          Update
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

export default UpdateBatchInfoForm;
