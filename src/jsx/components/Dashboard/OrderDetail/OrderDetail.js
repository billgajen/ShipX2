import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Modal,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useStateValue } from "../../../../store/selectors/useStateValue";
import { setOrdersAction } from "../../../../store/actions/orderActions";
import ShipmentTracking from "./ShipmentTracking/ShipmentTracking";
import TrackingUnavailableCard from "../../molecules/OrderCard/TrackingUnavailableCard";
import AmazonShippingCard from "./AMZReceivingCard/AmazonShippingCard";
import AMZCreateLabelCard from "../../molecules/OrderCard/AMZCreateLabelCard";
import UpdatePayment from "./UpdatePayment/UpdatePayment";
import UploadInvoiceForm from "./UploadInvoiceForm/UploadInvoiceForm";
import UploadInvoiceCard from "./UploadInvoiceCard/UploadInvoiceCard";
import PaymentInfoCard from "./PaymentInfoCard/PaymentInfoCard";
import AddTrackingDetailsForm from "./AddTrackingDetailsForm/AddTrackingDetailsForm";
import AmazonTrackingForm from "./AmazonTrackingForm/AmazonTrackingForm";
import CreateShipmentForm from "./CreateShipementForm/CreateShipementForm";
import swal from "sweetalert";
import { nanoid } from "nanoid";
import { formatDate } from "../../utils/formatDate";

import bg1 from "./../../../../images/big/img1.jpg";
import avatar1 from "./../../../../images/avatar/1.jpg";

import PerfectScrollbar from "react-perfect-scrollbar";

export const initialInvoiceFormState = {
  totalCost: "",
  shippingCost: "",
  invoiceNumber: "",
  invoiceInfo: {},
  invoiceSRC: "",
  createdDate: "",
};

const OrderDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { products, orders } = useStateValue();

  const [ordersData, setOrdersData] = useState(orders.ordersState);

  const newOrders = [...ordersData];
  const selectedOrder = newOrders.filter(
    (order) => order.id === orders.selectedOrderId
  );
  const [order] = useState(selectedOrder[0]);
  //Add Order
  const [createShipmentFormData, setCreateShipmentFormData] = useState({
    id: "",
    shipmentName: "",
  });

  const [deleteModal, setDeleteModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [file, setFile] = useState(null);
  const [addInvoiceFormData, setAddInvoiceFormData] = useState(
    initialInvoiceFormState
  );
  const [invoiceDetails, setInvoiceDetails] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentInfo, setPaymentInfo] = useState(order.paymentInfo);
  const [trackingDetailsModal, setTrackingDetailsModal] = useState(false);
  const [createShipmentModal, setCreateShipmentModal] = useState(false);

  // delete data submit
  const handleDeleteSubmit = () => {
    const newOrders = [...ordersData];
    const updatedOrders = newOrders.filter(
      (product) => product.id !== products.selectedOrderId
    );
    setOrdersData(updatedOrders);
    dispatch(setOrdersAction(updatedOrders));
    setDeleteModal(false);
    history.push("/orders");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setTimeout(() => {
      let src = URL.createObjectURL(e.target.files[0]);
      addInvoiceFormData.invoiceSRC = src;
    }, 200);
  };

  const handleInvoiceFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addInvoiceFormData };
    newFormData[fieldName] = fieldValue;
    setAddInvoiceFormData(newFormData);
  };

  //Add Submit data
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let errorMsg = "";
    if (addInvoiceFormData.totalCost === "") {
      error = true;
      errorMsg = "Please fill total cost";
    } else if (
      addInvoiceFormData.shippingCost === "" ||
      addInvoiceFormData.shippingCost === undefined
    ) {
      error = true;
      errorMsg = "Please fill shipping cost.";
    } else if (addInvoiceFormData.invoiceNumber === "") {
      error = true;
      errorMsg = "Please fill invoice number.";
    } else if (addInvoiceFormData.invoiceSRC === "") {
      error = true;
      errorMsg = "Please upload invoice";
    }
    if (!error) {
      const newInvoice = {
        id: nanoid(),
        totalCost: addInvoiceFormData.totalCost,
        shippingCost: addInvoiceFormData.shippingCost,
        invoiceNumber: addInvoiceFormData.invoiceNumber,
        invoiceFile: file,
        invoiceSRC: addInvoiceFormData.invoiceSRC,
        createdDate: new Date(),
      };
      setInvoiceModal(false);
      swal("Good job!", "Successfully Added", "success");
      addInvoiceFormData.totalCost =
        addInvoiceFormData.shippingCost =
        addInvoiceFormData.invoiceNumber =
        addInvoiceFormData.invoiceSRC =
          "";
      const newInvoiceData = invoiceDetails.length
        ? (invoiceDetails[0] = newInvoice)
        : [newInvoice];
      setInvoiceDetails(newInvoiceData);
      order.invoiceInfo = newInvoice;
      const newOrders = [...ordersData];
      let itemIndex = newOrders.findIndex((item) => item.id === order.id);
      newOrders[itemIndex] = order;
      dispatch(setOrdersAction(newOrders));
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  // Add payment
  const handleAddPayment = () => {
    const newPayment = {
      id: nanoid(),
      amount: paymentAmount,
      date: selectedDate,
    };
    const newPayments = [newPayment, ...paymentInfo];

    setPaymentInfo(newPayments);
    order.paymentInfo = newPayments;
    const newOrders = [...ordersData];
    let itemIndex = newOrders.findIndex((item) => item.id === order.id);
    newOrders[itemIndex] = order;
    dispatch(setOrdersAction(newOrders));
    setPaymentAmount("");
    setSelectedDate(new Date());
    swal("Good job!", "Successfully Added", "success");
  };

  // Delete payment
  const handleDeletePayment = (id) => {
    const newPayments = [...paymentInfo];
    const updatedPayments = newPayments.filter((payment) => payment.id !== id);
    console.log("updatedPayments", id);
    setPaymentInfo(updatedPayments);
    order.paymentInfo = updatedPayments;
    const newOrders = [...ordersData];
    let itemIndex = newOrders.findIndex((item) => item.id === order.id);
    newOrders[itemIndex] = order;
    dispatch(setOrdersAction(newOrders));
  };

  // Create shipment form change
  const handleShipmentFormChange = (event) => {
    event.stopPropagation();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...createShipmentFormData };
    newFormData[fieldName] = fieldValue;
    setCreateShipmentFormData(newFormData);
  };

  // Create shipment form submit
  const handleShipmentFormSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let errorMsg = "";
    if (createShipmentFormData.shipmentName === "") {
      error = true;
      errorMsg = "Please fill shipment name";
    }
    if (!error) {
      const newShipment = {
        id: nanoid(),
        shipmentName: createShipmentFormData.shipmentName,
        labelCreated: false,
      };

      order.shipmentInfo = newShipment;
      const newOrders = [...ordersData];
      let itemIndex = newOrders.findIndex((item) => item.id === order.id);
      newOrders[itemIndex] = order;
      dispatch(setOrdersAction(newOrders));
      createShipmentFormData.shipmentName = "";
      setCreateShipmentModal(false);
      swal("Good job!", "Successfully Added", "success");
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  console.log("All orders", orders);

  // Total payments made
  const totalPayments = order.paymentInfo?.reduce((accumulator, payment) => {
    return accumulator + parseFloat(payment.amount);
  }, 0);

  // Add tracking details

  return (
    <>
      <div>
        <Modal
          className="modal fade"
          show={deleteModal}
          onHide={setDeleteModal}
        >
          <div className="modal-header">
            <h4 className="modal-title fs-20">
              Are you sure you want to delete{" "}
              <b>{order?.productInfo.productName}</b>?
            </h4>
            <button
              type="button"
              className="btn-close"
              onClick={() => setDeleteModal(false)}
              data-dismiss="modal"
            ></button>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              onClick={handleDeleteSubmit}
              className="btn btn-danger"
            >
              <i className="flaticon-delete-1"></i> Delete
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setDeleteModal(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
        <Modal className="modal fade" show={invoiceModal}>
          <div className="modal-header">
            <h4 className="modal-title fs-20">Upload Invoice</h4>
            <button
              type="button"
              className="btn-close"
              onClick={() => setInvoiceModal(false)}
              data-dismiss="modal"
            ></button>
          </div>
          <UploadInvoiceForm
            onClickCancel={() => setInvoiceModal(false)}
            onChangeFile={handleFileChange}
            onTotalCostChange={handleInvoiceFormChange}
            onShippingCostChange={handleInvoiceFormChange}
            onInvoiceNumberChange={handleInvoiceFormChange}
            onClickSubmit={handleAddFormSubmit}
          />
        </Modal>
        <Modal className="modal fade" show={paymentModal}>
          <UpdatePayment
            closeModal={() => setPaymentModal()}
            totalCost={order.invoiceInfo?.totalCost}
            invoiceNumber={order.invoiceInfo?.invoiceNumber}
            selectedDate={selectedDate}
            onPaymentAmountChange={(e) => setPaymentAmount(e.target.value)}
            paymentValue={paymentAmount}
            onDateChange={(date) => setSelectedDate(date)}
            onAddPayment={handleAddPayment}
            payments={order.paymentInfo}
            remainingCost={order.invoiceInfo?.totalCost - totalPayments}
            isDisabled={paymentAmount === ""}
            onDeletePayment={(id) => handleDeletePayment(id)}
          />
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setPaymentModal(false)}
            >
              Done
            </button>
          </div>
        </Modal>
        <Modal className="modal fade" show={trackingDetailsModal}>
          <div className="modal-header">
            <h4 className="modal-title fs-20">Add tracking details</h4>
            <button
              type="button"
              className="btn-close"
              onClick={() => setTrackingDetailsModal(false)}
              data-dismiss="modal"
            ></button>
          </div>
          {order.shipmentInfo ? (
            <AmazonTrackingForm
              isLabelCreated={false}
              onClickCancel={() => setTrackingDetailsModal(false)}
            />
          ) : (
            <AddTrackingDetailsForm
              onClickCancel={() => setTrackingDetailsModal(false)}
            />
          )}
        </Modal>
        <Modal className="modal fade" show={createShipmentModal}>
          <div className="modal-header">
            <h4 className="modal-title fs-20">Create Shipment</h4>
            <button
              type="button"
              className="btn-close"
              onClick={() => setCreateShipmentModal(false)}
              data-dismiss="modal"
            ></button>
          </div>
          <CreateShipmentForm
            onClickCancel={() => setCreateShipmentModal(false)}
            onShipmentNameChange={handleShipmentFormChange}
            onClickSubmit={handleShipmentFormSubmit}
          />
        </Modal>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="mb-3">
                  <span className="text-primary d-block fs-18 font-w600 mb-1">
                    #{order.id}
                  </span>
                  <span className="d-block mb-2 fs-14">
                    <i className="fas fa-calendar me-2"></i>Ordered on{" "}
                    {order.orderDate}
                  </span>
                  <h4 className="fs-22 font-w700 mb-0">
                    {order.productInfo.productName}
                  </h4>
                  <div class="mt-1 fs-16 font-w500 mb-2">
                    <span class="font-w600 text-primary">
                      {order.productInfo.productSKU}
                    </span>
                    <span class=""> / {order.productInfo.productASIN}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center project-image mb-3">
                    <img src={order.supplierLogo} alt="" />
                    <div>
                      <h3 className="fs-16 text-black font-w600 mb-0">
                        {order.supplierName}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-end mt-2 justify-content-between">
                    <h4 className="fs-20 font-w700 mb-0 text-success me-5">
                      {order.orderUnits} Units
                    </h4>
                    <span>
                      {order.orderUnits - order.receivedUnits} Remaining
                    </span>
                  </div>
                  <div className="progress  mb-4">
                    <div
                      className="progress-bar progress-animated"
                      style={{
                        width: `${
                          (order.receivedUnits / order.orderUnits) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  {order?.invoiceInfo?.totalCost && (
                    <>
                      <div className="d-flex align-items-end mt-2 justify-content-between">
                        <h4 className="fs-20 font-w700 mb-0 text-danger me-5">
                          ${order?.invoiceInfo?.totalCost}
                        </h4>
                        <span>
                          ${order.invoiceInfo?.totalCost - totalPayments}{" "}
                          Remaining
                        </span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-animated"
                          style={{
                            width: `${
                              (totalPayments / order.invoiceInfo?.totalCost) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-0 flex-wrap">
                <div>
                  <DropdownButton
                    as={ButtonGroup}
                    id="dropdown-button-drop-down"
                    drop="down"
                    variant="primary"
                    size="sm"
                    className="mt-0 me-0"
                    title=" Mark Status"
                  >
                    <Dropdown.Item href="#">Part Paid</Dropdown.Item>
                    <Dropdown.Item href="#">Fully Paid</Dropdown.Item>
                    <Dropdown.Item href="#">Production</Dropdown.Item>
                    <Dropdown.Item href="#">Shipped</Dropdown.Item>
                    <div className="dropdown-divider"></div>
                    <Dropdown.Item href="#">Cancelled</Dropdown.Item>
                  </DropdownButton>
                </div>
                <div className="invite mb-0">
                  <Button
                    className="btn btn-xs btn-primary light btn-rounded me-2 mb-0"
                    onClick={() => setTrackingDetailsModal(true)}
                  >
                    <i className="fa fa-plus me-3 scale3"></i>Tracking Details
                  </Button>
                  {(order.destinationType === "AmazonFBA" &&
                    order.productInfo.amazonIntegrated) && (
                      <Button
                        className="btn btn-xs btn-danger light btn-rounded me-2 mb-0"
                        onClick={() => setCreateShipmentModal(true)}
                        disabled={order.shipmentInfo}
                      >
                        <i className="fab fa-amazon me-3 scale3"></i>
                        {!order.shipmentInfo
                          ? `Create
                        Shipment`
                          : `Shipment created`}
                      </Button>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row order_detail__content-area">
        <div className="col-xl-4 col-lg-6 col-sm-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="card overflow-hidden">
                <div
                  className="text-center p-3 overlay-box"
                  style={{ backgroundImage: `url(${bg1})` }}
                >
                  <h3 className="mt-3 mb-1 text-white">Shipment Tracking</h3>
                </div>
                <div className="card-body">
                  {order.shipmentMasterTrackingID ? (
                    <ShipmentTracking
                      trackingId={order.shipmentMasterTrackingID}
                      shippingMode={order.shippingMode}
                    />
                  ) : (
                    <TrackingUnavailableCard
                      shippingMode={order.shippingMode}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {order.destinationType === "AmazonFBA" && (
            <div className="row">
              <div className="col-sm-12">
                <div className="card overflow-hidden">
                  <div
                    className="text-center p-3 overlay-box"
                    style={{ backgroundImage: `url(${bg1})` }}
                  >
                    <div className="profile-photo">
                      <img
                        src={order?.productThumb}
                        width="100"
                        className="m-auto img-fluid rounded-circle d-block"
                        alt=""
                      />
                    </div>
                    <h3 className="mt-3 mb-1 text-white">Amazon Tracking</h3>
                  </div>
                  <div className="card-body">
                    {order.destinationShippingID && (
                      <AmazonShippingCard
                        shippingId={order.destinationShippingID}
                        receivedProgress={
                          (order.receivedUnits / order.orderUnits) * 100
                        }
                        orderUnits={order.orderUnits}
                        receivedUnits={order.receivedUnits}
                      />
                    )}
                    {!order.destinationShippingID &&
                      order.destinationType === "AmazonFBA" && (
                        <AMZCreateLabelCard
                          destinationLogo={order.destinationLogo}
                        />
                      )}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="text-black card-title h5">
                    Batch Information
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="mb-0">Product Expiry</span>{" "}
                    <strong className="text-muted">Sep 12 2025</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="mb-0">LOT Number</span>{" "}
                    <strong className="text-muted">ABC987654321</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-6 col-sm-12">
          <div className="row">
            {!order.invoiceInfo?.totalCost ? (
              <UploadInvoiceCard onClickUpload={() => setInvoiceModal(true)} />
            ) : (
              <PaymentInfoCard
                onClickUpdate={() => setPaymentModal(true)}
                totalCost={order.invoiceInfo?.totalCost}
                totalPaid={totalPayments}
                invoiceName={order.invoiceInfo?.invoiceNumber}
                invoiceSRC={order.invoiceInfo?.invoiceSRC}
                invoiceDate={formatDate(order.invoiceInfo?.createdDate)}
              />
            )}
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="text-black card-title h5">Order Notes</div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <PerfectScrollbar
                      id="DZ_W_Todo1"
                      className="widget-media dlab-scroll ps ps--active-y"
                    >
                      <ul className="timeline">
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <img alt="" width="50" src={avatar1} />
                            </div>
                            <div className="media-body">
                              <h5 className="mb-1">
                                Please make sure to place the inserts. It has to
                                be the new one attached in the product.
                              </h5>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-danger">KG</div>
                            <div className="media-body">
                              <h5 className="mb-1">
                                Report created successfully
                              </h5>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </PerfectScrollbar>
                    <div className="card-footer border-0 type-massage">
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Add small notes"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="text-black ">Images</h5>
                    </div>
                    <div className="card-body pt-3">
                      <div class="final-badge">
                        <span class="badge text-black border">
                          <i class="fas fa-image me-2"></i>Manufacturing.jpg
                        </span>
                        <span class="badge text-black border">
                          <i class="fas fa-image me-2"></i>Pre-Shipment.jpg
                        </span>
                        <span class="badge text-black border">
                          <i class="fas fa-image me-2"></i>Product.jpg
                        </span>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          type="button"
                          class="me-2 btn btn-primary btn-rounded"
                        >
                          <span class="btn-icon-start text-primary">
                            <i className="fas fa-plus"></i>
                          </span>
                          Upload Images
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="text-black ">Documents</h5>
                    </div>
                    <div className="card-body pt-3">
                      <div class="final-badge">
                        <span class="badge text-black border">
                          <i class="far fa-file-alt me-3"></i>
                          Certificate_of_Analysis.pdf
                        </span>
                        <span class="badge text-black border">
                          <i class="far fa-file-alt me-3"></i>
                          Quality_Assurance.pdf
                        </span>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          type="button"
                          class="me-2 btn btn-primary btn-rounded"
                        >
                          <span class="btn-icon-start text-primary">
                            <i className="fas fa-plus"></i>
                          </span>
                          Upload Documents
                        </button>
                      </div>
                    </div>
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

export default OrderDetail;
