import React from "react";
import {
  Card,
  Button,
  Popover,
  OverlayTrigger,
  ButtonToolbar,
  Col
} from "react-bootstrap";

class PromotionCards extends React.Component {
  render() {
    const title = this.props.title;
    const description = this.props.description;
    const image = this.props.image;
    const details = this.props.details;
    return (
      <Col md={3} className="cardNoPadding">
        <Card bg="light" border="light" text="dark" style={{ width: "100%" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <ButtonToolbar>
              {["top"].map(placement => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Title as="h3">{`Today's Special`}</Popover.Title>
                      <Popover.Content>
                        {details}
                      </Popover.Content>
                    </Popover>
                  }
                >
                <Button variant="link">details</Button>
                </OverlayTrigger>
              ))}
            </ButtonToolbar>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default PromotionCards;
