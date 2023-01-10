import React from "react";
import DatePicker from "react-datepicker";
import { formatDate } from "../../../utils/formatDate";

const UpdatePayment = ({
  closeModal,
  totalCost,
  invoiceNumber,
  selectedDate,
  onPaymentAmountChange,
  paymentValue,
  onDateChange,
  onAddPayment,
  payments,
  remainingCost,
  isDisabled,
  onDeletePayment,
}) => {
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
            <h3 className="text-primary mb-0">${totalCost}</h3>
            <span>{invoiceNumber}</span>
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
            {payments?.length ? (
              payments.map((payment) => (
                <li
                  key={payment.id}
                  class="list-group-item d-flex justify-content-between"
                >
                  <div>
                    <button
                      type="button"
                      className="btn"
                      style={{ color: "#FC2E53", padding: 4 }}
                      onClick={() => onDeletePayment(payment.id)}
                    >
                      <i class="fa fa-minus-circle" aria-hidden="true"></i>
                    </button>
                    <span class="mb-0">{formatDate(payment?.date)}</span>
                  </div>
                  <strong>{`$${payment.amount}`}</strong>
                </li>
              ))
            ) : (
              <p class="list-group-item d-flex justify-content-between">
                No Payments have been made yet!
              </p>
            )}
          </ul>
        </div>
        <div className="card-header pb-1 pt-1">
          <div className="clearfix">
            <span class="d-block fs-16 text-success font-w600">
              Add new payment
            </span>
          </div>
        </div>
        <div className="card-body pt-2">
          <div class="row">
            <div class="form-group mb-1 col-md-4">
              <input
                type="number"
                className="form-control"
                autoComplete="off"
                name="paymentAmount"
                required="required"
                value={paymentValue}
                onChange={onPaymentAmountChange}
                placeholder="Eg: 2000"
              />
            </div>
            <div class="form-group mb-1 col-md-4">
              <DatePicker
                className="form-control"
                name="paymentDate"
                selected={selectedDate}
                onChange={onDateChange}
                maxDate={new Date()}
              />
            </div>
            <div class="form-group mb-1 col-md-4 text-end">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={onAddPayment}
                disabled={isDisabled}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="card-header border-0">
          <div className="clearfix">
            <h3 className="card-title">Remaining</h3>
            <span className="text-danger">To be paid</span>
          </div>
          <div className="clearfix text-center">
            <h3 className="text-danger mb-0">${remainingCost}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePayment;
