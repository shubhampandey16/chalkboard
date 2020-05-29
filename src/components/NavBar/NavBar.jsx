import React from "react";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import MenuSelection from "../MenuSelection/MenuSelection";
import AutoComplete from "../AutoCompleteTextBox/AutoCompleteTextBox";
import LoginPopUp from "./Login";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">
            <h1>{this.props.navData.appName}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <MenuSelection menuSelection={this.props.navData} />
              <AutoComplete itemsList={this.props.navData.searchData} />
            </Nav>
            <LoginPopUp />
            <Nav.Link href="#link">Sign Up</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
