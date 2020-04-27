import React from "react";
import PodsRow from "./PodsRow";

class Pods extends React.Component {
  render() {
    const podsRow = [];
    const podsDisp = [];
    let row=0;
    let count = 0;

    console.log("Iterating over pods");
    this.props.pods.forEach((pod) => {
      podsDisp.push(pod);
      count++;
      if (count % 4 === 0) {
        podsRow.push(
          <PodsRow
            podsDisp={podsDisp}
            key={row}/>
        );
        podsDisp.length = 0;
        row++;
      }
    });

    return(
      <div>
        {podsRow}
      </div>
    );
  }
}

export default Pods;
