import React, { Component } from "react";
//When we need to modify the state using the previous state
//then pass the argument to the funtion setSate , this keyword does not work in this case

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return <div></div>;
  }
}

export default Counter;
