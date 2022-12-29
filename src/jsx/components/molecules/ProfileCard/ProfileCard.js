import React from "react";
import LinkWithIcon from "../../elements/LinkWithIcon/LinkWithIcon";
import bg1 from "../../../../images/big/img1.jpg";

const ProfileCard = ({
  profileName,
  profileType,
  profileImage,
  profileLocation,
  profileEmail,
  profilePhone,
  profileProducts,
  link1,
  link2,
  onClick1,
  onClick2,
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
        </ul>
        <div className="card-footer text-center border-0 mt-0">
          <div className="links-container">
            <LinkWithIcon path={link1} onClick={onClick1} iconName="fa-envelope" />
            <LinkWithIcon path={link2} onClick={onClick2} iconName="fa-user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;