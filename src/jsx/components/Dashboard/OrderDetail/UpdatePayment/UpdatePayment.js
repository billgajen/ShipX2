import React from "react";
import   DatePicker  from "react-datepicker";

const UpdatePayment = ({ closeModal }) => {
  return (
    <div className="col-lg-12">
      <div>
        <div className="card-header justify-content-between">
          <div className="card-title h5">Update Payment</div>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="card-header pb-2">
          <div className="clearfix">
            <h3 className="card-title">Total</h3>
            <span className="text-primary">Invoice Number</span>
          </div>
          <div className="clearfix text-center">
            <h3 className="text-primary mb-0">$9000</h3>
            <span>INV ABC123</span>
          </div>
        </div>
        <div className="card-header pb-1 pt-1">
          <div className="clearfix">
            <span class="d-block fs-16 text-success font-w600">
              Payment History
            </span>
          </div>
        </div>
        <div className="card-body pt-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between">
              <span class="mb-0">Aug 20th 2023</span>
              <strong>$2000</strong>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span class="mb-0">Aug 24th 2023</span>
              <strong>$2000</strong>
            </li>
          </ul>
        </div>
        <div className="card-header pb-1 pt-1">
          <div className="clearfix">
            <span class="d-block fs-16 text-success font-w600">Add new payment</span>
          </div>
        </div>
        <div className="card-body pt-2">
          <div class="row">
            <div class="form-group mb-1 col-md-4">
              <input type="text" class="form-control" placeholder="Eg: 2000" />
            </div>
            <div class="form-group mb-1 col-md-4">
              <DatePicker
                className="form-control" />
            </div>
            <div class="form-group mb-1 col-md-4 text-end">
              <button type="submit" class="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
        <div className="card-header border-0">
          <div className="clearfix">
            <h3 className="card-title">Remaining</h3>
            <span className="text-danger">To be paid</span>
          </div>
          <div className="clearfix text-center">
            <h3 className="text-danger mb-0">$3000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePayment;
