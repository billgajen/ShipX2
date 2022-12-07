import React from 'react';
import {Link} from 'react-router-dom';	
import {Dropdown} from 'react-bootstrap';

//Images
import product1 from './../../../../images/product/4.jpg';
import supplier1 from './../../../../images/customers/11.jpg';
import freight1 from './../../../../images/freight/dhl.png';
import amazonLogo from './../../../../images/freight/amazon.png';
import cust11 from './../../../../images/customers/11.jpg';
import cust22 from './../../../../images/customers/22.jpg';
import cust33 from './../../../../images/customers/33.jpg';
import cust44 from './../../../../images/customers/44.jpg';
import cust55 from './../../../../images/customers/55.jpg';

const PendingBlog =()=>{
	return(
		<>
			<Link to={"#"} className="btn btn-sm btn-warning fs-18 font-w600 btn-rounded">PENDING<i class="fas fa-chevron-right ms-2"></i></Link>
		</>
	)
}
const ProgressBlog =() =>{
	return(
		<>
			<Link to={"#"} className=" btn btn-sm bg-progress fs-18 font-w600 text-nowrap btn-rounded">ON PROGRESS<i class="fas fa-chevron-right ms-2"></i></Link>
		</>
	)
}
const CloseBlog =()=>{
	return(
		<>
			<Link to={"#"} className=" btn btn-sm bgl-success fs-18 font-w600 text-nowrap btn-rounded">CLOSED<i class="fas fa-chevron-right ms-2"></i></Link>
		</>
	)
}

const TabCard = [
	{
		bpOrderID: 'PO-000441429',
		productThumb: product1,
		productName: 'Womens Vintage Retro Bodycon Ladies',
		productSKU: 'BL003 DRESS01',
		productASIN: 'B09ABC2327',
		supplierLogo: supplier1,
		supplierName: 'Mmondschein LLC',
		orderDate: 'Sep 8th, 2020',
		orderUnits: 5000,
		receivedUnits: 3500,
		orderCost: 9000,
		receivedPayment: 4500,
		shipmentAgentLogo: freight1,
		shipmentMasterTrackingID: '770532218138',
		amzShippingID: 'FBA16YR0BH62',
		status: <PendingBlog />,
	},
	{
		bpOrderID: 'PO-000441430',
		productThumb: product1,
		productName: 'Womens Vintage Retro Bodycon Ladies',
		productSKU: 'BL003 DRESS01',
		productASIN: 'B09ABC2327',
		supplierLogo: supplier1,
		supplierName: 'Mmondschein LLC',
		orderDate: 'Sep 8th, 2020',
		orderUnits: 5000,
		receivedUnits: 3500,
		orderCost: 9000,
		receivedPayment: 4500,
		shipmentAgentLogo: freight1,
		shipmentMasterTrackingID: '770532218138',
		amzShippingID: 'FBA16YR0BH62',
		status: <PendingBlog />,
	},
	{
		bpOrderID: 'PO-000441431',
		productThumb: product1,
		productName: 'Womens Vintage Retro Bodycon Ladies',
		productSKU: 'BL003 DRESS01',
		productASIN: 'B09ABC2327',
		supplierLogo: supplier1,
		supplierName: 'Mmondschein LLC',
		orderDate: 'Sep 8th, 2020',
		orderUnits: 5000,
		receivedUnits: 3500,
		orderCost: 9000,
		receivedPayment: 4500,
		shipmentAgentLogo: freight1,
		shipmentMasterTrackingID: '770532218138',
		amzShippingID: 'FBA16YR0BH62',
		status: <CloseBlog />,
	},
];

const TabCard2 = [
	{
		bpOrderID: 'PO-000441429',
		productThumb: product1,
		productName: 'Womens Vintage Retro Bodycon Ladies',
		productSKU: 'BL003 DRESS01',
		productASIN: 'B09ABC2327',
		supplierLogo: supplier1,
		supplierName: 'Mmondschein LLC',
		orderDate: 'Sep 8th, 2020',
		orderUnits: 5000,
		receivedUnits: 3500,
		orderCost: 9000,
		receivedPayment: 4500,
		shipmentAgentLogo: freight1,
		shipmentMasterTrackingID: '770532218138',
		amzShippingID: 'FBA16YR0BH62',
		status: <PendingBlog />,
	},
	{
		bpOrderID: 'PO-000441430',
		productThumb: product1,
		productName: 'Womens Vintage Retro Bodycon Ladies',
		productSKU: 'BL003 DRESS01',
		productASIN: 'B09ABC2327',
		supplierLogo: supplier1,
		supplierName: 'Mmondschein LLC',
		orderDate: 'Sep 8th, 2020',
		orderUnits: 5000,
		receivedUnits: 3500,
		orderCost: 9000,
		receivedPayment: 4500,
		shipmentAgentLogo: freight1,
		shipmentMasterTrackingID: '770532218138',
		amzShippingID: 'FBA16YR0BH62',
		status: <PendingBlog />,
	},
];

