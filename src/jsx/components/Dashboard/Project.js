import React, {useState} from 'react';
import {Link} from 'react-router-dom';	
import {Dropdown, Nav,Tab} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import swal from "sweetalert";
import {nanoid} from 'nanoid';

///Import
import {
	TabCard,PendingTab,
	ProgressTab,CloseTab
}
from './Project/Project';
	
import amazonLogo from './../../../images/freight/amazon.png';

const Orders = () =>{
	
	const [addCard, setAddCard] = useState(false);

	//Add Order 
    const [addFormData, setAddFormData ] = useState({
		productId:'',
		bpOrderID: '',
		orderUnits: '',
		shippingMode: '',
		destination: '',
    }); 
    // Add Product function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.name === ""){
            error = true;
			errorMsg = 'Please fill Name';
        }else if(addFormData.productSKU === ""){
            error = true;
			errorMsg = 'Please fill profile.';
        }
		else if(addFormData.productThumb === ""){
            error = true;
			errorMsg = 'Please attached image';
        }
        if(!error){
            const newProduct = {
                id: nanoid(),
				productId: addFormData.productId,
				bpOrderID: addFormData.bpOrderID,
				orderUnits: addFormData.orderUnits,
				shippingMode: addFormData.shippingMode,
				destination: addFormData.destination,

            };
            setAddCard(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.name = addFormData.productSKU = addFormData.productThumb  = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    }; 
	

	return(
		<>
			<Tab.Container defaultActiveKey="AllStatus">
				<div className="project-page d-flex justify-content-between align-items-center flex-wrap">
					<div className="input-group search po-search contacts-search mb-4">
						<input type="text" className="form-control" placeholder="Search here..." />
						<span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
					</div>
					<div className="project mb-4">
						<Nav as="ul" className="nav nav-tabs" role="tablist">
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="AllStatus" >All Status</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link"  eventKey="OnProgress">On Progress</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="Pending">Pending</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="Closed">Closed</Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
					<div className="mb-4">
						<Link to={"#"} className="btn btn-primary btn-rounded fs-18" onClick={()=> setAddCard(true)}>+ New Order</Link>
						<Modal className="modal fade"  show={addCard} onHide={setAddCard} size="lg">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Create New Order</h4>
									<button type="button" className="btn-close" onClick={()=> setAddCard(false)}></button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											 <div className="form-group mb-3">
												<label className="text-black font-w500">Name</label>
												<div className="contact-name">
													<input type="text"  className="form-control" autoComplete="off"
														name="productName" required="required"
														onChange={handleAddFormChange}
														placeholder="name"
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">SKU</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autoComplete="off"
														name="productSKU" required="required"
														onChange={handleAddFormChange}
														placeholder="SKU"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit}>Add</button>  
									<button type="button" onClick={()=> setAddCard(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
								</div>
							</form>
						</Modal>
					</div>
				</div>	
				<div className="row">
					<div className="col-xl-12">
						<Tab.Content>	
							<Tab.Pane eventKey="AllStatus">	
								{TabCard.map((item,index)=>(
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
													<div className="d-flex justify-content-end align-items-center flex-wrap">
														<div className="me-2"><a className="badge badge-outline-primary badge-circle"><i className="fs-22 fas fa-file-pdf"></i></a></div>
														<div className="d-flex justify-content-end project-btn">
															{item.status}
														</div>	
													</div>
												</div>
											</div>	
										</div>	
									</div>
								))}	
							</Tab.Pane>	
							<Tab.Pane eventKey="OnProgress">	
								<ProgressTab />	
							</Tab.Pane>	
							<Tab.Pane eventKey="Pending">	
								<PendingTab />
							</Tab.Pane>	
							<Tab.Pane eventKey="Closed">	
								<CloseTab />
							</Tab.Pane>	
						</Tab.Content>
					</div>	
					<div className="progect-pagination d-flex justify-content-between align-items-center flex-wrap">
						<h4 className="mb-3">Showing 10 from 160 data</h4>
						<ul className="pagination mb-3">
							<li className="page-item page-indicator">
								<Link to={"#"} className="page-link">
									<i className="fas fa-angle-double-left me-2"></i>Previous
								</Link>
							</li>
							<li className="page-item">
								<Link to={"#"} className="active">1</Link>
								<Link to={"#"} className="">2</Link>
								<Link to={"#"} className="">3</Link>
								<Link to={"#"} className="">4</Link>
							</li>
							<li className="page-item page-indicator">
								<Link to={"#"} className="page-link">
									Next<i className="fas fa-angle-double-right ms-2"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>	
			</Tab.Container>	
		</>
	)
}
export default Orders;