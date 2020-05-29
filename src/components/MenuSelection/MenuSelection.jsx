import React, { useState, useRef } from "react";
import { Nav } from "react-bootstrap";
import MenuPopUp from "./MenuPopUp";

const MenuSelection = (props) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const [modalShow, setModalShow] = React.useState(false);
  const tmp = props.menuSelection.menuSelectionData;
  console.log(">>>>>>>>>" + tmp);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Nav.Link onClick={() => setModalShow(true)} style={{ color: "white" }}>
        <h5>Categories</h5>
      </Nav.Link>

      <MenuPopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
        menuSelection={props.menuSelection.menuSelectionData}
        loggedinuserinfo={props.menuSelection.loggedinuserinfo}
      />
    </div>
  );
};

export default MenuSelection;
