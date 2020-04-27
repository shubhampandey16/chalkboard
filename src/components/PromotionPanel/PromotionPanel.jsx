import React from "react";
import { Carousel } from "react-bootstrap";

class PromotionPanel extends React.Component {
  render() {

    const panelItems = this.props.panels;

    return (
      <div>
        <Carousel>
        {panelItems.map((panel, i) =>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={panel.image}
              alt="First slide"
              height="300"
            />
            <Carousel.Caption>
              <h3>{panel.header}</h3>
              <p>{panel.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
        </Carousel>
      </div>
    );
  }
}

export default PromotionPanel;