const TabCard3 = [
	{
		bpOrderID: 'PO-000441428',
		productThumb: product1,
		productName: 'Womens Vintage Retro Bodycon Ladies',
		productSKU: 'BL003 DRESS01',
		productASIN: 'B09ABC2327',
		supplierLogo: supplier1,
		supplierName: 'Mmondschein LLC',
		orderDate: 'Sep 8th, 2020',
		orderUnits: 5000,
		receivedUnits: 3500,
		orderCost: 9000,
		receivedPayment: 4500,
		shipmentAgentLogo: freight1,
		shipmentMasterTrackingID: '770532218138',
		amzShippingID: 'FBA16YR0BH62',
		status: <PendingBlog />,
	},
	{
		bpOrderID: 'PO-000441430',
		productThumb: product1,
		productName: 'Womens Vintage Retro Bodycon Ladies',
		productSKU: 'BL003 DRESS01',
		productASIN: 'B09ABC2327',
		supplierLogo: supplier1,
		supplierName: 'Mmondschein LLC',
		orderDate: 'Sep 8th, 2020',
		orderUnits: 5000,
		receivedUnits: 3500,
		orderCost: 9000,
		receivedPayment: 4500,
		shipmentAgentLogo: freight1,
		shipmentMasterTrackingID: '770532218138',
		amzShippingID: 'FBA16YR0BH62',
		status: <PendingBlog />,
	},
];
const TabCard4 = [
	{
		bpOrderID: 'PO-000441430',
		productThumb: product1,
		productName: 'Womens Vintage Retro Bodycon Ladies',
		productSKU: 'BL003 DRESS01',
		productASIN: 'B09ABC2327',
		supplierLogo: supplier1,
		supplierName: 'Mmondschein LLC',
		orderDate: 'Sep 8th, 2020',
		orderUnits: 5000,
		receivedUnits: 3500,
		orderCost: 9000,
		receivedPayment: 4500,
		shipmentAgentLogo: freight1,
		shipmentMasterTrackingID: '770532218138',
		amzShippingID: 'FBA16YR0BH62',
		status: <PendingBlog />,
	},
];

