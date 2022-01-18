import React, { Component } from "react";
import withCount from "./withCount.jsx";

class Film extends Component {
  render() {
    return <div>Film: {this.props.count}</div>;
  }
}

export default withCount(Film);
