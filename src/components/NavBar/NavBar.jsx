import React, { PureComponent } from "react";
import "./NavBar.css";
import { Nav, Container, Row, Col } from "react-bootstrap";

const headerColor = {
  width: "100%",
  height: "60px",
  background: "black"
};
const ux_body1_white = {
  "font-size": "small",
  color: "white",
  "font-weight": "bold",
  position: "relative",
  left: "110px"
};

const ux_body1_contactUs = {
  "font-size": "small",
  color: "white",
  "font-weight": "bold"
};
const ux_title1_white = {
  height: "12px",
  color: "white"
};

const ux_bold = {
  "font-weight": "bold"
};
const NavBar = props => (
  <div style={headerColor}>
    <Container>
      <header>
        <Row>
          <Nav
            className="nav_toolbar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <Col xs={2} md={2}>
              <h1 style={ux_title1_white}>ChalkBoard</h1>
            </Col>
            <Col xs={{ size: 1, offset: 6 }} md={{ size: 1, offset: 6 }}>
              <Nav.Item>
                <Nav.Link href="/home" style={ux_body1_white}>
                  Sign Up
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={2} md={2}>
              <Nav.Item>
                <Nav.Link eventKey="enabled" enabled style={ux_body1_contactUs}>
                  Contact US
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Nav>
        </Row>
      </header>
    </Container>
  </div>
);

export default NavBar;
