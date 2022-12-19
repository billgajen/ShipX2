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
	var handleheartBlast = document.querySelector('.heart');
        function heartBlast() {
            return handleheartBlast.classList.toggle("heart-blast");
        }
        handleheartBlast.addEventListener('click', heartBlast);
	
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
    widget = ["widget-basic"],
    orders = ["orders"],
    products = ["products"],
    messages = ["messages"],
    payments = ["payments"],
    suppliers = ["suppliers"],
    clients = ["clients"],
    inventory = ["inventory"],
    myWarehouse = ["my-warehouse"],
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
                  <i class="fas fa-warehouse"></i>
                  <span className="nav-text">Inventory</span>
                </Link>
              </li>
              <li
                className={`${myWarehouse.includes(path) ? "mm-active" : ""}`}
              >
                <Link to="/my-warehouse" className="ai-icon">
                  <i class="fas fa-solid fa-store"></i>
                  <span className="nav-text">My Warehouse</span>
                </Link>
              </li>
            </>
          )}

          <li className={`${messages.includes(path) ? "mm-active" : ""}`}>
            <Link to="/messages" className="ai-icon">
              <i className="fas fa-comment"></i>
              <span className="nav-text">Messages</span>
            </Link>
          </li>
          <li className={`${payments.includes(path) ? "mm-active" : ""}`}>
            <Link to="/payments" className="ai-icon">
              <i className="fas fa-file-invoice"></i>
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
        </MM>
        <div className="side-bar-profile">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="side-bar-profile-img">
              <img src={user} alt="" />
            </div>
            <div className="profile-info1">
              <h4 className="fs-18 font-w500">Levi Siregar</h4>
              <span>leviregar@mail.com</span>
            </div>
            <div className="profile-button">
              <i className="fas fa-caret-down scale5 text-light"></i>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-2 progress-info">
            <span className="fs-12">
              <i className="fas fa-star text-orange me-2"></i>Task Progress
            </span>
            <span className="fs-12">20/45</span>
          </div>
          <div className="progress default-progress">
            <div
              className="progress-bar bg-gradientf progress-animated"
              style={{ width: "45%", height: "10px" }}
              role="progressbar"
            >
              <span className="sr-only">45% Complete</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            <strong>Fillow Saas Admin</strong> © 2022 All Rights Reserved
          </p>
          <p className="fs-12">
            Made with <span className="heart"></span> by Bluum
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
