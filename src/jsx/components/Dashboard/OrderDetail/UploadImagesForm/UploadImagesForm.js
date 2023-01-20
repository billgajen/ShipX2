import React from "react";

const UploadImagesForm = ({ onChangeFile, onClickSubmit, onClickCancel }) => {
  return (
    <div>
      <div className="card-header justify-content-between">
        <div className="card-title h5">Upload Image</div>
        <button
          type="button"
          className="btn-close"
          onClick={onClickCancel}
        ></button>
      </div>
      <div className="modal-body">
        <div className="add-contact-box">
          <div className="add-contact-content">
            <div className="form-group mb-3">
              <label className="text-black font-w500">Attach Image</label>
              <div className="contact-name">
                <input
                  type="file"
                  className="form-file-input form-control"
                  accept=".jpg, .jpeg, .png"
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
    </div>
  );
};

export default UploadImagesForm;
