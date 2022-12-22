import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import { nanoid } from "nanoid";
import { useStateValue } from "../../../store/selectors/useStateValue";
///Import
import OrderCard from "../molecules/OrderCard/OrderCard";
import AddOrderForm from "../customForms/AddOrderForm";
import AddProductForm, {
  initialFormState,
} from "../customForms/AddProductForm";
import {  setProductsAction } from "../../../store/actions/ProductActions";
import { setOrdersAction, setSelectedOrderIdAction } from "../../../store/actions/orderActions";
import { useDispatch } from "react-redux";
import { formatDate } from "../utils/formatDate"

const Orders = () => {
  const dispatch = useDispatch();
  const { auth, products, orders, warehouses } = useStateValue();
  const [addCard, setAddCard] = useState(false);
  const [tabState, setTabState] = useState("AllStatus");
  const [productsData, setProducts] = useState(products.productsState);
  const [ordersDetails, setOrderDetails] = useState(orders.ordersState);
  const [warehouseData] = useState(warehouses.warehousesState);
  const [selectedOrderProductSKU, setSelectedOrderProductSKU] = useState("");
  const [selectedDestinationName, setSelectedDestinationName] = useState("");
  const [addNewProductForm, setAddNewProductForm] = useState(false);

  const handleAllStatusClick = () => {
    setTabState("AllStatus");
    setOrderDetails(orders.ordersState);
  };

  const handleOnProgressClick = () => {
    setTabState("OnProgress");
    const newOrders = [...orders.ordersState];
    const onProgressOrders = newOrders.filter(
      (order) => order.orderStatus === "ON_PROGRESS"
    );
    setOrderDetails(onProgressOrders);
  };

  const handlePendingClick = () => {
    setTabState("Pending");
    const newOrders = [...orders.ordersState];
    const pendingOrders = newOrders.filter(
      (order) => order.orderStatus === "PENDING"
    );
    setOrderDetails(pendingOrders);
  };

  const handleClosedClick = () => {
    setTabState("Closed");
    const newOrders = [...orders.ordersState];
    const closedOrders = newOrders.filter(
      (order) => order.orderStatus === "CLOSED"
    );
    setOrderDetails(closedOrders);
  };

  //For Image upload in ListBlog
  const [file, setFile] = useState(null);
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setTimeout(function () {
      let src = document.getElementById("saveImageFile").getAttribute("src");
      addProductFormData.productThumb = src;
    }, 200);
  };

  //Add data
  const [addProductFormData, setAddProductFormData] = useState(initialFormState);

  // Add Product function
  const handleAddProductFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addProductFormData };
    newFormData[fieldName] = fieldValue;
    setAddProductFormData(newFormData);
  };

  //Add Product Submit data
  const handleAddProductFormSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let errorMsg = "";
    if (addProductFormData.productName === "") {
      error = true;
      errorMsg = "Please fill Name";
    } else if (addProductFormData.productSKU === "") {
      error = true;
      errorMsg = "Please fill profile.";
    } else if (addProductFormData.productThumb === "") {
      error = true;
      errorMsg = "Please attached image";
    }
    if (!error) {
      const newProduct = {
        id: nanoid(),
        productName: addProductFormData.productName,
        productSKU: addProductFormData.productSKU,
        productThumb: addProductFormData.productThumb,
        productASIN: addProductFormData.productASIN,
        productWidth: addProductFormData.productWidth,
        productHeight: addProductFormData.productHeight,
        productLength: addProductFormData.productLength,
        productWeight: addProductFormData.productWeight,
        productSize: addProductFormData.productSize,
        productManufacturingCost: addProductFormData.productManufacturingCost,
        shippingModeAirCost: addProductFormData.shippingModeAirCost,
        shippingModeSeaCost: addProductFormData.shippingModeSeaCost,
        shippingModeLandCost: addProductFormData.shippingModeLandCost,
        productManufacturingDays: addProductFormData.productManufacturingDays,
        fastestShippingDays: addProductFormData.fastestShippingDays,
        shippingHandlingDays: addProductFormData.shippingHandlingDays,
        myWarehouseStock: addProductFormData.myWarehouseStock,
      };
      const newProducts = [...productsData, newProduct];
      setProducts(newProducts);
      dispatch(setProductsAction(newProducts));
      setAddNewProductForm(false);
      swal("Good job!", "Successfully Added", "success");
      addProductFormData.name =
        addProductFormData.productSKU =
        addProductFormData.productThumb =
          "";
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  //Add Order
  const [addFormData, setAddFormData] = useState({
    id: "",
    productId: "",
    productName: "",
    productASIN: "",
    productSKU: "",
    orderUnits: "",
    orderDate: "",
    shippingMode: "",
    destinationType: "AmazonFBA",
    destination: "",
    destinationAddress: {},
  });

  // Add Product function
  const handleAddFormChange = (event) => {
    event.stopPropagation();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    setSelectedOrderProductSKU(newFormData.productName.match(/\(([^)]+)\)/)[1]);
    setSelectedDestinationName(newFormData.destination);
  };

  const selectedOrderProduct = productsData.find(
    (product) => product.productSKU === selectedOrderProductSKU
  );

  const selectedDestination = warehouseData.find(
    (warehouse) => warehouse.warehouseName === selectedDestinationName
  );

  //Add Submit data
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    var error = false;
    var errorMsg = "";
    if (addFormData.productName === "") {
      error = true;
      errorMsg = "Please select a Product";
    } else if (addFormData.orderUnits === "") {
      error = true;
      errorMsg = "Please fill number of units.";
    } else if (addFormData.shippingMode === "") {
      error = true;
      errorMsg = "Please select shipping mode";
    } else if (addFormData.destinationType === "Private" && addFormData.destination === "") {
      error = true;
      errorMsg = "Please select destination";
    }
    if (!error) {
      const newProduct = {
        id: nanoid(),
        productId: selectedOrderProduct.id,
        productName: selectedOrderProduct.productName,
        productThumb: selectedOrderProduct.productThumb,
        productASIN: selectedOrderProduct.productASIN,
        productSKU: selectedOrderProduct.productSKU,
        bpOrderID: addFormData.bpOrderID,
        orderUnits: addFormData.orderUnits,
        orderDate: formatDate(new Date()),
        shippingMode: addFormData.shippingMode,
        destinationType: addFormData.destinationType,
        destination: addFormData.destination,
        destinationAddress: selectedDestination,
        receivedUnits: 0,
        receivedPayment: 0,
        orderStatus: "PENDING",
      };
      setAddCard(false);
      swal("Good job!", "Successfully Added", "success");
      addFormData.productName =
        addFormData.productSKU =
        addFormData.productThumb =
          "";
      const newOrders = [newProduct, ...ordersDetails];
      setOrderDetails(newOrders);
      dispatch(setOrdersAction(newOrders));
    } else {
      swal("Oops", errorMsg, "error");
    }
    addFormData.destinationType = "AmazonFBA";
  };

  const handleSelectedOrderId = (id) => {
    dispatch(setSelectedOrderIdAction(id));
  };

  const getStatus = (status) => {
    switch (status) {
      case "PENDING": {
        return "btn-danger";
      }
      case "ON_PROGRESS": {
        return "btn-warning";
      }
      case "CLOSED": {
        return "btn-success";
      }
      default: {
        return;
      }
    }
  };

  return (
    <>
      <Tab.Container defaultActiveKey="AllStatus">
        <div className="project-page d-flex justify-content-between align-items-center flex-wrap">
          <div className="input-group search po-search contacts-search mb-4">
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
          <div className="project mb-4">
            <Nav as="ul" className="nav nav-tabs" role="tablist">
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="AllStatus"
                  onClick={handleAllStatusClick}
                >
                  All Status
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="OnProgress"
                  onClick={handleOnProgressClick}
                >
                  On Progress
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="Pending"
                  onClick={handlePendingClick}
                >
                  Pending
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  className="nav-link"
                  eventKey="Closed"
                  onClick={handleClosedClick}
                >
                  Closed
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="mb-4">
            {auth.userType === "Business" && (
              <>
                <Link
                  to={"#"}
                  className="btn btn-primary btn-rounded fs-18"
                  onClick={() => setAddCard(true)}
                >
                  + New Order
                </Link>
                <Modal
                  className="modal fade"
                  show={addCard}
                  onHide={setAddCard}
                  size="lg"
                >
                  <div className="modal-header">
                    <h4 className="modal-title fs-20">Create New Order</h4>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setAddCard(false)}
                    ></button>
                  </div>
                  {addNewProductForm ? (
                    <AddProductForm
                      onChangeFile={fileHandler}
                      onClickFile={(event) => setFile(event.target.value)}
                      file={file}
                      onProductNameChange={handleAddProductFormChange}
                      onProductASINChange={handleAddProductFormChange}
                      onClickSubmit={handleAddProductFormSubmit}
                      onClickCancel={() => setAddNewProductForm(false)}
                    />
                  ) : (
                    <AddOrderForm
                      productOptions={productsData}
                      destinationOptions={warehouseData}
                      onClickNewProduct={() => setAddNewProductForm(true)}
                      onChangeProduct={handleAddFormChange}
                      onChangeOrderUnits={handleAddFormChange}
                      onChangeShippingMode={handleAddFormChange}
                      onChangeDestination={handleAddFormChange}
                      onChangeAMZFBA={handleAddFormChange}
                      onChangeMyWarehouse={handleAddFormChange}
                      onSubmitForm={handleAddFormSubmit}
                      onCloaseModal={() => setAddCard(false)}
                    />
                  )}
                </Modal>
              </>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Tab.Content>
              <Tab.Pane eventKey={tabState}>
                {ordersDetails.map((order) => (
                  <OrderCard
                    key={order.id}
                    orderId={order.id}
                    orderDate={order.orderDate}
                    productThumb={order.productThumb}
                    productName={order.productName}
                    productSKU={order.productSKU}
                    productASIN={order.productASIN}
                    supplierLogo={order.supplierLogo}
                    supplierName={order.supplierName}
                    orderUnits={order.orderUnits}
                    receivedUnits={order.receivedUnits}
                    orderCost={order.orderCost}
                    receivedPayment={order.receivedPayment}
                    shipmentAgentLogo={order.shipmentAgentLogo}
                    shipmentMasterTrackingID={order.shipmentMasterTrackingID}
                    destinationLogo={order.destinationLogo}
                    destinationShippingID={order.destinationShippingID}
                    destinationType={order.destinationType}
                    orderStatus={order.orderStatus}
                    orderStatusColor={getStatus(order.orderStatus)}
                    shippingMode={order.shippingMode}
                    warehouseName={order.destinationAddress?.warehouseName}
                    firstLine={order.destinationAddress?.firstLine}
                    city={order.destinationAddress?.city}
                    county={order.destinationAddress?.county}
                    zipCode={order.destinationAddress?.zipCode}
                    country={order.destinationAddress?.country}
                    onClickOrder={() => handleSelectedOrderId(order.id)}
                  />
                ))}
              </Tab.Pane>
            </Tab.Content>
          </div>
          <div className="progect-pagination d-flex justify-content-between align-items-center flex-wrap">
            <h4 className="mb-3">Showing 10 from 160 data</h4>
            <ul className="pagination mb-3">
              <li className="page-item page-indicator">
                <Link to={"#"} className="page-link">
                  <i className="fas fa-angle-double-left me-2"></i>Previous
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} className="active">
                  1
                </Link>
                <Link to={"#"} className="">
                  2
                </Link>
                <Link to={"#"} className="">
                  3
                </Link>
                <Link to={"#"} className="">
                  4
                </Link>
              </li>
              <li className="page-item page-indicator">
                <Link to={"#"} className="page-link">
                  Next<i className="fas fa-angle-double-right ms-2"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Tab.Container>
    </>
  );
};
export default Orders;
