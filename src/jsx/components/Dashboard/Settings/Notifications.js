import React from 'react';

//Images

const Notifications = () => {
	return (
		<>
			<div className="row">
				<div className="col-xl-6 col-lg-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Email notifications</h4>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-sm-12">
									<div className="row mb-3">
										<div className="col-sm-4">
											<div>
												<small class="d-block fs-16 font-w700">Orders</small>
											</div>
										</div>
										<div className="col-sm-8">
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when new order received [for supplier]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when Supplier upload Invoice
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when marked 'payment made' [for supplier]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when marked payment updated [for supplier]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when amazon label created [for supplier]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when a note added [only when offline] [both]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when batch information added
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when file uploaded [both]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when order status updated [both]
												</label>
											</div>
										</div>
									</div>
									<div className="row mb-3">
										<div className="col-sm-4">
											<div>
												<small class="d-block fs-16 font-w700">Inventory</small>
											</div>
										</div>
										<div className="col-sm-8">
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when Risk of going out of stock
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when attention needed
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Push notifications</h4>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-sm-12">
									<div className="row mb-3">
										<div className="col-sm-4">
											<div>
												<small class="d-block fs-16 font-w700">Orders</small>
											</div>
										</div>
										<div className="col-sm-8">
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when new order received [for supplier]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when Supplier upload Invoice
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when marked 'payment made' [for supplier]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when marked payment updated [for supplier]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when amazon label created [for supplier]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when a note added [only when offline] [both]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when batch information added
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when file uploaded [both]
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when order status updated [both]
												</label>
											</div>
										</div>
									</div>
									<div className="row mb-3">
										<div className="col-sm-4">
											<div>
												<small class="d-block fs-16 font-w700">Inventory</small>
											</div>
										</div>
										<div className="col-sm-8">
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when Risk of going out of stock
												</label>
											</div>
											<div className="form-check custom-checkbox mb-1 checkbox-info">
												<input
													type="checkbox"
													defaultChecked
													className="form-check-input"
													id="customCheckBox2"
													required
												/>
												<label
													className="form-check-label"
													htmlFor="customCheckBox2"
												>
													Email when attention needed
												</label>
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
export default Notifications;