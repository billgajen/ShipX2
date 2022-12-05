import React from 'react';
import PageTitle from "../../layouts/PageTitle";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";

/// imge
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import { Link } from "react-router-dom";

const Payments = () => {
  const chackbox = document.querySelectorAll(".bs_exam_topper input");
  const motherChackBox = document.querySelector(".bs_exam_topper_all input");

  return (
	  <Row>
	    <Col lg={12}>
	      <Card>
	        <Card.Header>
	          <Card.Title>Basic</Card.Title>
	        </Card.Header>
	        <Card.Body>
	          <Table responsive>
	            <thead>
	              <tr>
	                <th>#</th>
	                <th>Name</th>
	                <th>Status</th>
	                <th>Date</th>
	                <th>Price</th>
	              </tr>
	            </thead>
	            <tbody>
	              <tr>
	                <th>1</th>
	                <td>Kolor Tea Shirt For Man</td>
	                <td>
	                  <Badge variant="primary light">Sale</Badge>
	                </td>
	                <td>January 22</td>
	                <td className="color-primary">$21.56</td>
	              </tr>
	              <tr>
	                <th>2</th>
	                <td>Kolor Tea Shirt For Women</td>
	                <td>
	                  <Badge variant="success">Tax</Badge>
	                </td>
	                <td>January 30</td>
	                <td className="color-success">$55.32</td>
	              </tr>
	              <tr>
	                <th>3</th>
	                <td>Blue Backpack For Baby</td>
	                <td>
	                  <Badge variant="danger">Extended</Badge>
	                </td>
	                <td>January 25</td>
	                <td className="color-danger">$14.85</td>
	              </tr>
	            </tbody>
	          </Table>
	        </Card.Body>
	      </Card>
	    </Col>
	  </Row>
  );
}
export default Payments;