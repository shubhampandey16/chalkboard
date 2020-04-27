import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PromotionPanel from "./components/PromotionPanel/PromotionPanel";
import PodsRow from "./components/PodsRow";
import {Row, Col} from "react-bootstrap";

const data = {
  "promotionalPanel": [],
  "pods": [
    {
      "title": "ANCHO & AGAVE",
      "description": "Offering 20% off on specials",
      "details": "Steak Day! This wednesday buy one get one free Steak Lunch at King's Kitchen.",
      "image": "/images/anchoNagave.png"
    },
    {
      "title": "Cafe XYZ",
      "image": "/images/spcl2.jpg"
    },
    {
      "title": "ANCHO & AGAVE",
      "description": "Offering 20% off on specials",
      "details": "Steak Day! This wednesday buy one get one free Steak Lunch at King's Kitchen.",
      "image": "/images/anchoNagave.png"
    },
    {
      "title": "Cafe ABC",
      "image": "/images/spcl2.jpg"
    },
    {
      "title": "ANCHO & AGAVE",
      "description": "Offering 20% off on specials",
      "details": "Steak Day! This wednesday buy one get one free Steak Lunch at King's Kitchen.",
      "image": "/images/anchoNagave.png"
    },
    {
      "title": "Cafe XYZ",
      "image": "/images/spcl2.jpg"
    },
    {
      "title": "Restaurant 2",
      "description": "Offering 20% off on specials",
      "details": "Steak Day! This wednesday buy one get one free Steak Lunch at King's Kitchen.",
      "image": "/images/food_img.jpg"
    },
    {
      "title": "Cafe XYZ",
      "image": "/images/spcl2.jpg"
    }
  ]
};

const backGround = {
  backgroundColor: "#f8f9fa",
  width: "100%",
  height: "100%"
};
function App() {
  const podsData = data.pods;
  return (
    <div>
      <NavBar />
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
        <PodsRow podsDisp={podsData}/>
      </div>
    </div>
  );
}

export default App;
