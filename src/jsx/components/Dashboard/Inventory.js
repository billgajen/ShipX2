import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

import product1 from './../../../images/product/4.jpg';

const Inventory = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#inventory_data tbody tr")
  );
  const sort = 5;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#inventory_data tbody tr"));
   // chackboxFun();
  }, [test]);

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };
 

  return (
  	<>
	<div className="row">
		<div className="col-xl-3 col-sm-6">
			<div className="card">
				<div className="card-body d-flex px-4  justify-content-between">
					<div>
						<div className="">
							<h2 className="fs-32 font-w700">18446</h2>
							<span className="fs-18 font-w500 d-block">Total</span>
							<span className="d-block fs-16 font-w400">Available Units</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="col-xl-3 col-sm-6">
			<div className="card">
				<div className="card-body d-flex px-4  justify-content-between">
					<div>
						<div className="">
							<h2 className="fs-32 font-w700 text-primary">7040</h2>
							<span className="fs-18 font-w500 d-block">Total</span>
							<span className="d-block fs-16 font-w400">Inbound</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="col-xl-3 col-sm-6">
			<div className="card">
				<div className="card-body d-flex px-4  justify-content-between">
					<div>
						<div className="">
							<h2 className="fs-32 font-w700 text-danger">4</h2>
							<span className="fs-18 font-w500 d-block">Risk of going</span>
							<span className="d-block fs-16 font-w400">Out of Stock</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="col-xl-3 col-sm-6">
			<div className="card">
				<div className="card-body d-flex px-4  justify-content-between">
					<div>
						<div className="">
							<h2 className="fs-32 font-w700 text-warning">9</h2>
							<span className="fs-18 font-w500 d-block">Attention</span>
							<span className="d-block fs-16 font-w400">Order Now</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <div id="inventory_data" className="dataTables_wrapper">
              <table
                className="display w-100 dataTable "
                id="example5"
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th className="sorting" style={{ width: "150px" }}>
                    	Product
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">SKU</span>
		            		<span className=""> / ASIN</span>
		            	</div>
                    </th>
                    <th className="sorting" style={{ width: "100px" }}>Available<span className="d-block fs-14 font-w500 text-primary">Inbound</span></th>
                    <th className="sorting" style={{ width: "100px" }}>Daily Sales</th>
                    <th className="sorting" style={{ width: "180px" }}>Stock Left<span className="d-block fs-14 font-w500 text-primary">With Inbound</span></th>
                    <th className="sorting" style={{ width: "180px" }}>Order In<span className="d-block fs-14 font-w500 text-primary">With Inbound</span></th>
                    <th className="sorting" style={{ width: "100px" }}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="odd " role="row">
		            <td>
		            	<div className="d-flex align-items-center flex-wrap">
		            		<div className="project-image mb-0 align-items-center">
								<img src={product1} alt="" />
		            		</div>
		            		<div>
				            	<div className="mt-1 fs-12 font-w500">
				            		<span className="d-block font-w600 fs-14 text-primary">L003 DRESS01</span>
				            		<span className="d-block">B09ABC2327</span>
				            	</div>
		            		</div>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">1344</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary me-2">2000</span>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-black">112</h2></td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0 text-warning">12 <span className="fs-16 font-w600">Days</span></h2>
		            	<div>
		            		<span className="fs-12 font-w500 text-primary me-2">29 Days with inbound</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0 text-warning">0 <span className="fs-16 font-w600">Days</span></h2>
		            	<div>
		            		<span className="fs-12 font-w500 text-primary me-2">12 Days with inbound</span>
		            	</div>
		            </td>
		            <td>
		            	<Badge variant="warning badge-xl light">Order Now</Badge>
		            </td>
                  </tr>
                  <tr className="even" role="row">
		            <td>
		            	<div className="d-flex align-items-center flex-wrap">
		            		<div className="project-image mb-0 align-items-center">
								<img src={product1} alt="" />
		            		</div>
		            		<div>
				            	<div className="mt-1 fs-12 font-w500">
				            		<span className="d-block font-w600 fs-14 text-primary">L003 DRESS01</span>
				            		<span className="d-block">B09ABC2327</span>
				            	</div>
		            		</div>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">1490</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary me-2">0</span>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-black">11</h2></td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0 text-success">5 <span className="fs-16 font-w600">Months</span></h2>
		            	<div>
		            		<span className="fs-12 font-w500 text-primary me-2">5 Months with inbound</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0 text-success">4 <span className="fs-16 font-w600">Months</span></h2>
		            	<div>
		            		<span className="fs-12 font-w500 text-primary me-2">4 Months with inbound</span>
		            	</div>
		            </td>
		            <td>
		              <Badge variant="success badge-xl light">Good Stand</Badge>
		            </td>
                  </tr>
                  <tr className="odd" role="row">
		            <td>
		            	<div className="d-flex align-items-center flex-wrap">
		            		<div className="project-image mb-0 align-items-center">
								<img src={product1} alt="" />
		            		</div>
		            		<div>
				            	<div className="mt-1 fs-12 font-w500">
				            		<span className="d-block font-w600 fs-14 text-primary">L003 DRESS01</span>
				            		<span className="d-block">B09ABC2327</span>
				            	</div>
		            		</div>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">1130</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary me-2">0</span>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-black">112</h2></td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0 text-danger">12 <span className="fs-16 font-w600">Days</span></h2>
		            	<div>
		            		<span className="fs-12 font-w500 text-primary me-2">12 Days with inbound</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0 text-danger">0 <span className="fs-16 font-w600">6 Days Out of stock</span></h2>
		            	<div>
		            		<span className="fs-12 font-w500 text-primary me-2">-6 Days with inbound</span>
		            	</div>
		            </td>
		            <td>
		              <Badge variant="danger badge-xl light">Order Now</Badge>
		            </td>
                  </tr>
                  <tr className="even" role="row">
		            <td>
		            	<div className="d-flex align-items-center flex-wrap">
		            		<div className="project-image mb-0 align-items-center">
								<img src={product1} alt="" />
		            		</div>
		            		<div>
				            	<div className="mt-1 fs-12 font-w500">
				            		<span className="d-block font-w600 fs-14 text-primary">L003 DRESS01</span>
				            		<span className="d-block">B09ABC2327</span>
				            	</div>
		            		</div>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">1490</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary me-2">0</span>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-black">11</h2></td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0 text-success">5 <span className="fs-16 font-w600">Months</span></h2>
		            	<div>
		            		<span className="fs-12 font-w500 text-primary me-2">5 Months with inbound</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0 text-success">4 <span className="fs-16 font-w600">Months</span></h2>
		            	<div>
		            		<span className="fs-12 font-w500 text-primary me-2">4 Months with inbound</span>
		            	</div>
		            </td>
		            <td>
		              <Badge variant="success badge-xl light">Good Stand</Badge>
		            </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                <div className="dataTables_info">
                  Showing {activePag.current * sort + 1} to{" "}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{" "}
                  of {data.length} entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/inventory"
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }
                  >
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to="/inventory"
                        className={`paginate_button  ${
                          activePag.current === i ? "current" : ""
                        } `}
                        onClick={() => onClick(i)}
                      >
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    className="paginate_button next"
                    to="/inventory"
                    onClick={() =>
                      activePag.current + 1 < paggination.length &&
                      onClick(activePag.current + 1)
                    }
                  >
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                  </Link>
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

export default Inventory;
