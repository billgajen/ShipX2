import React from "react";
import Status from "../../elements/Status/Status";
import TrackingUnavailableCard from "./TrackingUnavailableCard";
import TrackingCard from "./TrackingCard";
import AMZReceivingCard from "./AMZReceivingCard";
import AMZCreateLabelCard from "./AMZCreateLabelCard";
import PrivateDestination from "./PrivateDestination";
import { Link } from "react-router-dom";

const OrderCard = ({
  orderId,
  orderDate,
  productThumb,
  productName,
  productSKU,
  productASIN,
  supplierLogo,
  supplierName,
  orderUnits,
  receivedUnits,
  orderCost,
  receivedPayment,
  shipmentAgentLogo,
  shipmentMasterTrackingID,
  shippingMode,
  destinationLogo,
  destinationShippingID,
  destinationType,
  orderStatus,
  orderStatusColor,
  warehouseName,
  firstLine,
  city,
  county,
  zipCode,
  country,
  onClickOrder,
}) => {
	const getFormattedText = (str) => {
		let i,
		frags = str.split("_");
		for (i = 0; i < frags.length; i++) {
			frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].substr(1).toLowerCase();
		}
		return frags.join(" ");
	}
	const formattedStatusText = getFormattedText(orderStatus);

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-xl-3  col-lg-6 col-sm-12 align-items-center product-details">
            <div className="media-body">
              <span className="text-primary d-block fs-18 font-w600 mb-1">
                #{orderId}
              </span>
              <span className="d-block mb-2 fs-14">
                <i className="fas fa-calendar me-2"></i>Ordered on {orderDate}
              </span>
              <div className="d-flex align-items-center project-image mb-3">
                <img src={productThumb} alt="Product Thumbnail" />
                <div>
                  <h3 className="fs-18 text-black font-w600 mb-0">
                    {productName}
                  </h3>
                </div>
              </div>
              <span className="d-block fs-12 font-w500">SKU: {productSKU}</span>
              <span className="d-block fs-12 font-w500">
                ASIN: {productASIN}
              </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3 order-details">
            <div className="d-flex align-items-center project-image mb-3">
              <img src={supplierLogo} alt="" />
              <div>
                <h3 className="fs-16 text-black font-w600 mb-0">
                  {supplierName}
                </h3>
              </div>
            </div>
            <div className="d-flex align-items-end mt-2 justify-content-between">
              <span className="d-block fs-16 text-black font-w600 mb-0">
                {orderUnits} Units
              </span>
              <span>{orderUnits - receivedUnits} Remaining</span>
            </div>
            <div className="progress  mb-4">
              <div
                className="progress-bar progress-animated"
                style={{
                  width: (receivedUnits / orderUnits) * 100 + "%",
                }}
              ></div>
            </div>
            {orderCost ? (
              <>
                <div className="d-flex align-items-end mt-2 justify-content-between">
                  <span className="d-block fs-16 text-black font-w600 mb-0">
                    ${orderCost}
                  </span>
                  <span>${orderCost - receivedPayment} Remaining</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar progress-animated"
                    style={{
                      width: (receivedPayment / orderCost) * 100 + "%",
                    }}
                  ></div>
                </div>
              </>
            ) : (
							<div className="invite mb-0">
									<Link to={"#"} className="btn btn-xs btn-primary light btn-rounded me-2 mb-0"><i className="fa fa-plus me-3 scale3"></i>Upload Invoice</Link>
							</div>
						)} 
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-4 col-6 mb-3">
            {shipmentMasterTrackingID ? (
              <TrackingCard
                shipmentAgentLogo={shipmentAgentLogo}
                shipmentMasterTrackingID={shipmentMasterTrackingID}
                shippingMode={shippingMode}
              />
            ) : (
              <TrackingUnavailableCard shippingMode={shippingMode} />
            )}
          </div>
          <div className="col-xl-3  col-lg-6 col-sm-6 mb-sm-4 mb-0">
            {destinationShippingID && (
              <AMZReceivingCard
                destinationLogo={destinationLogo}
                destinationShippingID={destinationShippingID}
              />
            )}
            {!destinationShippingID && destinationType === "AmazonFBA" && (
              <AMZCreateLabelCard destinationLogo={destinationLogo} />
            )}
            {!destinationShippingID && destinationType === "Private" && (
              <PrivateDestination
                warehouseName={warehouseName}
                firstLine={firstLine}
                city={city}
                county={county}
                zipCode={zipCode}
                country={country}
              />
            )}
          </div>
          <div className="col-xl-12  col-lg-6 col-sm-4 text-end">
            <div className="d-flex justify-content-end align-items-center flex-wrap">
              <div className="me-2">
                <a
                  className="badge badge-outline-primary badge-circle"
                  href="/#"
                >
                  <i className="fs-22 fas fa-file-pdf"></i>
                </a>
              </div>
              <div className="d-flex justify-content-end project-btn">
                <Status
                  text={formattedStatusText}
                  color={orderStatusColor}
                  onCick={onClickOrder}
                  path={`/order-detail/${orderId}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;