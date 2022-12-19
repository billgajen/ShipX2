import React from "react";
import Status from "../../elements/Status/Status";
import { Link } from "react-router-dom";

const OrderCard = ({
	orderId,
	orderDate,
	productThumb,
	productName,
	productSKU,
	productASIN,
	supplierLogo,
	supplierName,
	orderUnits,
	receivedUnits,
	orderCost,
	receivedPayment,
	shipmentAgentLogo,
	shipmentMasterTrackingID,
	destinationLogo,
	destinationShippingID,
	orderStatus,
	orderStatusColor,
}) => {
	const getFormattedText = (str) => {
		let i,
		frags = str.split("_");
		for (i = 0; i < frags.length; i++) {
			frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].substr(1).toLowerCase();
		}
		return frags.join(" ");
	}
	const formattedStatusText = getFormattedText(orderStatus);

	return (
		<div className="card">
			<div className="card-body">
				<div className="row">
					<div className="col-xl-3  col-lg-6 col-sm-12 align-items-center product-details">
						<div className="media-body">
							<span className="text-primary d-block fs-18 font-w600 mb-1">
								#{orderId}
							</span>
							<span className="d-block mb-2 fs-14">
								<i className="fas fa-calendar me-2"></i>Ordered on {orderDate}
							</span>
							<div className="d-flex align-items-center project-image mb-3">
								<img src={productThumb} alt="Product Thumbnail" />
								<div>
									<h3 className="fs-18 text-black font-w600 mb-0">{productName}</h3>
								</div>
							</div>
							<div class="mt-1 fs-14 font-w500 mb-2"><span class="font-w600 text-primary">{productSKU}</span><span class=""> / {productASIN}</span></div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3 order-details">
						<div className="d-flex align-items-center project-image mb-3">
							<img src={supplierLogo} alt="" />
							<div>
								<h3 className="fs-16 text-black font-w600 mb-0">
									{supplierName}
								</h3>
							</div>
						</div>
						<div className="d-flex align-items-end mt-2 justify-content-between">
							<span className="d-block fs-16 text-black font-w600 mb-0">
								{orderUnits} Units
							</span>
							<span>{orderUnits - receivedUnits} Remaining</span>
						</div>
						<div className="progress  mb-4">
							<div
								className="progress-bar progress-animated"
								style={{
									width: (receivedUnits / orderUnits) * 100 + "%",
								}}
							></div>
						</div>
						<div className="d-flex align-items-end mt-2 justify-content-between">
							<span className="d-block fs-16 text-black font-w600 mb-0">
								${orderCost}
							</span>
							<span>${orderCost - receivedPayment} Remaining</span>
						</div>
						<div className="progress">
							<div
								className="progress-bar progress-animated"
								style={{
									width: (receivedPayment / orderCost) * 100 + "%",
								}}
							></div>
						</div>
						---
						<div className="invite mb-0">
							<Link to={"#"} className="btn btn-xs btn-primary light btn-rounded me-2 mb-0"><i className="fa fa-plus me-3 scale3"></i>Upload Invoice</Link>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3">
						<div className="d-flex justify-content-between">
							<div className="d-flex align-items-center project-image mb-3">
								<img src={shipmentAgentLogo} alt="" />
								<div>
									<small className="d-block fs-16 font-w700">Tracking ID</small>
									<span className="d-block fs-12 font-w500">
										{shipmentMasterTrackingID}
									</span>
								</div>
							</div>
							<div className="circle-icon">
									<span className="ms-0"><i class="fas fa-plane"></i></span>
							</div>
						</div>
						<span className="d-block fs-16 text-black font-w600">
							In Transit
						</span>
						<div className="progress mb-2">
							<div
								className="progress-bar progress-animated bg-success"
								style={{ width: "50%" }}
							></div>
						</div>
						<span className="d-block fs-12 font-w500">
							Shipment has departed from a DHL facility CINCINNATI HUB - USA
						</span>
						--
						<div className="d-flex align-items-center project-image mb-4">
							<div className="circle-icon">
									<span className="ms-0 me-3"><i class="fas fa-truck"></i></span>
							</div>
							<div>
								<h3 className="fs-16 text-black font-w600 mb-0">Shipping Mode</h3>
								<span className="d-block fs-12 font-w500">Land</span>
							</div>
						</div>
						<div className="invite mb-0">
							<Link to={"#"} className="btn btn-xs btn-primary light btn-rounded me-2 mb-0"><i className="fa fa-plus me-3 scale3"></i>Tracking Details</Link>
						</div>
					</div>
					<div className="col-xl-3  col-lg-6 col-sm-6 mb-sm-4 mb-0">
						<div className="d-flex align-items-center project-image mb-3">
							<img src={destinationLogo} alt="" />
							<div>
								<small className="d-block fs-16 font-w700">Shipping ID</small>
								<span className="d-block fs-12 font-w500">
									{destinationShippingID}
								</span>
							</div>
						</div>
						<span className="d-block fs-16 text-black font-w600">
							Receiving
						</span>
						<div className="progress mb-2">
							<div
								className="progress-bar progress-animated"
								style={{ width: "75%" }}
							></div>
						</div>
						<span className="d-block fs-12 font-w500">
							Delivered to IND9,1151 S GRAHAM RD,GREENWOOD,IN,46143-7830,US
						</span>
						---
						<div className="d-flex align-items-center project-image mb-4">
							<img src={destinationLogo} alt="" />
							<div>
								<small className="d-block fs-16 font-w700">Send to Amazon</small>
							</div>
						</div>
						<div className="invite mb-0">
							<Link to={"#"} className="btn btn-xs btn-danger light btn-rounded me-2 mb-0"><i className="fab fa-amazon me-3 scale3"></i>Create Label</Link>
						</div>
						---
						<div className="d-flex align-items-center project-image mb-3">
							<div className="circle-icon">
									<span className="ms-0 me-3"><i class="fas fa-warehouse"></i></span>
							</div>
							<div>
								<h3 className="fs-16 text-black font-w600 mb-0">Destination</h3>
							</div>
						</div>
						<div className="my-warehouse-address ms-2">
							<span className="d-block fs-12 text-black font-w600">NETDIRECT DISTRIBUTION, LLC</span>
							<span class="d-block fs-12 font-w400 mb-0">9360 Federal Blvd</span>
							<span class="d-block fs-12 font-w400 mb-0">Denver, CO 80260, US</span>
						</div>
					</div>
					<div className="col-xl-12  col-lg-6 col-sm-4 text-end">
						<div className="d-flex justify-content-end align-items-center flex-wrap">
							<div className="circle-icon circle-icon--medium">
								<Link to={"#"} className="ms-0 me-3"><i class="fas fa-file-pdf"></i></Link>
							</div>
							<div className="circle-icon circle-icon--medium">
								<Link to={"#"} className="ms-0 me-3"><i class="fas fa-envelope"></i></Link>
							</div>
							<div className="d-flex justify-content-end project-btn">
								<Status text={formattedStatusText} color={orderStatusColor} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;