import React from "react";
import { Modal, Button, Tab, Row, Col, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { deepOrange, green, blue, grey } from "@material-ui/core/colors";
import styles from "./MenuSelection.css";
//import { loadCSS } from "fg-loadcss";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  grey: {
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
  },
}));

function CheckboxListSecondary(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const subcategory = props.subCategory;
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense className={classes.root}>
      {subcategory.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar className={classes.blue}>{value.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value}`} />
          </ListItem>
        );
      })}
    </List>
  );
}

function ExpansionPanelMenu(props) {
  const classes = useStyles();
  const menuData = props.menuSelection;

  return (
    <div className={classes.root}>
      {menuData.map((value) => {
        return (
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <Icon
                  className="fa fa-plus-circle"
                  style={{ color: blue[500] }}
                />
              </Typography>
              <Typography className={classes.heading}>
                {value.category}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <CheckboxListSecondary subCategory={value.subCategory} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
}

function MenuPopUp(props) {
  const classes = useStyles();
  const userName = props.loggedinuserinfo.map((value) => value.name);
  const userAvatar = userName.toString().charAt(0);
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
        <Avatar className={classes.grey}>{userAvatar}</Avatar>
        <Modal.Title id="MenuPopUp">
          <b>Hello, {userName}</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable>
        <ExpansionPanelMenu menuSelection={props.menuSelection} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default MenuPopUp;
