import React, { Component } from "react";
import withCount from "./withCount.jsx";

class Movie extends Component {
  render() {
    return <div>Movie: {this.props.count}</div>;
  }
}

export default withCount(Movie);
