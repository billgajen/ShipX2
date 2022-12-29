import React from "react";

const PaymentInfoCard = ({
  onClickUpdate,
  totalCost,
  totalPaid,
  invoiceName,
  invoiceDate,
  invoiceSRC,
}) => {
  return (
    <>
      <div className="col-xl-7 col-lg-12">
        <div className="text-white bg-primary card">
          <div className="card-header justify-content-between">
            <div className="text-white card-title h5">Payment Status</div>
            <button
              onClick={onClickUpdate}
              type="button"
              class="btn btn-dark light btn-sm"
            >
              Update
            </button>
          </div>
          <div className="card-body">
            <div className="profile-statistics">
              <div className="text-center">
                <div className="row">
                  <div className="col text-white">
                    <h3 className="m-b-0 text-white font-w600">${totalCost}</h3>
                    <span>Total</span>
                  </div>
                  <div className="col text-white">
                    <h3 className="m-b-0 text-success font-w600">
                      ${totalPaid ? totalPaid : 0}
                    </h3>{" "}
                    <span>Paid</span>
                  </div>
                  <div className="col text-white">
                    <h3 className="m-b-0 text-white">
                      ${totalCost - (totalPaid ? totalPaid : 0)}
                    </h3>{" "}
                    <span>Remaining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title h5">Invoice</div>
          </div>
          <div className="card-body">
            <div class="final-badge text-center">
              <a
                href={invoiceSRC}
                download={invoiceName}
                class="badge text-black border mt-0"
              >
                <i class="far fa-file-alt me-3"></i>
                {invoiceName}
              </a>
              <span className="d-block fs-12 font-w400">{invoiceDate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInfoCard;
