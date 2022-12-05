import React from 'react';
import {Link} from 'react-router-dom';	
import {Dropdown, Nav,Tab} from 'react-bootstrap';

///Import
import {
	TabCard,PendingTab,
	ProgressTab,CloseTab
}
from './Project/Project';
import bg1 from "./../../../images/big/img1.jpg";
import profile from "./../../../images/profile/profile.png";
	
import amazonLogo from './../../../images/freight/amazon.png';

const Suppliers = () =>{
	return(
		<>
			<div className="d-flex justify-content-between align-items-center flex-wrap">
				<div className="input-group contacts-search mb-4">
					<input type="text" className="form-control" placeholder="Search here..." />
					<span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
				</div>
				<div className="mb-4">
					<Link to={"#"} className="btn btn-primary btn-rounded fs-18">+ Add Supplier</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-4 col-lg-6 col-sm-12">
				  <div className="card overflow-hidden">
				    <div className="text-center p-3 overlay-box" style={{ backgroundImage: `url(${bg1})` }}>
				      <div className="profile-photo">
				        <img
				          src={profile}
				          width="100"
				          className="m-auto img-fluid rounded-circle d-block"
				          alt=""
				        />
				      </div>
				      <h3 className="mt-3 mb-1 text-white">Augo Biotech</h3>
				      <p className="text-white mb-0">Supplier</p>
				    </div>
				    <ul className="list-group list-group-flush">
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Location</span>{" "}
				        <strong className="text-muted">China</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Email</span>{" "}
				        <strong className="text-muted">first.last@company.com</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Phone</span>{" "}
				        <strong className="text-muted">+1684123456</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Products</span>{" "}
				        <div>
					        <p className="mb-0">BL003 DRESS01</p>
					        <p className="mb-0">BL003 DRESS02</p>
					        <p className="mb-0">BL003 DRESS03</p>
				        </div>
				      </li>
				    </ul>
				    <div className="card-footer text-center border-0 mt-0">
				    <button type="button" class="me-2 btn btn-primary btn-rounded"><span class="btn-icon-start text-primary"><i class="fa fa-envelope color-primary"></i></span>Contact Supplier</button>
				    </div>
				  </div>
				</div>
				<div className="col-xl-4 col-lg-6 col-sm-12">
				  <div className="card overflow-hidden">
				    <div className="text-center p-3 overlay-box" style={{ backgroundImage: `url(${bg1})` }}>
				      <div className="profile-photo">
				        <img
				          src={profile}
				          width="100"
				          className="m-auto img-fluid rounded-circle d-block"
				          alt=""
				        />
				      </div>
				      <h3 className="mt-3 mb-1 text-white">Augo Biotech</h3>
				      <p className="text-white mb-0">Supplier</p>
				    </div>
				    <ul className="list-group list-group-flush">
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Location</span>{" "}
				        <strong className="text-muted">China</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Email</span>{" "}
				        <strong className="text-muted">first.last@company.com</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Phone</span>{" "}
				        <strong className="text-muted">+1684123456</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Products</span>{" "}
				        <div>
					        <p className="mb-0">BL003 DRESS01</p>
					        <p className="mb-0">BL003 DRESS02</p>
					        <p className="mb-0">BL003 DRESS03</p>
				        </div>
				      </li>
				    </ul>
				    <div className="card-footer text-center border-0 mt-0">
				    <button type="button" class="me-2 btn btn-primary btn-rounded"><span class="btn-icon-start text-primary"><i class="fa fa-envelope color-primary"></i></span>Contact Supplier</button>
				    </div>
				  </div>
				</div>
				<div className="col-xl-4 col-lg-6 col-sm-12">
				  <div className="card overflow-hidden">
				    <div className="text-center p-3 overlay-box" style={{ backgroundImage: `url(${bg1})` }}>
				      <div className="profile-photo">
				        <img
				          src={profile}
				          width="100"
				          className="m-auto img-fluid rounded-circle d-block"
				          alt=""
				        />
				      </div>
				      <h3 className="mt-3 mb-1 text-white">Augo Biotech</h3>
				      <p className="text-white mb-0">Supplier</p>
				    </div>
				    <ul className="list-group list-group-flush">
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Location</span>{" "}
				        <strong className="text-muted">China</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Email</span>{" "}
				        <strong className="text-muted">first.last@company.com</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Phone</span>{" "}
				        <strong className="text-muted">+1684123456</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Products</span>{" "}
				        <div>
					        <p className="mb-0">BL003 DRESS01</p>
					        <p className="mb-0">BL003 DRESS02</p>
					        <p className="mb-0">BL003 DRESS03</p>
				        </div>
				      </li>
				    </ul>
				    <div className="card-footer text-center border-0 mt-0">
				    <button type="button" class="me-2 btn btn-primary btn-rounded"><span class="btn-icon-start text-primary"><i class="fa fa-envelope color-primary"></i></span>Contact Supplier</button>
				    </div>
				  </div>
				</div>
				<div className="col-xl-4 col-lg-6 col-sm-12">
				  <div className="card overflow-hidden">
				    <div className="text-center p-3 overlay-box" style={{ backgroundImage: `url(${bg1})` }}>
				      <div className="profile-photo">
				        <img
				          src={profile}
				          width="100"
				          className="m-auto img-fluid rounded-circle d-block"
				          alt=""
				        />
				      </div>
				      <h3 className="mt-3 mb-1 text-white">Augo Biotech</h3>
				      <p className="text-white mb-0">Supplier</p>
				    </div>
				    <ul className="list-group list-group-flush">
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Location</span>{" "}
				        <strong className="text-muted">China</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Email</span>{" "}
				        <strong className="text-muted">first.last@company.com</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Phone</span>{" "}
				        <strong className="text-muted">+1684123456</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Products</span>{" "}
				        <div>
					        <p className="mb-0">BL003 DRESS01</p>
					        <p className="mb-0">BL003 DRESS02</p>
					        <p className="mb-0">BL003 DRESS03</p>
				        </div>
				      </li>
				    </ul>
				    <div className="card-footer text-center border-0 mt-0">
				    <button type="button" class="me-2 btn btn-primary btn-rounded"><span class="btn-icon-start text-primary"><i class="fa fa-envelope color-primary"></i></span>Contact Supplier</button>
				    </div>
				  </div>
				</div>
				<div className="col-xl-4 col-lg-6 col-sm-12">
				  <div className="card overflow-hidden">
				    <div className="text-center p-3 overlay-box" style={{ backgroundImage: `url(${bg1})` }}>
				      <div className="profile-photo">
				        <img
				          src={profile}
				          width="100"
				          className="m-auto img-fluid rounded-circle d-block"
				          alt=""
				        />
				      </div>
				      <h3 className="mt-3 mb-1 text-white">Augo Biotech</h3>
				      <p className="text-white mb-0">Supplier</p>
				    </div>
				    <ul className="list-group list-group-flush">
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Location</span>{" "}
				        <strong className="text-muted">China</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Email</span>{" "}
				        <strong className="text-muted">first.last@company.com</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Phone</span>{" "}
				        <strong className="text-muted">+1684123456</strong>
				      </li>
				      <li className="list-group-item d-flex justify-content-between">
				        <span className="mb-0">Products</span>{" "}
				        <div>
					        <p className="mb-0">BL003 DRESS01</p>
					        <p className="mb-0">BL003 DRESS02</p>
					        <p className="mb-0">BL003 DRESS03</p>
				        </div>
				      </li>
				    </ul>
				    <div className="card-footer text-center border-0 mt-0">
				    <button type="button" class="me-2 btn btn-primary btn-rounded"><span class="btn-icon-start text-primary"><i class="fa fa-envelope color-primary"></i></span>Contact Supplier</button>
				    </div>
				  </div>
				</div>
			</div>
		</>
	)
}
export default Suppliers;