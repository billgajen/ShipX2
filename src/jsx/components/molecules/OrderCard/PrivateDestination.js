import React from "react";

const PrivateDestination = ({ warehouseName, firstLine, city, county, zipCode, country  }) => {
  return (
    <>
      <div className="d-flex align-items-center project-image mb-3">
        <div className="circle-icon">
          <span className="ms-0 me-3">
            <i class="fas fa-warehouse"></i>
          </span>
        </div>
        <div>
          <h3 className="fs-16 text-black font-w600 mb-0">Destination</h3>
        </div>
      </div>
      <div className="my-warehouse-address ms-2">
        <span className="d-block fs-12 text-black font-w600">{warehouseName}</span>
        <span class="d-block fs-12 font-w400 mb-0">{firstLine}</span>
        <span class="d-block fs-12 font-w400 mb-0">{city}, {county} {zipCode}, {country}</span>
      </div>
    </>
  );
};

export default PrivateDestination;
