import React from "react";
import { Row } from "react-bootstrap";
import PromotionCards from "./PromotionCards/PromotionCards";

class PodsRow extends React.Component {
  render() {
    const podsDisplay = [];
    let count = 0;

    console.log("Iterating over pods");
    this.props.podsDisp.forEach((podDisp) => {
      podsDisplay.push(
        <PromotionCards
        title={podDisp.title}
        description={podDisp.description}
        details={podDisp.details}
        image={podDisp.image}
        key={count}/>
      );
      count++;
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
