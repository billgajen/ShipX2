import React from "react";
import bg1 from "./../../../images/big/img1.jpg";

const ProfileCard = ({
  profileName,
  profileType,
  profileImage,
  profileLocation,
  profileEmail,
  profilePhone,
  profileProducts
}) => {
  return (
    <div className="col-xl-4 col-lg-6 col-sm-12">
      <div className="card overflow-hidden">
        <div
          className="text-center p-3 overlay-box"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="profile-photo">
            <img
              src={profileImage}
              width="100"
              className="m-auto img-fluid rounded-circle d-block"
              alt=""
            />
          </div>
          <h3 className="mt-3 mb-1 text-white">{profileName}</h3>
          <p className="text-white mb-0">{profileType}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="mb-0">Location</span>{" "}
            <strong className="text-muted">{profileLocation}</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="mb-0">Email</span>{" "}
            <strong className="text-muted">{profileEmail}</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="mb-0">Phone</span>{" "}
            <strong className="text-muted">{profilePhone}</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="mb-0">Products</span>{" "}
            <div>
              {profileProducts.map(product => {
                return <p key={product.productSKU} className="mb-0">{product.productSKU}</p>;
              })}
            </div>
          </li>
        </ul>
        <div className="card-footer text-center border-0 mt-0">
          <button type="button" class="me-2 btn btn-primary btn-rounded">
            <span class="btn-icon-start text-primary">
              <i class="fa fa-envelope color-primary"></i>
            </span>
            Contact {profileType}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;