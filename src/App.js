import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PromotionPanel from "./components/PromotionPanel/PromotionPanel";
import PromotionCards from "./components/PromotionCards/PromotionCards";
import PromotionCards0 from "./components/PromotionCards/PromotionCards0";
import { Col, Row } from "react-bootstrap";

const backGround = {
  backgroundColor: "#f8f9fa",
  width: "100%",
  height: "100%"
};
let count = 0;
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <NavBar></NavBar>
      <div style={backGround}>
        <Row style={{
          "paddingTop": ".5%",
          "paddingLeft": ".5%",
          "paddingBottom": ".5%",
          "paddingRight": ".5%"
        }}>
          <Col>
            <PromotionPanel />
          </Col>
        </Row>
        <Row
          style={{
            "paddingLeft": "1.2%",
            "paddingBottom": ".5%",
            "paddingRight": "1.2%"
          }}
        >
          <Col md={3} className="cardNoPadding">
            <PromotionCards />
          </Col>
          <Col md={3} className="cardNoPadding">
            <PromotionCards0 />
          </Col>
          <Col md={3} className="cardNoPadding">
            <PromotionCards />
          </Col>
          <Col md={3} className="cardNoPadding">
            <PromotionPanel />
          </Col>
        </Row>
        <Row
          style={{
            "paddingLeft": "1.2%",
            "paddingBottom": ".5%",
            "paddingRight": "1.2%"
          }}
        >
          <Col md={3} className="cardNoPadding">
            <PromotionCards0 />
          </Col>
          <Col md={3} className="cardNoPadding">
            <PromotionCards />
          </Col>
          <Col md={3} className="cardNoPadding">
            <PromotionCards0 />
          </Col>
          <Col md={3} className="cardNoPadding">
            <PromotionCards />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