const ProgressTab = () => {	
	return(
		<>
			{TabCard2.map((item,index)=>(
				<div className="card" key={index}>
					<div className="card-body">
						<div className="row">
							<div className="col-xl-3  col-lg-6 col-sm-12 align-items-center product-details">
								<div className="media-body">
									<span className="text-primary d-block fs-18 font-w600 mb-1">#{item.bpOrderID}</span>
									<span className="d-block mb-2 fs-14"><i className="fas fa-calendar me-2"></i>Ordered on {item.orderDate}</span>
									<div className="d-flex project-image mb-3">
										<img src={item.productThumb} alt="" />
										<div>
											<h3 className="fs-18 text-black font-w600">{item.productName}</h3>
										</div>
									</div>
									<span className="d-block fs-12 font-w500">SKU: {item.productSKU}</span>
									<span className="d-block fs-12 font-w500">ASIN: {item.productASIN}</span>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3 order-details">
								<div className="d-flex align-items-center project-image mb-3">
									<img src={item.supplierLogo} alt="" />
									<div>
										<h3 className="fs-16 text-black font-w600 mb-0">{item.supplierName}</h3>
									</div>
								</div>
								<div className="d-flex align-items-end mt-2 justify-content-between">
									<span className="d-block fs-16 text-black font-w600 mb-0">{item.orderUnits} Units</span>
									<span>{item.orderUnits - item.receivedUnits} Remaining</span>
								</div>
								<div className="progress  mb-4">
									<div className="progress-bar progress-animated" style={{ width: (item.receivedUnits/item.orderUnits) * 100+"%" }}></div>
								</div>
								<div className="d-flex align-items-end mt-2 justify-content-between">
									<span className="d-block fs-16 text-black font-w600 mb-0">${item.orderCost}</span>
									<span>${item.orderCost - item.receivedPayment} Remaining</span>
								</div>
								<div className="progress">
									<div className="progress-bar progress-animated" style={{ width: (item.receivedPayment/item.orderCost) * 100+"%" }}></div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3">
								<div className="d-flex justify-content-between">
									<div className="d-flex align-items-center project-image mb-3">
										<img src={item.shipmentAgentLogo} alt="" />
										<div>
											<small className="d-block fs-16 font-w700">Tracking ID</small>
											<span className="d-block fs-12 font-w500">{item.shipmentMasterTrackingID}</span>
										</div>
									</div>
									<div className="project-image">
										<svg className="me-0" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="27.5" cy="27.5" r="27.5" fill="#886CC0"/>
											<g clipPath="url(#clip0)">
											<path d="M37.2961 23.6858C37.1797 23.4406 36.9325 23.2843 36.661 23.2843H29.6088L33.8773 16.0608C34.0057 15.8435 34.0077 15.5738 33.8826 15.3546C33.7574 15.1354 33.5244 14.9999 33.2719 15L27.2468 15.0007C26.9968 15.0008 26.7656 15.1335 26.6396 15.3495L18.7318 28.905C18.6049 29.1224 18.604 29.3911 18.7294 29.6094C18.8548 29.8277 19.0873 29.9624 19.3391 29.9624H26.3464L24.3054 38.1263C24.2255 38.4457 24.3781 38.7779 24.6725 38.9255C24.7729 38.9757 24.8806 39 24.9872 39C25.1933 39 25.3952 38.9094 25.5324 38.7413L37.2058 24.4319C37.3774 24.2215 37.4126 23.931 37.2961 23.6858Z" fill="white"/>
											</g>
											<defs>
											<clipPath>
											<rect width="24" height="24" fill="white" transform="translate(16 15)"/>
											</clipPath>
											</defs>
										</svg>
									</div>
								</div>
								<span className="d-block fs-16 text-black font-w600">In Transit</span>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-success" style={{ width: "50%" }}></div>
								</div>
								<span className="d-block fs-12 font-w500">Shipment has departed from a DHL facility CINCINNATI HUB - USA</span>
							</div>
							<div className="col-xl-3  col-lg-6 col-sm-6 mb-sm-4 mb-0">
								<div className="d-flex align-items-center project-image mb-3">
									<img src={amazonLogo} alt="" />
									<div>
										<small className="d-block fs-16 font-w700">Shipping ID</small>
										<span className="d-block fs-12 font-w500">{item.amzShippingID}</span>
									</div>
								</div>
								<span className="d-block fs-16 text-black font-w600">Receiving</span>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated" style={{ width: "75%" }}></div>
								</div>
								<span className="d-block fs-12 font-w500">Delivered to IND9,1151 S GRAHAM RD,GREENWOOD,IN,46143-7830,US</span>
							</div>
							<div className="col-xl-12  col-lg-6 col-sm-4 text-end">
								<div className="d-flex justify-content-end project-btn">
									{item.status}
								</div>	
							</div>
						</div>	
					</div>	
				</div>
			))}
		</>
	)
}
 
