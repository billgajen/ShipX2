import React from 'react';
import { Badge, Button } from "react-bootstrap";

//Images
const BillingPayments = () => {
	return (
		<>
			<div className="row">
				<div className="col-xl-6 col-lg-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Subscription</h4>
						</div>
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
								<div className="clearfix">
									<h3 className="card-title">Plan Details</h3>
									<span className="text-primary">Basic</span>
								</div>
								<div className="clearfix text-center">
									<h3 className="text-primary mb-0">$19.99</h3>
									<span>Billed Monthly</span>
								</div>
							</div>
							<Button
                as="a"
                variant=" "
                href="#"
                className="btn-card bg-primary text-white mt-3"
              >
                Upgrade
              </Button>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-12">
					<div className="text-white bg-primary card">
						<div className="card-header">
							<h4 className="card-title text-white">Payment Details</h4>
						</div>
						<div className="card-body">
							<h5 class="text-white billing-payment-heading">
								Payment Method:
								<span class="ms-2"><i class="fab fa-cc-visa" aria-hidden="true"></i> Visa ending in - 6194</span>
							</h5>
							<Button
                as="a"
                variant=" "
                href="#"
                className="btn-card bg-white text-primary mt-3"
              >
                Change
              </Button>
						</div>
					</div>
				</div>
				<div className="col-lg-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Invoices</h4>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								<div id="permission_data" className="dataTables_wrapper">
									<table
										className="display w-100 dataTable"
										id="example5"
										role="grid"
										aria-describedby="example5_info"
									>
										<thead>
											<tr role="row">
												<th className="sorting" style={{ width: "200px" }}>Subscription</th>
												<th className="sorting" style={{ width: "220px" }}>Amount</th>
												<th className="sorting" style={{ width: "100px" }}>Status</th>
												<th className="sorting" style={{ width: "80px" }}>Date</th>
												<th className="sorting" style={{ width: "50px" }}>Settings</th>
											</tr>
										</thead>

										<tbody>
											<tr className="odd" role="row">
												<td>
													<div className="d-flex align-items-center flex-wrap">
														<div>
															<div className="mt-1 fs-12 font-w500">
																<span className="d-block font-w600 fs-16 text-primary">Basic</span>
															</div>
														</div>
													</div>
												</td>
												<td>
													<div>
														<span className="fs-16 font-w500 text-black me-2">$19.99</span>
													</div>
												</td>
												<td>
													<Badge variant="danger badge-md light">Pending</Badge>
												</td>
												<td>
													<div>
														<span className="fs-12 font-w500 text-primary me-2">Aug 12 2022</span>
													</div>
												</td>
												<td>
													<div>
													<a class="btn btn-success shadow btn-xs sharp me-1" href=""><i class="fa fa-download"></i></a>
													<a class="btn btn-primary shadow btn-xs sharp" href=""><i class="fa fa-eye"></i></a>
													</div>
												</td>
											</tr>
											<tr className="odd" role="row">
												<td>
													<div className="d-flex align-items-center flex-wrap">
														<div>
															<div className="mt-1 fs-12 font-w500">
																<span className="d-block font-w600 fs-16 text-primary">Basic</span>
															</div>
														</div>
													</div>
												</td>
												<td>
													<div>
														<span className="fs-16 font-w500 text-black me-2">$19.99</span>
													</div>
												</td>
												<td>
													<Badge variant="success badge-md light">Paid</Badge>
												</td>
												<td>
													<div>
														<span className="fs-12 font-w500 text-primary me-2">Jul 12 2022</span>
													</div>
												</td>
												<td>
													<div>
													<a class="btn btn-success shadow btn-xs sharp me-1" href=""><i class="fa fa-download"></i></a>
													<a class="btn btn-primary shadow btn-xs sharp" href=""><i class="fa fa-eye"></i></a>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default BillingPayments;