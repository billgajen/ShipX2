import React from 'react';
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

//Images
import amzlogo from './../../../../images/amazon-logo.png';

const Integrations = () => {
	return (
		<>
			<div className="row">
				<div className="col-xl-12">
					<div className="row">
						<div className="col-xl-6">
							<div className="row">
								<div className="col-xl-12">
									<div className="card tryal-gradient">
										<div className="card-body tryal row">
											<div className="col-xl-7 col-sm-6">
												<h2>Connect Your Seller Accounts</h2>
												<span>Connect to Amazon and let [KH234] track your orders automatically with our best automated systems.</span>
												<Link to={"#"} className="btn btn-rounded  fs-18 font-w500">Connect</Link>
											</div>
											<div className="col-xl-5 col-sm-6">
												<img src={amzlogo} alt="" className="sd-shape" />
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>	
						<div className="col-xl-6">
							<div className="row">
								<div className="col-xl-12">
									<div className="row">
										<div className="col-xl-6 col-sm-6">
											<div className="card">
												<div className="card-body d-flex px-4  justify-content-between">
													<div>
														<div className="">
															<h2 className="fs-20 font-w700">AXGXSXHXIXPXZX</h2>
															<span className="fs-18 font-w500 d-block">North America</span>
															<span className="d-block fs-12 font-w400"><i class="fab fa-amazon me-2 scale3"></i>Amazon Seller Account</span>
														</div>
													</div>
												</div>
												<div class="card-footer d-flex justify-content-end align-items-center flex-wrap">
													<Badge variant="success badge-md light">Active</Badge>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-sm-6">
											<div className="card">
												<div className="card-body">
													<div className="text-center pt-4 pb-4">
														<button type="button" class="btn btn-primary btn-rounded">
															<span class="btn-icon-start text-primary"><i className="fas fa-plus"></i></span>
															 Seller account
														</button>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-sm-6">
											<div className="card">
												<div className="card-body d-flex px-4  justify-content-between">
													<p className="pb-5">&nbsp;</p>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-sm-6">
											<div className="card">
												<div className="card-body d-flex px-4  justify-content-between">
													<p className="pb-5">&nbsp;</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>							
						</div>							
								
					</div>	
				</div>	
			</div>	
		</>
	)
}
export default Integrations;