const PendingTab = () => {	
	return(
		<>
			{TabCard3.map((item,index)=>(
				<div className="card" key={index}>
					<div className="card-body">
						<div className="row">
							<div className="col-xl-3  col-lg-6 col-sm-12 align-items-center product-details">
								<div className="media-body">
									<span className="text-primary d-block fs-18 font-w600 mb-1">#{item.bpOrderID}</span>
									<span className="d-block mb-2 fs-14"><i className="fas fa-calendar me-2"></i>Ordered on {item.orderDate}</span>
									<div className="d-flex project-image mb-3">
										<img src={item.productThumb} alt="" />
										<div>
											<h3 className="fs-18 text-black font-w600">{item.productName}</h3>
										</div>
									</div>
									<span className="d-block fs-12 font-w500">SKU: {item.productSKU}</span>
									<span className="d-block fs-12 font-w500">ASIN: {item.productASIN}</span>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3 order-details">
								<div className="d-flex align-items-center project-image mb-3">
									<img src={item.supplierLogo} alt="" />
									<div>
										<h3 className="fs-16 text-black font-w600 mb-0">{item.supplierName}</h3>
									</div>
								</div>
								<div className="d-flex align-items-end mt-2 justify-content-between">
									<span className="d-block fs-16 text-black font-w600 mb-0">{item.orderUnits} Units</span>
									<span>{item.orderUnits - item.receivedUnits} Remaining</span>
								</div>
								<div className="progress  mb-4">
									<div className="progress-bar progress-animated" style={{ width: (item.receivedUnits/item.orderUnits) * 100+"%" }}></div>
								</div>
								<div className="d-flex align-items-end mt-2 justify-content-between">
									<span className="d-block fs-16 text-black font-w600 mb-0">${item.orderCost}</span>
									<span>${item.orderCost - item.receivedPayment} Remaining</span>
								</div>
								<div className="progress">
									<div className="progress-bar progress-animated" style={{ width: (item.receivedPayment/item.orderCost) * 100+"%" }}></div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3">
								<div className="d-flex justify-content-between">
									<div className="d-flex align-items-center project-image mb-3">
										<img src={item.shipmentAgentLogo} alt="" />
										<div>
											<small className="d-block fs-16 font-w700">Tracking ID</small>
											<span className="d-block fs-12 font-w500">{item.shipmentMasterTrackingID}</span>
										</div>
									</div>
									<div className="project-image">
										<svg className="me-0" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="27.5" cy="27.5" r="27.5" fill="#886CC0"/>
											<g clipPath="url(#clip0)">
											<path d="M37.2961 23.6858C37.1797 23.4406 36.9325 23.2843 36.661 23.2843H29.6088L33.8773 16.0608C34.0057 15.8435 34.0077 15.5738 33.8826 15.3546C33.7574 15.1354 33.5244 14.9999 33.2719 15L27.2468 15.0007C26.9968 15.0008 26.7656 15.1335 26.6396 15.3495L18.7318 28.905C18.6049 29.1224 18.604 29.3911 18.7294 29.6094C18.8548 29.8277 19.0873 29.9624 19.3391 29.9624H26.3464L24.3054 38.1263C24.2255 38.4457 24.3781 38.7779 24.6725 38.9255C24.7729 38.9757 24.8806 39 24.9872 39C25.1933 39 25.3952 38.9094 25.5324 38.7413L37.2058 24.4319C37.3774 24.2215 37.4126 23.931 37.2961 23.6858Z" fill="white"/>
											</g>
											<defs>
											<clipPath>
											<rect width="24" height="24" fill="white" transform="translate(16 15)"/>
											</clipPath>
											</defs>
										</svg>
									</div>
								</div>
								<span className="d-block fs-16 text-black font-w600">In Transit</span>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-success" style={{ width: "50%" }}></div>
								</div>
								<span className="d-block fs-12 font-w500">Shipment has departed from a DHL facility CINCINNATI HUB - USA</span>
							</div>
							<div className="col-xl-3  col-lg-6 col-sm-6 mb-sm-4 mb-0">
								<div className="d-flex align-items-center project-image mb-3">
									<img src={amazonLogo} alt="" />
									<div>
										<small className="d-block fs-16 font-w700">Shipping ID</small>
										<span className="d-block fs-12 font-w500">{item.amzShippingID}</span>
									</div>
								</div>
								<span className="d-block fs-16 text-black font-w600">Receiving</span>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated" style={{ width: "75%" }}></div>
								</div>
								<span className="d-block fs-12 font-w500">Delivered to IND9,1151 S GRAHAM RD,GREENWOOD,IN,46143-7830,US</span>
							</div>
							<div className="col-xl-12  col-lg-6 col-sm-4 text-end">
								<div className="d-flex justify-content-end project-btn">
									{item.status}
								</div>	
							</div>
						</div>	
					</div>	
				</div>
			))}
		</>
	)
}
const CloseTab = () => {	
	return(
		<>
			{TabCard4.map((item,index)=>(
				<div className="card" key={index}>
					<div className="card-body">
						<div className="row">
							<div className="col-xl-3  col-lg-6 col-sm-12 align-items-center product-details">
								<div className="media-body">
									<span className="text-primary d-block fs-18 font-w600 mb-1">#{item.bpOrderID}</span>
									<span className="d-block mb-2 fs-14"><i className="fas fa-calendar me-2"></i>Ordered on {item.orderDate}</span>
									<div className="d-flex project-image mb-3">
										<img src={item.productThumb} alt="" />
										<div>
											<h3 className="fs-18 text-black font-w600">{item.productName}</h3>
										</div>
									</div>
									<span className="d-block fs-12 font-w500">SKU: {item.productSKU}</span>
									<span className="d-block fs-12 font-w500">ASIN: {item.productASIN}</span>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3 order-details">
								<div className="d-flex align-items-center project-image mb-3">
									<img src={item.supplierLogo} alt="" />
									<div>
										<h3 className="fs-16 text-black font-w600 mb-0">{item.supplierName}</h3>
									</div>
								</div>
								<div className="d-flex align-items-end mt-2 justify-content-between">
									<span className="d-block fs-16 text-black font-w600 mb-0">{item.orderUnits} Units</span>
									<span>{item.orderUnits - item.receivedUnits} Remaining</span>
								</div>
								<div className="progress  mb-4">
									<div className="progress-bar progress-animated" style={{ width: (item.receivedUnits/item.orderUnits) * 100+"%" }}></div>
								</div>
								<div className="d-flex align-items-end mt-2 justify-content-between">
									<span className="d-block fs-16 text-black font-w600 mb-0">${item.orderCost}</span>
									<span>${item.orderCost - item.receivedPayment} Remaining</span>
								</div>
								<div className="progress">
									<div className="progress-bar progress-animated" style={{ width: (item.receivedPayment/item.orderCost) * 100+"%" }}></div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3">
								<div className="d-flex justify-content-between">
									<div className="d-flex align-items-center project-image mb-3">
										<img src={item.shipmentAgentLogo} alt="" />
										<div>
											<small className="d-block fs-16 font-w700">Tracking ID</small>
											<span className="d-block fs-12 font-w500">{item.shipmentMasterTrackingID}</span>
										</div>
									</div>
									<div className="project-image">
										<svg className="me-0" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="27.5" cy="27.5" r="27.5" fill="#886CC0"/>
											<g clipPath="url(#clip0)">
											<path d="M37.2961 23.6858C37.1797 23.4406 36.9325 23.2843 36.661 23.2843H29.6088L33.8773 16.0608C34.0057 15.8435 34.0077 15.5738 33.8826 15.3546C33.7574 15.1354 33.5244 14.9999 33.2719 15L27.2468 15.0007C26.9968 15.0008 26.7656 15.1335 26.6396 15.3495L18.7318 28.905C18.6049 29.1224 18.604 29.3911 18.7294 29.6094C18.8548 29.8277 19.0873 29.9624 19.3391 29.9624H26.3464L24.3054 38.1263C24.2255 38.4457 24.3781 38.7779 24.6725 38.9255C24.7729 38.9757 24.8806 39 24.9872 39C25.1933 39 25.3952 38.9094 25.5324 38.7413L37.2058 24.4319C37.3774 24.2215 37.4126 23.931 37.2961 23.6858Z" fill="white"/>
											</g>
											<defs>
											<clipPath>
											<rect width="24" height="24" fill="white" transform="translate(16 15)"/>
											</clipPath>
											</defs>
										</svg>
									</div>
								</div>
								<span className="d-block fs-16 text-black font-w600">In Transit</span>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated bg-success" style={{ width: "50%" }}></div>
								</div>
								<span className="d-block fs-12 font-w500">Shipment has departed from a DHL facility CINCINNATI HUB - USA</span>
							</div>
							<div className="col-xl-3  col-lg-6 col-sm-6 mb-sm-4 mb-0">
								<div className="d-flex align-items-center project-image mb-3">
									<img src={amazonLogo} alt="" />
									<div>
										<small className="d-block fs-16 font-w700">Shipping ID</small>
										<span className="d-block fs-12 font-w500">{item.amzShippingID}</span>
									</div>
								</div>
								<span className="d-block fs-16 text-black font-w600">Receiving</span>
								<div className="progress mb-2">
									<div className="progress-bar progress-animated" style={{ width: "75%" }}></div>
								</div>
								<span className="d-block fs-12 font-w500">Delivered to IND9,1151 S GRAHAM RD,GREENWOOD,IN,46143-7830,US</span>
							</div>
							<div className="col-xl-12  col-lg-6 col-sm-4 text-end">
								<div className="d-flex justify-content-end project-btn">
									{item.status}
								</div>	
							</div>
						</div>	
					</div>	
				</div>
			))}
		</>
	)
}


export { 
	TabCard, PendingBlog,ProgressBlog, CloseBlog,
	PendingTab,ProgressTab,CloseTab
};