import React from "react";

const UploadInvoiceCard = ({ onClickUpload }) => {
  return (
    <div className="col-sm-12">
      <div className="card">
        <div className="card-header">
          <div className="card-title h5">Invoice</div>
        </div>
        <div className="card-body">
          <div className="profile-statistics">
            <div className="text-center">
              <button
                onClick={onClickUpload}
                type="button"
                class="me-2 btn btn-primary btn-rounded"
              >
                <span class="btn-icon-start text-primary">
                  <i className="fas fa-plus"></i>
                </span>
                Upload Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadInvoiceCard;
