import React from "react";
import { Row } from "react-bootstrap";
import PromotionCards from "./PromotionCards/PromotionCards";

class PodsRow extends React.Component {
  render() {
    const podsDisplay = [];

    console.log("Iterating over pods");
    this.props.podsDisp.forEach((podDisp) => {
      podsDisplay.push(
        <PromotionCards
        title={podDisp.title}
        description={podDisp.description}
        details={podDisp.details}
        image={podDisp.image}
        key={podDisp.businessId}/>
      );
    });

    return(
      <div>
      <Row
          style={{
            "paddingLeft": "1.2%",
            "paddingBottom": ".5%",
            "paddingRight": "1.2%"
          }}>{podsDisplay}</Row>
      </div>
    );
  }
}

export default PodsRow;
