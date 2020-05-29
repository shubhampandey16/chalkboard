import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PromotionPanel from "./components/PromotionPanel/PromotionPanel";
import PodsRow from "./components/PodsRow";
import { Row, Col } from "react-bootstrap";

const data = {
  ApplicationHeader: {
    appName: "Chalkboard",
    loggedinuserinfo: [
      {
        name: "John",
        emailId: "john@gmail.com",
        loggedIn: "Y",
      },
    ],
    menuSelectionData: [
      {
        category: "Resturant",
        subCategory: ["Mexican", "French Bakery"],
      },
      {
        category: "Home Goods",
        subCategory: ["Furniture", "Garden and Outdoors"],
      },
    ],
    searchData: [
      {
        id: 1,
        value: "Mexican",
      },
      {
        id: 2,
        value: "Coffee",
      },
      {
        id: 3,
        value: "American",
      },
      {
        id: 4,
        value: "Offering 20% off on specials",
      },
      {
        id: 5,
        value: "Grill Sandwich",
      },
      {
        id: 6,
        value: "Cappacino",
      },
      {
        id: 7,
        value: "Tacos",
      },
      {
        id: 8,
        value: "Wild Wings",
      },
      {
        id: 9,
        value: "Black Forect Pastry",
      },
    ],
  },
  panels: [
    {
      image: "/images/car1.jpg",
      header: "Header",
      caption: "Caption",
    },
    {
      image: "/images/car2.jpg",
      header: "Header",
      caption: "Caption",
    },
    {
      image: "/images/car3.jpg",
    },
  ],
  pods: [
    {
      businessId: "sdkfh-sdkjs-sjkdfh-skjhfd-erhjkj",
      title: "ANCHO & AGAVE",
      image: "/images/anchoNagave.png",
      category: "Restaurant",
      subCategory: "Mexican",
      displayType: "static",
      description: "Offering 20% off on specials",
      details:
        "Steak Day! This wednesday buy one get one free Steak Lunch at King's Kitchen.",
      address: "",
      phoneNumber: "",
      externalLink: ["", ""],
    },
    {
      businessId: "dsfla-efkjg-askjn-wlkjs-erhjkj",
      title: "Cafe XYZ",
      image: "/images/spcl2.jpg",
      category: "Coffee",
      subCategory: "Coffee",
      displayType: "static",
    },
    {
      businessId: "sdfjh-efkjg-sdfmh-wlkjs-erhjkj",
      title: "Culvers",
      image: "/images/food_img.jpg",
      category: "Restaurant",
      subCategory: "American",
      displayType: "static",
      description: "Offering 20% off on specials",
      details:
        "Steak Day! This wednesday buy one get one free Steak Lunch at King's Kitchen.",
    },
  ],
};

const backGround = {
  backgroundColor: "#f8f9fa",
  width: "100%",
  height: "100%",
};
function App() {
  const panelsData = data.panels;
  const podsData = data.pods;
  const itemList = data.searchData;
  return (
    <div>
      <NavBar navData={data.ApplicationHeader} />
      <div style={backGround}>
        <Row
          style={{
            paddingTop: ".5%",
            paddingLeft: ".5%",
            paddingBottom: ".5%",
            paddingRight: ".5%",
          }}
        >
          <Col>
            <PromotionPanel panels={panelsData} />
          </Col>
        </Row>
        <PodsRow podsDisp={podsData} />
      </div>
    </div>
  );
}

export default App;
