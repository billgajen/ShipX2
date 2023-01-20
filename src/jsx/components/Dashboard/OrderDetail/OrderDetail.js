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
import UploadImagesCard from "./UploadImagesCard/UploadImagesCard";
import UploadDocumentsCard from "./UploadDocumentsCard/UploadDocumentsCard";
import UploadImagesForm from "./UploadImagesForm/UploadImagesForm";
import UploadDocumentsForm from "./UploadDocumentsForm/UploadDocumentsForm";
import BatchInformationCard from "./BatchInfomationCard/BatchInfomationCard";
import UpdateBatchInfoForm from "./UpdateBatchInfoForm/UpdateBatchInfoForm";
import swal from "sweetalert";
import { nanoid } from "nanoid";
import { formatDate } from "../../utils/formatDate";
import {
  initialInvoiceFormState,
  initialImageFormState,
  initialDocumentFormState,
  initialBatchInfoState,
  initialShipmentInfoState,
} from "./initialState";
import { onDeleteSwal } from "../../utils/onDeleteSwal";

import bg1 from "./../../../../images/big/img1.jpg";
import avatar1 from "./../../../../images/avatar/1.jpg";

import PerfectScrollbar from "react-perfect-scrollbar";

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
  const [createShipmentFormData, setCreateShipmentFormData] = useState(
    initialShipmentInfoState
  );

  const [deleteModal, setDeleteModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [imagesModal, setImagesModal] = useState(false);
  const [documentsModal, setDocumentsModal] = useState(false);
  const [batchInfoModal, setBatchInfoModal] = useState(false);
  const [file, setFile] = useState(null);
  const [addInvoiceFormData, setAddInvoiceFormData] = useState(
    initialInvoiceFormState
  );
  const [addImageFormData] = useState(initialImageFormState);
  const [addDocumentFormData] = useState(initialDocumentFormState);
  const [addBatchInfoFormData, setAddBatchInfoFormData] = useState(
    initialBatchInfoState
  );
  const [invoiceDetails, setInvoiceDetails] = useState([]);
  const [imagesDetails, setImagesDetails] = useState(order.imageInfo);
  const [documentsDetails, setDocumentsDetails] = useState(order.documentInfo);
  const [, setBatchInfo] = useState(order.batchInfo);
  const [selectedDate, setSelectedDate] = useState(
    order.batchInfo?.expiryDate
      ? new Date(order.batchInfo?.expiryDate)
      : new Date()
  );
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentInfo, setPaymentInfo] = useState(order.paymentInfo);
  const [trackingDetailsModal, setTrackingDetailsModal] = useState(false);
  const [createShipmentModal, setCreateShipmentModal] = useState(false);

  const updatedOrderDispatch = () => {
    const newOrders = [...ordersData];
    let itemIndex = newOrders.findIndex((item) => item.id === order.id);
    newOrders[itemIndex] = order;
    dispatch(setOrdersAction(newOrders));
  };

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
      updatedOrderDispatch();
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
    updatedOrderDispatch();
    setPaymentAmount("");
    setSelectedDate(new Date());
    swal("Good job!", "Successfully Added", "success");
  };

  // Delete payment
  const handleDeletePayment = (id) => {
    const newPayments = [...paymentInfo];
    const updatedPayments = newPayments.filter((payment) => payment.id !== id);
    setPaymentInfo(updatedPayments);
    order.paymentInfo = updatedPayments;
    updatedOrderDispatch();
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
      updatedOrderDispatch();
      createShipmentFormData.shipmentName = "";
      setCreateShipmentModal(false);
      swal("Good job!", "Successfully Added", "success");
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  // Total payments made
  const totalPayments = order.paymentInfo?.reduce((accumulator, payment) => {
    return accumulator + parseFloat(payment.amount);
  }, 0);

  // Handle add image change
  const handleImageFileChange = (e) => {
    setFile(e.target.files[0]);
    let src = e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : "";
    addImageFormData.imageSRC = src;
  };

  // Add image submit data
  const handleAddImageSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let errorMsg = "";
    if (addImageFormData.imageSRC === "") {
      error = true;
      errorMsg = "Please upload image";
    }
    if (!error) {
      const newImage = {
        id: nanoid(),
        imageFile: file,
        imageSRC: addImageFormData.imageSRC,
        createdDate: new Date(),
      };
      addImageFormData.imageSRC = "";
      const newImages = [newImage, ...imagesDetails];
      setImagesDetails(newImages);
      order.imageInfo = newImages;

      updatedOrderDispatch();
      setImagesModal(false);
      swal("Good job!", "Successfully Added", "success");
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  // Delete image
  const handleDeleteImage = (id) => {
    const newImages = [...imagesDetails];
    const updatedImages = newImages.filter((image) => image.id !== id);
    setImagesDetails(updatedImages);
    order.imageInfo = updatedImages;
    updatedOrderDispatch();
  };

  // Handle add document change
  const handleDocumentFileChange = (e) => {
    setFile(e.target.files[0]);
    let src = e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : "";
    addDocumentFormData.documentSRC = src;
  };

  // Add document submit data
  const handleAddDocumentSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let errorMsg = "";
    if (addDocumentFormData.documentSRC === "") {
      error = true;
      errorMsg = "Please upload document";
    }
    if (!error) {
      const newDocument = {
        id: nanoid(),
        documentFile: file,
        documentSRC: addDocumentFormData.documentSRC,
        createdDate: new Date(),
      };
      addDocumentFormData.documentSRC = "";
      const newDocuments = [newDocument, ...documentsDetails];
      order.documentInfo = newDocuments;
      setDocumentsDetails(newDocuments);

      updatedOrderDispatch();
      setDocumentsModal(false);
      swal("Good job!", "Successfully Added", "success");
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  // Delete image
  const handleDeleteDocument = (id) => {
    const newDocuments = [...documentsDetails];
    const updatedDocuments = newDocuments.filter(
      (document) => document.id !== id
    );
    setDocumentsDetails(updatedDocuments);
    order.documentInfo = updatedDocuments;
    updatedOrderDispatch();
  };

  // Update Batch information button click to edit
  const handleUpdatebatchInfoClick = (event) => {
    event.preventDefault();
    const formValues = {
      id: order.batchInfo?.id,
      lotNumber: order.batchInfo?.lotNumber,
      expiryDate: order.batchInfo?.expiryDate,
      batchNumber: order.batchInfo?.batchNumber,
      color: order.batchInfo?.color,
      modelNumber: order.batchInfo?.modelNumber,
      type: order.batchInfo?.type,
      size: order.batchInfo?.size,
    };
    setAddBatchInfoFormData(formValues);
    setBatchInfoModal(true);
  };

  // Update batch info change
  const handleBatchInfoFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAddBatchInfoFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Update batch info submit
  const handleBatchInfoFormSubmit = (event) => {
    event.preventDefault();
    const newBatch = {
      lotNumber: addBatchInfoFormData.lotNumber,
      expiryDate: formatDate(selectedDate),
      batchNumber: addBatchInfoFormData.batchNumber,
      color: addBatchInfoFormData.color,
      modelNumber: addBatchInfoFormData.modelNumber,
      type: addBatchInfoFormData.type,
      size: addBatchInfoFormData.size,
    };

    const newBatchInfoData = newBatch;
    setBatchInfo(newBatchInfoData);
    order.batchInfo = newBatchInfoData;

    updatedOrderDispatch();

    setBatchInfoModal(false);
    swal("Good job!", "Successfully Added", "success");
  };

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
            onDeletePayment={(id) =>
              onDeleteSwal("payment detail", () => handleDeletePayment(id))
            }
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
        <Modal className="modal fade" show={imagesModal}>
          <UploadImagesForm
            onClickCancel={() => setImagesModal(false)}
            onChangeFile={handleImageFileChange}
            onClickSubmit={handleAddImageSubmit}
          />
        </Modal>
        <Modal className="modal fade" show={documentsModal}>
          <UploadDocumentsForm
            onClickCancel={() => setDocumentsModal(false)}
            onChangeFile={handleDocumentFileChange}
            onClickSubmit={handleAddDocumentSubmit}
          />
        </Modal>
        <Modal className="modal fade" show={batchInfoModal}>
          <UpdateBatchInfoForm
            onClickCancel={() => setBatchInfoModal(false)}
            onChangeFile={handleBatchInfoFormChange}
            onClickSubmit={handleBatchInfoFormSubmit}
            selectedDate={selectedDate}
            onDateChange={(date) => setSelectedDate(date)}
            onLOTNumberChange={handleBatchInfoFormChange}
            onBatchNumberChange={handleBatchInfoFormChange}
            onColorChange={handleBatchInfoFormChange}
            onModelNumberChange={handleBatchInfoFormChange}
            onTypeChange={handleBatchInfoFormChange}
            onSizeChange={handleBatchInfoFormChange}
            lotNumberValue={addBatchInfoFormData.lotNumber}
            batchNumberValue={addBatchInfoFormData.batchNumber}
            colorValue={addBatchInfoFormData.color}
            modelNumberValue={addBatchInfoFormData.modelNumber}
            typeValue={addBatchInfoFormData.type}
            sizeValue={addBatchInfoFormData.size}
          />
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setBatchInfoModal(false)}
            >
              Done
            </button>
          </div>
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
                  {order.destinationType === "AmazonFBA" &&
                    order.productInfo.amazonIntegrated && (
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
          <BatchInformationCard
            onClickUpdate={(event) => handleUpdatebatchInfoClick(event)}
            info={order.batchInfo && order.batchInfo}
          />
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
            <UploadImagesCard
              onClickUpload={() => setImagesModal(true)}
              images={order.imageInfo}
              onDeleteImage={(id) =>
                onDeleteSwal("file", () => handleDeleteImage(id))
              }
            />
            <UploadDocumentsCard
              onClickUpload={() => setDocumentsModal(true)}
              documents={order.documentInfo}
              onDeleteDocument={(id) =>
                onDeleteSwal("file", () => handleDeleteDocument(id))
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
