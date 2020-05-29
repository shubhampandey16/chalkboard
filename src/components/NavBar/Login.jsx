import React, { useState, useRef, ref } from "react";
import { Form, Button, Nav, Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function PopUp(props) {
  const classes = useStyles();

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      //className={styles.popUpPosition}
      style={{ top: "-22%", left: "-30%" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="MenuPopUp">
          <b>Hello</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
}

const LoginPopUp = (props) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const [modalShow, setModalShow] = React.useState(false);
  console.log("hello before hello");
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Nav.Link onClick={() => setModalShow(true)} style={{ color: "#007bff" }}>
        <h5>Sign In</h5>
      </Nav.Link>
      <PopUp show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default LoginPopUp;
