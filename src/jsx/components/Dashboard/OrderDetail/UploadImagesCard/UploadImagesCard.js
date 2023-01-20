import React from "react";

const UploadImagesCard = ({ onClickUpload, images, onDeleteImage }) => {
  return (
    <div className="col-xl-6">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h5 className="text-black ">Images</h5>
            </div>
            <div className="card-body pt-3">
              <div class="final-badge">
                {images &&
                  images.map((image) => (
                    <div key={image.id}>
                      <button
                        type="button"
                        className="btn"
                        style={{ color: "#FC2E53", padding: 4 }}
                        onClick={() => onDeleteImage(image.id)}
                      >
                        <i class="fa fa-minus-circle" aria-hidden="true"></i>
                      </button>
                      <span class="badge text-black border">
                        <i class="fas fa-image me-2"></i>
                        {image.imageFile.name}
                      </span>
                    </div>
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
                  Upload Images
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImagesCard;
