import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PromotionPanel from "./components/PromotionPanel/PromotionPanel";
import PromotionCards from "./components/PromotionCards/PromotionCards";
import { Col, Row } from "react-bootstrap";

const backGround = {
  backgroundColor: "#EBEDF0",
  width: "100%",
  height: "800px"
};
let count = 0;
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div style={backGround}>
        <PromotionPanel />
        <Row
          style={{
            "padding-top": "10px",
            "padding-left": "2px",
            "padding-right": "2px"
          }}
        >
          <Col md={3}>
            <PromotionCards />
          </Col>
          <Col md={3}>
            <PromotionCards />
          </Col>
          <Col md={3}>
            <PromotionCards />
          </Col>
          <Col md={3}>
            <PromotionCards />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
