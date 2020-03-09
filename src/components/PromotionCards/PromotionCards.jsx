import React, { Component } from "react";
import {
  Card,
  Button,
  Overlay,
  Popover,
  OverlayTrigger,
  ButtonToolbar
} from "react-bootstrap";
import food_img from "./food_img.jpg";

class PromotionCards extends React.Component {
  render() {
    return (
      <Card bg="dark" border="info" text="white" style={{ width: "100%" }}>
        <Card.Img variant="top" src={food_img} />
        <Card.Body>
          <Card.Title>Kings Kitchen</Card.Title>
          <Card.Text>
            King's Kitchen offerning special steak at $ 6.99 only
          </Card.Text>
          <ButtonToolbar>
            {["top"].map(placement => (
              <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Wednesday Special`}</Popover.Title>
                    <Popover.Content>
                      <strong>Steak Day!</strong> This wednesday buy one get one
                      free Steak Lunch at King's Kitchen .
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button variant="primary">See Specials!!</Button>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
        </Card.Body>
      </Card>
    );
  }
}

export default PromotionCards;
