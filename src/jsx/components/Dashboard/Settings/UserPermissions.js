import React, { useState, useRef, useEffect } from "react";
import {
	Dropdown,
	ButtonGroup,
	SplitButton,
} from "react-bootstrap";

import product1 from './../../../../images/product/4.jpg';

//Images
const UserPermissions = () => {

	return (
		<>
			<div className="project-page d-flex justify-content-between align-items-center flex-wrap">
				<div className="input-group mb-4 d-flex justify-content-end">
					<div className="col-sm-6 contact-name">
						<div className="input-group input-primary">
							<input
								type="text"
								className="form-control"
								autoComplete="off"
								name="productWidth"
								placeholder="Enter Email Address"
							/>
							<SplitButton
								as={ButtonGroup}
								id="dropdown-button-drop-down"
								drop="down"
								variant="primary btn-square"
								size="sm"
								title="Member"
								className=""
							>
								<Dropdown.Item href="#">Member</Dropdown.Item>
								<Dropdown.Item href="#">Guest</Dropdown.Item>
								<Dropdown.Item href="#">Admin</Dropdown.Item>
							</SplitButton>
							<button class="btn btn-primary" type="button">Invite</button>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12">
				<div className="card">
					<div className="card-body">
						<div className="table-responsive pb-5 mb-5">
							<div id="permission_data" className="dataTables_wrapper pb-5 mb-5">
								<table
									className="display w-100 dataTable pb-5 mb-5"
									id="example5"
									role="grid"
									aria-describedby="example5_info"
								>
									<thead>
										<tr role="row">
											<th className="sorting" style={{ width: "200px" }}>Name</th>
											<th className="sorting" style={{ width: "220px" }}>Email</th>
											<th className="sorting" style={{ width: "100px" }}>Role</th>
											<th className="sorting" style={{ width: "80px" }}>Last Active</th>
											<th className="sorting" style={{ width: "50px" }}>Settings</th>
										</tr>
									</thead>

									<tbody>
										<tr className="odd" role="row">
											<td>
												<div className="d-flex align-items-center flex-wrap">
													<div>
														<div className="mt-1 fs-12 font-w500">
															<span className="d-block font-w600 fs-16 text-primary">Gajendran Billvamangal</span>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div>
													<span className="fs-16 font-w500 text-black me-2">gajendran.billvamangal@thiscompany.com</span>
												</div>
											</td>
											<td>
												<SplitButton
													as={ButtonGroup}
													id="dropdown-button-drop-down"
													drop="down"
													variant="primary"
													size="sm"
													title="Member"
													className="mt-1 me-1"
												>
													<Dropdown.Item href="#">Member</Dropdown.Item>
													<Dropdown.Item href="#">Guest</Dropdown.Item>
													<Dropdown.Item href="#">Admin</Dropdown.Item>
													<div className="dropdown-divider"></div>
													<Dropdown.Item href="#">Remove Access</Dropdown.Item>
												</SplitButton>
											</td>
											<td>
												<div>
													<span className="fs-12 font-w500 text-primary me-2">Aug 12 2022</span>
												</div>
											</td>
											<td>
												<div>
													<a class="btn btn-danger shadow btn-xs sharp" href=""><i class="fa fa-trash"></i></a>
												</div>
											</td>
										</tr>
										<tr className="even" role="row">
											<td>
												<div className="d-flex align-items-center flex-wrap">
													<div>
														<div className="mt-1 fs-12 font-w500">
															<span className="d-block font-w600 fs-16 text-primary">Gajendran Billvamangal</span>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div>
													<span className="fs-16 font-w500 text-black me-2">gajendran.billvamangal@thiscompany.com</span>
												</div>
											</td>
											<td>
												<SplitButton
													as={ButtonGroup}
													id="dropdown-button-drop-down"
													drop="down"
													variant="primary"
													size="sm"
													title="Member"
													className="mt-1 me-1"
												>
													<Dropdown.Item href="#">Member</Dropdown.Item>
													<Dropdown.Item href="#">Guest</Dropdown.Item>
													<Dropdown.Item href="#">Admin</Dropdown.Item>
													<div className="dropdown-divider"></div>
													<Dropdown.Item href="#">Remove Access</Dropdown.Item>
												</SplitButton>
											</td>
											<td>
												<div>
													<span className="fs-12 font-w500 text-primary me-2">Aug 12 2022</span>
												</div>
											</td>
											<td>
												<div>
													<a class="btn btn-danger shadow btn-xs sharp" href=""><i class="fa fa-trash"></i></a>
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
		</>
	)
}
export default UserPermissions;