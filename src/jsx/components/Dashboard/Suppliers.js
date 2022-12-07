import React from 'react';
import ProfileCard from '../molecules/ProfileCard';
import { Link } from 'react-router-dom';	
import { suppliersData } from "../../mocks/suppliersMock"

const Suppliers = () =>{
	return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="input-group contacts-search mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
          />
          <span className="input-group-text">
            <Link to={"#"}>
              <i className="flaticon-381-search-2"></i>
            </Link>
          </span>
        </div>
        <div className="mb-4">
          <Link to={"#"} className="btn btn-primary btn-rounded fs-18">
            + Add Supplier
          </Link>
        </div>
      </div>
      <div className="row">
				{suppliersData.map(supplier => {
					return (
						<ProfileCard
							key={supplier.id}
							profileName={supplier.name}
							profileType="Supplier"
							profileImage={supplier.image}
							profileLocation={supplier.location}
							profileEmail={supplier.email}
							profilePhone={supplier.phoneNumber}
							profileProducts={supplier.products}
						/>
					);
				})}
      </div>
    </>
  );
}
export default Suppliers;