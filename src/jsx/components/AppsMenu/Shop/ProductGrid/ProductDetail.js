import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import {Dropdown} from 'react-bootstrap';
import { SRLWrapper } from "simple-react-lightbox";
import swal from "sweetalert";
import {nanoid} from 'nanoid';

import user from '../../../../../images/pic1.jpg';
import product4 from "../../../../../images/product/4.jpg";
import profile01 from "../../../../../images/profile/1.jpg";
import profile02 from "../../../../../images/profile/2.jpg";
import profile03 from "../../../../../images/profile/3.jpg";
import profile04 from "../../../../../images/profile/4.jpg";
import profile05 from "../../../../../images/profile/5.jpg";

const productBlog = [
	{id:1 , image: product4, name:'Fillow Company Profile Website Phase 0.1', profile: 'BL003 DRESS01',},
];

const ProductDetail = () => {
  const options = {
    settings: {
      overlayColor: "#000000",
    },
  };
	const [addCard, setAddCard] = useState(false);
	const [products, setProducts] = useState(productBlog);

	// delete data  
	const handleDeleteClick = (productId) => {
		const newProducts = [...products];    
		const index = products.findIndex((product)=> product.id === productId);
		newProducts.splice(index, 1);
		setProducts(newProducts);
	}
	//For Image upload in ListBlog
	const [file, setFile] = React.useState(null)
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
		setTimeout(function(){
			var src = document.getElementById("saveImageFile").getAttribute("src");
			addFormData.image = src; 
		}, 200);
  }
    
	//Add data 
	const [addFormData, setAddFormData ] = useState({
		name:'',
		profile:'',
		image:'',
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
		}else if(addFormData.profile === ""){
			error = true;
			errorMsg = 'Please fill profile.';
		}
		else if(addFormData.image === ""){
			error = true;
			errorMsg = 'Please attached image';
		}
		if(!error){
			const newProduct = {
				id: nanoid(),
				name: addFormData.name,
				profile:  addFormData.profile,
				image: addFormData.image,
			};
			const newProducts = [...products, newProduct];
			setProducts(newProducts);
			setAddCard(false);
			swal('Good job!', 'Successfully Added', "success");
			addFormData.name = addFormData.profile = addFormData.image  = '';         
			
		}else{
			swal('Oops', errorMsg, "error");
		}
	}; 
	
	//Edit Modal
	const [editModal, setEditModal] = useState(false);
    
  // Edit function editable page loop
  const [editProductId, setEditProductId] = useState(null);
 
  // Edit function button click to edit
  const handleEditClick = ( event, product) => {
      event.preventDefault();
      setEditProductId(product.id);
      const formValues = {
          name: product.name,
          profile: product.profile,
					image: product.image,
      }
      setEditFormData(formValues);
      setEditModal(true);
  };
    
  // edit  data  
  const [editFormData, setEditFormData] = useState({
      name:'',
      profile:'',
			image:'',
  })
    
	//update data function
	const handleEditFormChange = (event) => {
	    event.preventDefault();   
	    const fieldName = event.target.getAttribute('name');
	    const fieldValue = event.target.value;
	    const newFormData = {...editFormData};
	    newFormData[fieldName] = fieldValue;
	    setEditFormData(newFormData);
	};
    
	// edit form data submit
	const handleEditFormSubmit = (event) => {
	    event.preventDefault();
	    const editedProduct = {
	        id: editProductId,
	        name: editFormData.name,
	        profile: editFormData.profile,
					image: editFormData.image,
	    }
	    const newProducts = [...products];
	    const index = products.findIndex((product)=> product.id === editProductId);
	    newProducts[index] = editedProduct;
	    setProducts(newProducts);
	    setEditProductId(null);
	    setEditModal(false);    
	}

  return (
    <>
			<div className="d-flex justify-content-between align-items-center flex-wrap">
				<div className="mb-4">
					<Modal className="modal fade"  show={editModal} onHide={setEditModal} size="xl">
						<form>
							<div className="modal-header">
								<h4 className="modal-title fs-20">Edit Task</h4>
								<button type="button" className="btn-close" onClick={()=> setEditModal(false)} data-dismiss="modal"></button>
							</div>
							<div className="modal-body">
								<i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
								<div className="add-contact-box">
									<div className="add-contact-content">
										<div className="form-group mb-3">
											<label className="text-black font-w500">Name</label>
											<div className="contact-name">
												<input type="text"  className="form-control"  autoComplete="off"
													name="name" required="required"
													value={editFormData.name}
													onChange={handleEditFormChange}
												/>
											</div>
										</div>
										<div className="form-group mb-3">
											<label className="text-black font-w500">Profile</label>
											<div className="contact-name">
												<input type="text" className="form-control"  autoComplete="off"
													name="profile" required="required"
													value={editFormData.profile}
													onChange={handleEditFormChange}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="submit" className="btn btn-primary" onClick={handleEditFormSubmit}>Save</button>  
								<button type="button" onClick={()=> setEditModal(false)} className="btn btn-danger"> 
									<i className="flaticon-delete-1"></i> Discard
								</button>      
							</div>
						</form>
					</Modal>
				</div>
			</div>	
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body">
							<div className="d-flex flex-wrap">
								<div className="mb-3 col-sm-2">
									<div className="me-3">
										<img className="img-fluid" src={product4} alt="" />
									</div>
								</div>	
							{products.map((product,index)=>(
								<div className="mb-3 col-sm-9">
									<h4 className="fs-24 font-w700">{product.name}</h4>
									<span className="d-block fs-22 font-w500">SKU: BL003 DRESS01</span>
									<h3 className="d-block fs-18 font-w600">ASIN: B066HH99HH9</h3>
									<div className="d-flex align-items-center mt-4 flex-wrap">
										<div className="invite mb-3">
											<Link to={"#"} className="btn btn-primary light btn-rounded btn-md me-2 mb-2"><i className="fas fa-plus me-3 scale5"></i>Create Order</Link>
											<Link onClick={(event) => handleEditClick(event, product)} className="btn btn-outline-light btn-rounded btn-md me-2 mb-2"><i className="far fa-edit me-2 scale2"></i>Edit</Link>
										</div>
									</div>
								</div>
							))}
							</div>
						</div>
					</div>
				</div>				
			</div>
      <div className="row">
        <div className="col-xl-7">
					<div className="row">
						<div className="col-lg-5">
							<div className="text-white bg-primary card">
							<div className="card-header"><div className="text-white card-title h5">Manufacturing</div></div>
								<div className="card-body">
									<div className="profile-statistics">
										<div className="text-center">
											<div className="row">
												<div className="col text-white">
													<h2 className="m-b-0 text-white font-w700">$2.4</h2><span>per unit</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="text-white bg-primary card">
							<div className="card-header"><div className="text-white card-title h5">Shipping per Unit</div></div>
								<div className="card-body">
									<div className="profile-statistics">
										<div className="text-center">
											<div className="row">
												<div className="col text-white">
													<h3 className="m-b-0 text-white">$3.2</h3><span>Air</span>
												</div>
												<div className="col text-white">
													<h3 className="m-b-0 text-white">$2.3</h3> <span>Sea</span>
												</div>
												<div className="col text-white">
													<h3 className="m-b-0 text-white">$1.2</h3> <span>Ground</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
        </div>
        <div className="col-xl-5">
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
							<div className="card-header"><div className="card-title h5">Dimensions & Weight</div></div>
								<div className="card-body">
									<div className="profile-statistics">
										<div className="text-center">
											<div className="row">
												<div className="col ">
													<h3 className="m-b-0">120cm</h3><span>Width</span>
												</div>
												<div className="col">
													<h3 className="m-b-0">140cm</h3> <span>Height</span>
												</div>
												<div className="col">
													<h3 className="m-b-0">45cm</h3> <span>Length</span>
												</div>
												<div className="col">
													<h3 className="m-b-0">4lbs</h3> <span>Weight</span>
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
      <div className="row">
        <div className="col-xl-5">
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-header border-0 pb-0">
									<h5 className="text-primary ">Design Files</h5>
								</div>
								<div className="card-body pt-3">
									<div className="profile-interest ">
										 <SRLWrapper options={options}>
											<div className="row sp4">
												<div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
													<a href={profile02}> <img src={profile02} alt="profileImage" className="img-fluid" /> </a>
												</div>
												<div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
													<a href={profile03}> <img src={profile03} alt="profile" className="img-fluid"/></a>
												</div>
												<div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
													<a href={profile04}><img src={profile04} alt="profile" className="img-fluid" /> </a>
												</div>
												<div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
													{" "}
													<a href={profile02}><img src={profile02} alt="profile" className="img-fluid" /> </a>
												</div>
												<div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
													<a href={profile03} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col" >
														<img src={profile03} alt="profile"	className="img-fluid"/>	
													</a>
												</div>
												<div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
													<a href={profile04}	className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
														<img  src={profile04} alt="profile"	className="img-fluid"/>
													</a>
												</div>
											</div>
										</SRLWrapper>
									</div>
								</div>	
							</div>
						</div>
					</div>	
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
