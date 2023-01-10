/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
//import { Dropdown } from "react-bootstrap";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
//import LogoutPage from './Logout';

/// Image
import user from "../../../images/user.jpg";
import { useStateValue } from "../../../store/selectors/useStateValue";
class MM extends Component {
	componentDidMount() {
		this.$el = this.el;
		this.mm = new Metismenu(this.$el);
	}
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
	const {
		iconHover,
		sidebarposition,
		headerposition,
		sidebarLayout,
	} = useContext(ThemeContext);
  const { auth } = useStateValue();
  const isBusinessUser = auth.userType === "Business";

  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
	
	//sidebar icon Heart blast
	// var handleheartBlast = document.querySelector('.heart');
  //       function heartBlast() {
  //           return handleheartBlast.classList.toggle("heart-blast");
  //       }
  //       handleheartBlast.addEventListener('click', heartBlast);
	
  }, []);
  // For scroll
	const [hideOnScroll, setHideOnScroll] = useState(true)
	useScrollPosition(
		({ prevPos, currPos }) => {
		  const isShow = currPos.y > prevPos.y
		  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
		},
		[hideOnScroll]
	)
  //let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "",
      "dashboard",
      "calendar",
      "kanban",
      "task",
    ],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
    redux = [
       "redux-form",
	     "redux-wizard",    
       "todo",
    ],
    orders = ["orders"],
    products = ["products"],
    payments = ["payments"],
    suppliers = ["suppliers"],
    clients = ["clients"],
    inventory = ["inventory"],
    myWarehouse = ["my-warehouse"],
    settings = [
      "account-app",
      "user-permissions",
      "billing-payments",
      "integrations",
      "notifications",
      "upgrade",
    ],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link to="/dashboard" className="ai-icon">
              <i className="fas fa-home"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className={`${orders.includes(path) ? "mm-active" : ""}`}>
            <Link to="/orders" className="ai-icon">
              <i className="fas fa-ship"></i>
              <span className="nav-text">Orders</span>
            </Link>
          </li>
          {isBusinessUser && (
            <>
              <li className={`${products.includes(path) ? "mm-active" : ""}`}>
                <Link to="/products" className="ai-icon">
                  <i className="fas fa-list"></i>
                  <span className="nav-text">Products</span>
                </Link>
              </li>
              <li className={`${inventory.includes(path) ? "mm-active" : ""}`}>
                <Link to="/inventory" className="ai-icon">
                  <i class="fas fa-box"></i>
                  <span className="nav-text">Inventory</span>
                </Link>
              </li>
              <li
                className={`${myWarehouse.includes(path) ? "mm-active" : ""}`}
              >
                <Link to="/my-warehouse" className="ai-icon">
                  <i class="fas fa-warehouse"></i>
                  <span className="nav-text">My Warehouse</span>
                </Link>
              </li>
            </>
          )}
          <li className={`${payments.includes(path) ? "mm-active" : ""}`}>
            <Link to="/payments" className="ai-icon">
              <i className="fas fa-money-bill"></i>
              <span className="nav-text">Payments</span>
            </Link>
          </li>
          <li
            className={
              isBusinessUser
                ? `${suppliers.includes(path) ? "mm-active" : ""}`
                : `${clients.includes(path) ? "mm-active" : ""}`
            }
          >
            <Link
              to={isBusinessUser ? "/suppliers" : "/clients"}
              className="ai-icon"
            >
              <i className="fas fa-id-card"></i>
              <span className="nav-text">
                {isBusinessUser ? "Suppliers" : "Clients"}
              </span>
            </Link>
          </li>
          <li className={`${settings.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
            <i class="fa fa-cog" aria-hidden="true"></i>
              <span className="nav-text">Settings</span>
            </Link>
            <ul >
              <li><Link className={`${path === "account-app" ? "mm-active" : ""}`} to="/account-app">Account & App</Link></li>
              <li><Link className={`${path === "user-permissions" ? "mm-active" : ""}`} to="/user-permissions">User Permissions</Link></li>
              <li><Link className={`${path === "billing-payments" ? "mm-active" : ""}`} to="/billing-payments">Billing & Payments</Link></li>
              <li><Link className={`${path === "integrations" ? "mm-active" : ""}`} to="/integrations">Integrations</Link></li>
              <li><Link className={`${path === "notifications" ? "mm-active" : ""}`} to="/notifications">Notification</Link></li>
              <li><Link className={`${path === "upgrade" ? "mm-active" : ""}`} to="/upgrade" >Upgrade</Link></li>
            </ul>
          </li>
        </MM>
        <div className="copyright">
          {/* <p className="fs-12"><span className="heart"></span></p> */}
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
