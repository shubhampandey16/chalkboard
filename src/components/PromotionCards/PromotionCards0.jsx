import React, { Component } from "react";
import {
  Card,
  Button,
  Overlay,
  Popover,
  OverlayTrigger,
  ButtonToolbar,
  Modal
} from "react-bootstrap";
import spcl2 from "./spcl3.jpg";

class PromotionCards0 extends React.Component {
  render() {
    return (
      <Card bg="light" border="light" text="dark" style={{ width: "100%" }}>
        <Card.Img variant="top" src={spcl2} />
        <Card.Body>
          <Card.Title>Restaurant XYZ</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default PromotionCards0;
