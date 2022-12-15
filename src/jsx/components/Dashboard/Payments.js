import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const Payments = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#payments_data tbody tr")
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
    setData(document.querySelectorAll("#payments_data tbody tr"));
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
						<h2 className="fs-32 font-w700"><span className="fs-18 font-w500 local_currency">$</span>19,400.00</h2>
						<span className="fs-18 font-w500 d-block">Order Total</span>
						<span className="d-block fs-16 font-w400">Last 30 Days</span>
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
						<h2 className="fs-32 font-w700 text-danger"><span className="fs-18 font-w500 local_currency">$</span>7400.00</h2>
						<span className="fs-18 font-w500 d-block">Balance</span>
						<span className="d-block fs-16 font-w400">Total</span>
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
						<h2 className="fs-32 font-w700">9</h2>
						<span className="fs-18 font-w500 d-block">New Orders</span>
						<span className="d-block fs-16 font-w400">Last 30 Days</span>
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
						<h2 className="fs-32 font-w700">9000</h2>
						<span className="fs-18 font-w500 d-block">Units Ordered</span>
						<span className="d-block fs-16 font-w400"><small className="text-success">+2%</small> Last 30 Days</span>
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
            <div id="payments_data" className="dataTables_wrapper">
              <table
                className="display w-100 dataTable "
                id="example5"
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th className="sorting_asc" style={{ width: "100px" }}>Order #</th>
                    <th className="sorting" style={{ width: "250px" }}>
                    	Product
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">SKU</span>
		            		<span className=""> / ASIN</span>
		            	</div>
                    </th>
                    <th className="sorting" style={{ width: "100px" }}>Total<span className="d-block fs-14 font-w500 text-primary">Paid</span></th>
                    <th className="sorting" style={{ width: "100px" }}>Balance</th>
                    <th className="sorting" style={{ width: "100px" }}>Invoice<span className="d-block fs-14 font-w500 text-primary">Inv No.</span></th>
                    <th className="sorting" style={{ width: "100px" }}>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="odd" role="row">
		            <td><Link to={"/order-detail"} className="" data-name=""><span className="fs-14 font-w600 text-primary">PO-000441429</span></Link></td>
		            <td className="text-black">
		            	<Link to={"/order-detail"} className="" data-name="">Womens Vintage Retro Body..</Link>
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">L003 DRESS01</span>
		            		<span className=""> / B09ABC2327</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">
		            		<span className="fs-16 font-w500 local_currency">$</span>3000.00
		            	</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary local_currency">$</span>
		            		<span className="fs-14 font-w500 text-primary me-2">0.00</span>
		            		<button type="button" class="btn btn-outline-primary btn-xxs edit_paid"><i class="far fa-edit"></i></button>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-danger"><span className="fs-16 font-w500 local_currency">$</span>3000.00</h2></td>
		            <td>
						<div class="final-badge"><span class="badge badge-sm text-black border mt-0"><i class="far fa-file-alt me-3"></i>22.11.2022</span></div>
						<span className="fs-12 font-w400 text-dark ms-4">INV 123ABC</span>
					</td>
		            <td>
		              <Badge variant="danger badge-xl light">Pending</Badge>
		            </td>
                  </tr>
                  <tr className="even" role="row">
		            <td><Link to={"/order-detail"} className="" data-name=""><span className="fs-14 font-w600 text-primary">PO-000441429</span></Link></td>
		            <td className="text-black">
		            	<Link to={"/order-detail"} className="" data-name="">Womens Vintage Retro Body..</Link>
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">L003 DRESS01</span>
		            		<span className=""> / B09ABC2327</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">
		            		<span className="fs-16 font-w500 local_currency">$</span>3000.00
		            	</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary local_currency">$</span>
		            		<span className="fs-14 font-w500 text-primary me-2">2000.00</span>
		            		<button type="button" class="btn btn-outline-primary btn-xxs edit_paid"><i class="far fa-edit"></i></button>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-primary"><span className="fs-16 font-w500 local_currency">$</span>1000.00</h2></td>
		            <td>
						<div class="final-badge"><span class="badge badge-sm text-black border mt-0"><i class="far fa-file-alt me-3"></i>22.11.2022</span></div>
						<span className="fs-12 font-w400 text-dark ms-4">INV 123ABC</span>
					</td>
		            <td>
		              <Badge variant="warning badge-xl light">Part Paid</Badge>
		            </td>
                  </tr>
                  <tr className="odd" role="row">
		            <td><Link to={"/order-detail"} className="" data-name=""><span className="fs-14 font-w600 text-primary">PO-000441429</span></Link></td>
		            <td className="text-black">
		            	<Link to={"/order-detail"} className="" data-name="">Womens Vintage Retro Body..</Link>
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">L003 DRESS01</span>
		            		<span className=""> / B09ABC2327</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">
		            		<span className="fs-16 font-w500 local_currency">$</span>3000.00
		            	</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary local_currency">$</span>
		            		<span className="fs-14 font-w500 text-primary me-2">3000.00</span>
		            		<button type="button" class="btn btn-outline-primary btn-xxs edit_paid"><i class="far fa-edit"></i></button>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-success"><span className="fs-16 font-w500 local_currency">$</span>0.00</h2></td>
		            <td>
						<div class="final-badge"><span class="badge badge-sm text-black border mt-0"><i class="far fa-file-alt me-3"></i>22.11.2022</span></div>
						<span className="fs-12 font-w400 text-dark ms-4">INV 123ABC</span>
					</td>
		            <td>
		              <Badge variant="success badge-xl light">Complete</Badge>
		            </td>
                  </tr>
                  <tr className="even" role="row">
		            <td><Link to={"/order-detail"} className="" data-name=""><span className="fs-14 font-w600 text-primary">PO-000441429</span></Link></td>
		            <td className="text-black">
		            	<Link to={"/order-detail"} className="" data-name="">Womens Vintage Retro Body..</Link>
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">L003 DRESS01</span>
		            		<span className=""> / B09ABC2327</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">
		            		<span className="fs-16 font-w500 local_currency">$</span>3000.00
		            	</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary local_currency">$</span>
		            		<span className="fs-14 font-w500 text-primary me-2">1000.00</span>
		            		<button type="button" class="btn btn-outline-primary btn-xxs edit_paid"><i class="far fa-edit"></i></button>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-primary"><span className="fs-16 font-w500 local_currency">$</span>2000.00</h2></td>
		            <td>
						<div class="final-badge"><span class="badge badge-sm text-black border mt-0"><i class="far fa-file-alt me-3"></i>22.11.2022</span></div>
						<span className="fs-12 font-w400 text-dark ms-4">INV 123ABC</span>
					</td>
		            <td>
		              <Badge variant="warning badge-xl light">Part Paid</Badge>
		            </td>
                  </tr>
                  <tr className="odd" role="row">
		            <td><Link to={"/order-detail"} className="" data-name=""><span className="fs-14 font-w600 text-primary">PO-000441429</span></Link></td>
		            <td className="text-black">
		            	<Link to={"/order-detail"} className="" data-name="">Womens Vintage Retro Body..</Link>
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">L003 DRESS01</span>
		            		<span className=""> / B09ABC2327</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">
		            		<span className="fs-16 font-w500 local_currency">$</span>3000.00
		            	</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary local_currency">$</span>
		            		<span className="fs-14 font-w500 text-primary me-2">0.00</span>
		            		<button type="button" class="btn btn-outline-primary btn-xxs edit_paid"><i class="far fa-edit"></i></button>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-danger"><span className="fs-16 font-w500 local_currency">$</span>3000.00</h2></td>
		            <td>
						<div class="final-badge"><span class="badge badge-sm text-black border mt-0"><i class="far fa-file-alt me-3"></i>22.11.2022</span></div>
						<span className="fs-12 font-w400 text-dark ms-4">INV 123ABC</span>
					</td>
		            <td>
		              <Badge variant="danger badge-xl light">Pending</Badge>
		            </td>
                  </tr>
                  <tr className="even" role="row">
		            <td><Link to={"/order-detail"} className="" data-name=""><span className="fs-14 font-w600 text-primary">PO-000441429</span></Link></td>
		            <td className="text-black">
		            	<Link to={"/order-detail"} className="" data-name="">Womens Vintage Retro Body..</Link>
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">L003 DRESS01</span>
		            		<span className=""> / B09ABC2327</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">
		            		<span className="fs-16 font-w500 local_currency">$</span>3000.00
		            	</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary local_currency">$</span>
		            		<span className="fs-14 font-w500 text-primary me-2">2000.00</span>
		            		<button type="button" class="btn btn-outline-primary btn-xxs edit_paid"><i class="far fa-edit"></i></button>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-primary"><span className="fs-16 font-w500 local_currency">$</span>1000.00</h2></td>
		            <td>
						<div class="final-badge"><span class="badge badge-sm text-black border mt-0"><i class="far fa-file-alt me-3"></i>22.11.2022</span></div>
						<span className="fs-12 font-w400 text-dark ms-4">INV 123ABC</span>
					</td>
		            <td>
		              <Badge variant="warning badge-xl light">Part Paid</Badge>
		            </td>
                  </tr>
                  <tr className="odd" role="row">
		            <td><Link to={"/order-detail"} className="" data-name=""><span className="fs-14 font-w600 text-primary">PO-000441429</span></Link></td>
		            <td className="text-black">
		            	<Link to={"/order-detail"} className="" data-name="">Womens Vintage Retro Body..</Link>
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">L003 DRESS01</span>
		            		<span className=""> / B09ABC2327</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">
		            		<span className="fs-16 font-w500 local_currency">$</span>3000.00
		            	</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary local_currency">$</span>
		            		<span className="fs-14 font-w500 text-primary me-2">3000.00</span>
		            		<button type="button" class="btn btn-outline-primary btn-xxs edit_paid"><i class="far fa-edit"></i></button>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-success"><span className="fs-16 font-w500 local_currency">$</span>0.00</h2></td>
		            <td>
						<div class="final-badge"><span class="badge badge-sm text-black border mt-0"><i class="far fa-file-alt me-3"></i>22.11.2022</span></div>
						<span className="fs-12 font-w400 text-dark ms-4">INV 123ABC</span>
					</td>
		            <td>
		              <Badge variant="success badge-xl light">Complete</Badge>
		            </td>
                  </tr>
                  <tr className="even" role="row">
		            <td><Link to={"/order-detail"} className="" data-name=""><span className="fs-14 font-w600 text-primary">PO-000441429</span></Link></td>
		            <td className="text-black">
		            	<Link to={"/order-detail"} className="" data-name="">Womens Vintage Retro Body..</Link>
		            	<div className="mt-1 fs-12 font-w500">
		            		<span className="font-w600 text-primary">L003 DRESS01</span>
		            		<span className=""> / B09ABC2327</span>
		            	</div>
		            </td>
		            <td>
		            	<h2 className="fs-22 font-w700 mb-0">
		            		<span className="fs-16 font-w500 local_currency">$</span>3000.00
		            	</h2>
		            	<div>
		            		<span className="fs-14 font-w500 text-primary local_currency">$</span>
		            		<span className="fs-14 font-w500 text-primary me-2">1000.00</span>
		            		<button type="button" class="btn btn-outline-primary btn-xxs edit_paid"><i class="far fa-edit"></i></button>
		            	</div>
		            </td>
		            <td><h2 className="fs-22 font-w700 mb-0 text-primary"><span className="fs-16 font-w500 local_currency">$</span>2000.00</h2></td>
		            <td>
						<div class="final-badge"><span class="badge badge-sm text-black border mt-0"><i class="far fa-file-alt me-3"></i>22.11.2022</span></div>
						<span className="fs-12 font-w400 text-dark ms-4">INV 123ABC</span>
					</td>
		            <td>
		              <Badge variant="warning badge-xl light">Part Paid</Badge>
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
                    to="/payments"
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
                        to="/payments"
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
                    to="/payments"
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

export default Payments;
