import React from "react";

const UploadDocumentsCard = ({ onClickUpload, documents }) => {
  return (
    <div className="col-xl-6">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h5 className="text-black ">Documents</h5>
            </div>
            <div className="card-body pt-3">
              <div class="final-badge">
                {documents &&
                  documents.map((document) => (
                    <span key={document.id} class="badge text-black border">
                      <i class="fas fa-file-pdf me-2"></i>
                      {document.documentFile.name}
                    </span>
                  ))}
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  class="me-2 btn btn-primary btn-rounded"
                  onClick={onClickUpload}
                >
                  <span class="btn-icon-start text-primary">
                    <i className="fas fa-plus"></i>
                  </span>
                  Upload Documents
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentsCard;
