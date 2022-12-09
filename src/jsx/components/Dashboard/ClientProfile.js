import React, { Fragment, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../store/selectors/useStateValue";
import HeaderBanner from "../molecules/HeaderBanner/HeaderBanner";
//** Import Image */
import profile01 from "../../../images/profile/1.jpg";
import profile05 from "../../../images/profile/5.jpg";
import profile06 from "../../../images/profile/6.jpg";
import profile07 from "../../../images/profile/7.jpg";

const ClientProfile = () => {
  const { clients } = useStateValue();
  const [clientsData, ] = useState(clients.clientsState);
  const client = clientsData.find(
    (client) => client.id === clients.selectedClientId
  );

  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);

  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content ">
                <HeaderBanner heading={client.name} />
              </div>
              <div className="profile-info">
                <div className="profile-photo">
                  <img
                    src={client.image}
                    className="img-fluid rounded-circle"
                    alt="profile"
                  />
                </div>
                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">{client.email}</h4>
                    <p>Email</p>
                  </div>
                  <div className="profile-email px-2 pt-2">
                    <h4 className="text-muted mb-0">{client.phoneNumber}</h4>
                    <p>Telephone</p>
                  </div>
                  <Dropdown className="dropdown ms-auto">
                    <Dropdown.Toggle
                      variant="primary"
                      className="btn btn-primary light sharp i-false"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        //    xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-user-circle text-primary me-2" />
                        View profile
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-users text-primary me-2" />
                        Add to close friends
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-plus text-primary me-2" />
                        Add to group
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-ban text-primary me-2" />
                        Block
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="profile-statistics">
                    <div className="text-center">
                      <div className="row">
                        <div className="col">
                          <h3 className="m-b-0">150</h3>
                          <span>Follower</span>
                        </div>
                        <div className="col">
                          <h3 className="m-b-0">140</h3> <span>Place Stay</span>
                        </div>
                        <div className="col">
                          <h3 className="m-b-0">45</h3> <span>Reviews</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          to="/post-details"
                          className="btn btn-primary mb-1 me-1"
                        >
                          Follow
                        </Link>
                        <Button
                          as="a"
                          href="#"
                          className="btn btn-primary mb-1 ms-1"
                          onClick={() => setSendMessage(true)}
                        >
                          Send Message
                        </Button>
                      </div>
                    </div>
                    {/* send Modal */}
                    <Modal className="modal fade" show={sendMessage}>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Send Message</h5>
                          <Button
                            variant=""
                            type="button"
                            className="btn-close"
                            data-dismiss="modal"
                            onClick={() => setSendMessage(false)}
                          ></Button>
                        </div>
                        <div className="modal-body">
                          <form
                            className="comment-form"
                            onSubmit={(e) => {
                              e.preventDefault();
                              setSendMessage(false);
                            }}
                          >
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="author"
                                    className="text-black font-w600"
                                  >
                                    {" "}
                                    Name <span className="required">
                                      *
                                    </span>{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Author"
                                    name="Author"
                                    placeholder="Author"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="email"
                                    className="text-black font-w600"
                                  >
                                    {" "}
                                    Email <span className="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Email"
                                    placeholder="Email"
                                    name="Email"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <label
                                    htmlFor="comment"
                                    className="text-black font-w600"
                                  >
                                    Comment
                                  </label>
                                  <textarea
                                    rows={8}
                                    className="form-control"
                                    name="comment"
                                    placeholder="Comment"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group mb-3">
                                  <input
                                    type="submit"
                                    value="Post Comment"
                                    className="submit btn btn-primary"
                                    name="submit"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="text-primary">{`${client.name}'s special: Hot Selling Products!!`}</h4>
                </div>
                <div className="card-body pt-3">
                  <div className="profile-blog ">
                    <img
                      src={profile01}
                      alt="profile"
                      className="img-fluid  mb-4 w-100 "
                    />
                    <Link to="/post-details">
                      {" "}
                      <h4>Darwin Creative Agency Theme</h4>{" "}
                    </Link>
                    <p className="mb-0">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="profile-tab">
                <div className="custom-tab-1">
                  <ul className="nav nav-tabs">
                    <li
                      className="nav-item"
                      onClick={() => setActiveToggle("posts")}
                    >
                      <Link
                        to="#my-posts"
                        data-toggle="tab"
                        className={`nav-link ${
                          activeToggle === "posts" ? "active show" : ""
                        }`}
                      >
                        Our Products
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => setActiveToggle("aboutMe")}
                    >
                      <Link
                        to="#about-me"
                        data-toggle="tab"
                        className={`nav-link ${
                          activeToggle === "aboutMe" ? "active show" : ""
                        }`}
                      >
                        About {client.name}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#profile-settings"
                        data-toggle="tab"
                        onClick={() => setActiveToggle("setting")}
                        className={`nav-link ${
                          activeToggle === "setting" ? "active show" : ""
                        }`}
                      >
                        Setting
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      id="my-posts"
                      className={`tab-pane fade ${
                        activeToggle === "posts" ? "active show" : ""
                      }`}
                    >
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body pt-3">
                            <div className="profile-news">
                              <div className="media pt-3 pb-3">
                                <img
                                  src={profile05}
                                  alt=""
                                  className="me-3 rounded"
                                  width={75}
                                />
                                <div className="media-body">
                                  <h5 className="m-b-5">
                                    <Link
                                      to="/post-details"
                                      className="text-black"
                                    >
                                      Ses Moss Gummies
                                    </Link>
                                  </h5>
                                  <p className="mb-0">ASIN 374747</p>
                                </div>
                              </div>
                              <div className="media pt-3 pb-3">
                                <img
                                  src={profile06}
                                  alt=""
                                  className="me-3 rounded"
                                  width={75}
                                />
                                <div className="media-body">
                                  <h5 className="m-b-5">
                                    <Link
                                      to="/post-details"
                                      className="text-black"
                                    >
                                      Mullein Leaf Capsules
                                    </Link>
                                  </h5>
                                  <p className="mb-0">ASIN 47482</p>
                                </div>
                              </div>
                              <div className="media pt-3 ">
                                <img
                                  src={profile07}
                                  alt=""
                                  className="me-3 rounded"
                                  width={75}
                                />
                                <div className="media-body">
                                  <h5 className="m-b-5">
                                    <Link
                                      to="/post-details"
                                      className="text-black"
                                    >
                                      Immune Gummies
                                    </Link>
                                  </h5>
                                  <p className="mb-0">ASIN 73736</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="about-me"
                      className={`tab-pane fade ${
                        activeToggle === "aboutMe" ? "active show" : ""
                      }`}
                    >
                      <div className="profile-about-me">
                        <div className="pt-4 border-bottom-1 pb-3">
                          <h4 className="text-primary">About Me</h4>
                          <p className="mb-2">
                            A wonderful serenity has taken possession of my
                            entire soul, like these sweet mornings of spring
                            which I enjoy with my whole heart. I am alone, and
                            feel the charm of existence was created for the
                            bliss of souls like mine.I am so happy, my dear
                            friend, so absorbed in the exquisite sense of mere
                            tranquil existence, that I neglect my talents.
                          </p>
                          <p>
                            A collection of textile samples lay spread out on
                            the table - Samsa was a travelling salesman - and
                            above it there hung a picture that he had recently
                            cut out of an illustrated magazine and housed in a
                            nice, gilded frame.
                          </p>
                        </div>
                      </div>
                      <div className="profile-skills mb-5">
                        <h4 className="text-primary mb-2">Skills</h4>
                        <Link
                          to="/app-profile"
                          className="btn btn-primary light btn-xs mb-1 me-1"
                        >
                          {" "}
                          Admin
                        </Link>
                        <Link
                          to="/app-profile"
                          className="btn btn-primary light btn-xs mb-1 me-1"
                        >
                          {" "}
                          Dashboard
                        </Link>
                        <Link
                          to="/app-profile"
                          className="btn btn-primary light btn-xs mb-1 me-1"
                        >
                          Photoshop
                        </Link>
                        <Link
                          to="/app-profile"
                          className="btn btn-primary light btn-xs mb-1 me-1"
                        >
                          Bootstrap
                        </Link>
                        <Link
                          to="/app-profile"
                          className="btn btn-primary light btn-xs mb-1 me-1"
                        >
                          Responsive
                        </Link>
                        <Link
                          to="/app-profile"
                          className="btn btn-primary light btn-xs mb-1 me-1"
                        >
                          Crypto
                        </Link>
                      </div>
                      <div className="profile-lang  mb-5">
                        <h4 className="text-primary mb-2">Language</h4>
                        <Link
                          to="/app-profile"
                          className="text-muted pe-3 f-s-16"
                        >
                          <i className="flag-icon flag-icon-us" />
                          English
                        </Link>
                        <Link
                          to="/app-profile"
                          className="text-muted pe-3 f-s-16"
                        >
                          <i className="flag-icon flag-icon-fr" />
                          French
                        </Link>
                        <Link
                          to="/app-profile"
                          className="text-muted pe-3 f-s-16"
                        >
                          <i className="flag-icon flag-icon-bd" />
                          Bangla
                        </Link>
                      </div>
                      <div className="profile-personal-info">
                        <h4 className="text-primary mb-4">
                          Personal Information
                        </h4>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}
                              Name<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>Mitchell C.Shay</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Email<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>example@examplel.com</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}
                              Availability<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>Full Time (Free Lancer)</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Age<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>27</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}
                              Location<span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>Rosemont Avenue Melbourne, Florida</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Year Experience
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>07 Year Experiences</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="profile-settings"
                      className={`tab-pane fade ${
                        activeToggle === "setting" ? "active show" : ""
                      }`}
                    >
                      <div className="pt-3">
                        <div className="settings-form">
                          <h4 className="text-primary">Account Setting</h4>
                          <form onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                              <div className="form-group mb-3 col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group mb-3 col-md-6">
                                <label className="form-label">Password</label>
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label className="form-label">Address</label>
                              <input
                                type="text"
                                placeholder="1234 Main St"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label className="form-label">Address 2</label>
                              <input
                                type="text"
                                placeholder="Apartment, studio, or floor"
                                className="form-control"
                              />
                            </div>
                            <div className="row">
                              <div className="form-group mb-3 col-md-6">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group mb-3 col-md-4">
                                <label className="form-label">State</label>
                                <select
                                  className="form-control"
                                  id="inputState"
                                  defaultValue="option-1"
                                >
                                  <option value="option-1">Choose...</option>
                                  <option value="option-2">Option 1</option>
                                  <option value="option-3">Option 2</option>
                                  <option value="option-4">Option 3</option>
                                </select>
                              </div>
                              <div className="form-group mb-3 col-md-2">
                                <label className="form-label">Zip</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <div className="form-check custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridCheck"
                                >
                                  Check me out
                                </label>
                              </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                              Sign in
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="text-black ">Documents</h5>
                    </div>
                    <div className="card-body pt-3">
                      <div class="final-badge">
                        <span class="badge text-black border">
                          <i class="far fa-file-alt me-3"></i>
                          Certificate_of_Analysis.pdf
                        </span>
                        <span class="badge text-black border">
                          <i class="far fa-file-alt me-3"></i>
                          product_listing.csv
                        </span>
                        <span class="badge text-black border">
                          <i class="fas fa-image me-2"></i>USDA_Organic.pdf
                        </span>
                        <span class="badge text-black border">
                          <i class="fas fa-image me-2"></i>ISO_Certificate.pdf
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ClientProfile;
