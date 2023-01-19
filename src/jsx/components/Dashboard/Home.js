import React,{useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {Badge, Dropdown} from 'react-bootstrap';
import { useStateValue } from "../../../store/selectors/useStateValue";
import PerfectScrollbar from "react-perfect-scrollbar";

//Images
import product1 from './../../../images/product/4.jpg';
import chart1 from './../../../images/chart.png';
import pic3 from './../../../images/profile/small/pic3.jpg';
import pic4 from './../../../images/profile/small/pic4.jpg';
import pic5 from './../../../images/profile/small/pic5.jpg';
import pic6 from './../../../images/profile/small/pic6.jpg';
//import pic7 from './../../../images/profile/small/pic7.jpg';
import pic8 from './../../../images/profile/small/pic8.jpg';
import wind from './../../../images/big-wind.png';
import hunt from './../../../images/circle-hunt.png';
import amzlogo from './../../../images/amazon-logo.png';

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import ProjectStatisticsTab from './Dashboard/ProjectStatisticsTab';
import ProfileSlider from './Dashboard/ProfileSlider';
const CompletionApexChart = loadable(() =>
	pMinDelay(import("./Dashboard/CompletionApexChart"), 1000)
);
const ClientsColumnChart = loadable(() =>
	pMinDelay(import("./Dashboard/ClientsColumnChart"), 1000)
);
const NewCustomersApex = loadable(() =>
	pMinDelay(import("./Dashboard/NewCustomersApex"), 1000)
);
const NewCustomersApex2 = loadable(() =>
	pMinDelay(import("./Dashboard/NewCustomersApex2"), 1000)
);
const ProfileRedialApex = loadable(() =>
	pMinDelay(import("./Dashboard/ProfileRedialApex"), 1000)
);
const EmailChartApex = loadable(() =>
	pMinDelay(import("./Dashboard/EmailChartApex"), 1000)
);


const MessagesBlog  = [
	{images: pic8, title: 'Maren Rosser', para: 'Hei, dont forget to clear server cache!', datetime:'25min ago' },
	{images: pic5, title: 'Kaiya Bergson', para: 'I remember that project due is tomorrow.', datetime:'Yesterday, 8:24 AM' },
	{images: pic6, title: 'Ruben Press', para: 'Ok sir. I will fix it as soon as possible', datetime:'December 12th, 2020 10:24 AM' },
	{images: pic3, title: 'Cristofer Torff', para: 'Maybe we should schedule that meeting', datetime:'December 12th, 2020 10:24 AM' },
	{images: pic4, title: 'Ann Rosser', para: 'I dont’t know where that files saved dude.', datetime:'Yesterday, 8:24 AM' },
];

const Home = () => {	
	const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
	const { auth } = useStateValue();

	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
		auth.userType === "Supplier" && changePrimaryColor("color_6");
	}, []);
	
	return(
		<>
			<div className="row">
				<div className="col-xl-12">
					<div className="row">
						<div className="col-xl-6">
							<div className="row">
								<div className="col-xl-12">
									<div className="card tryal-gradient">
										<div className="card-body tryal row">
											<div className="col-xl-7 col-sm-6">
												<h2>Welcome Marco</h2>
												<span>Connect to your Amazon seller central account with [KH234] and track your orders & inventory levels automatically with our best automated systems.</span>
												<Link to={"#"} className="btn btn-rounded  fs-18 font-w500">Connect</Link>
											</div>
											<div className="col-xl-5 col-sm-6">
												<img src={amzlogo} alt="" className="sd-shape" />
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>	
						<div className="col-xl-6">
							<div className="row">
								<div className="col-xl-12">
									<div className="row">
										<div className="col-xl-6 col-sm-6">
											<div className="card">
												<div className="card-body d-flex px-4  justify-content-between">
													<div>
														<div className="">
															<span className="d-block fs-14 font-w600 text-primary">Inventory</span>
															<h2 className="fs-32 font-w700 text-danger">4</h2>
															<span className="fs-18 font-w500 d-block">Risk of going</span>
															<span className="d-block fs-16 font-w400">Out of Stock</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-sm-6">
											<div className="card">
												<div className="card-body d-flex px-4  justify-content-between">
													<div>
														<div className="">
															<span className="d-block fs-14 font-w600 text-primary">Inventory</span>
															<h2 className="fs-32 font-w700 text-warning">9</h2>
															<span className="fs-18 font-w500 d-block">Attention</span>
															<span className="d-block fs-16 font-w400">Order Now</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-sm-6">
											<div className="card">
												<div className="card-body d-flex px-4  justify-content-between">
													<div>
														<div className="">
															<span className="d-block fs-14 font-w600 text-primary">Products</span>
															<h2 className="fs-32 font-w700 text-danger"><span className="fs-18 font-w500 local_currency">$</span>7400.00</h2>
															<span className="fs-18 font-w500 d-block">Pending</span>
															<span className="d-block fs-16 font-w400">Payment</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-sm-6">
											<div className="card">
												<div className="card-body d-flex px-4  justify-content-between">
													<div>
														<div className="">
															<span className="d-block fs-14 font-w600 text-primary">Orders</span>
															<h2 className="fs-32 font-w700 text-danger">1</h2>
															<span className="fs-18 font-w500 d-block">Pending</span>
															<span className="d-block fs-16 font-w400">Order Action</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>							
						</div>							
					</div>	
				</div>	
			</div>
			<div className="row">
				<div className="col-xl-6">
					<div className="card">
						<div className="card-header  border-0 pb-0">
							<h4 className="card-title">Recent Orders</h4>
						</div>
						<div className="card-body">
							<PerfectScrollbar
								style={{ height: "300px" }}
								id="DZ_W_Todo1"
								className="widget-media dlab-scroll ps ps--active-y"
							>
								<ul className="timeline">
									<li>
										<div className="timeline-panel">
											<div className="media me-2">
												<img  alt="" width="50" src={product1} />
											</div>
											<div className="media-body">
												<h5 className="mb-1">White Retro Bodycon Ladies</h5>
												<small className="d-block">
												4000 Units - Air - $8000
												</small>
											</div>
											<Badge variant="danger badge-md light">Pending ></Badge>
										</div>
									</li>
									<li>
										<div className="timeline-panel">
											<div className="media me-2 media-success">
												<i className="fa fa-box"></i>
											</div>
											<div className="media-body">
												<h5 className="mb-1">White Retro Bodycon Ladies</h5>
												<small className="d-block">
												4000 Units - Air - $8000
												</small>
											</div>
											<Badge variant="warning badge-md light">Production ></Badge>
										</div>
									</li>
									<li>
										<div className="timeline-panel">
											<div className="media me-2 media-success">
												<i className="fa fa-box"></i>
											</div>
											<div className="media-body">
												<h5 className="mb-1">White Retro Bodycon Ladies</h5>
												<small className="d-block">
												4000 Units - Air - $8000
												</small>
											</div>
											<Badge variant="primary badge-md light">Shipped ></Badge>
										</div>
									</li>
									<li>
										<div className="timeline-panel">
											<div className="media me-2 media-success">
												<i className="fa fa-box"></i>
											</div>
											<div className="media-body">
												<h5 className="mb-1">White Retro Bodycon Ladies</h5>
												<small className="d-block">
												4000 Units - Air - $8000
												</small>
											</div>
											<Badge variant="primary badge-md light">Shipped ></Badge>
										</div>
									</li>
								</ul>
							</PerfectScrollbar>
						</div>
					</div>
				</div>
				<div className="col-xl-6">
					<div className="card">
						<div className="card-header border-0 pb-0">
							<h4 className="fs-20 font-w700 mb-0">Sales</h4>
							<Dropdown className="dropdown ms-2">
								<Dropdown.Toggle as="div" className="btn-link i-false" data-bs-toggle="dropdown">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5"/>
										<circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5"/>
										<circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5"/>
									</svg>
								</Dropdown.Toggle>
								<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
								<Dropdown.Item className="dropdown-item">Last 7 days</Dropdown.Item>
									<Dropdown.Item className="dropdown-item">Last 30 days</Dropdown.Item>
									<Dropdown.Item className="dropdown-item">Last 12 months</Dropdown.Item>
									<Dropdown.Item className="dropdown-item">This week</Dropdown.Item>
									<Dropdown.Item className="dropdown-item">This month</Dropdown.Item>
									<Dropdown.Item className="dropdown-item">Year to date</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="card-body pb-0">
							<div id="revenueMap" className="revenueMap">
								<CompletionApexChart />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body d-flex px-4  justify-content-between">
							<div>
								<div className="">
									<span className="d-block fs-14 font-w600 text-primary">Payments</span>
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
								<span className="d-block fs-14 font-w600 text-primary">Orders</span>
									<h2 className="fs-32 font-w700">9000</h2>
									<span className="fs-18 font-w500 d-block">Units Ordered</span>
									<span className="d-block fs-16 font-w400"><small className="text-success">+2%</small> Last 30 Days</span>
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
									<span className="d-block fs-14 font-w600 text-primary">Inventory</span>
									<h2 className="fs-32 font-w700">18446</h2>
									<span className="fs-18 font-w500 d-block">Total</span>
									<span className="d-block fs-16 font-w400">Available Units</span>
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
									<span className="d-block fs-14 font-w600 text-primary">Inventory</span>
									<h2 className="fs-32 font-w700 text-primary">7040</h2>
									<span className="fs-18 font-w500 d-block">Total</span>
									<span className="d-block fs-16 font-w400">Inbound</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Home;