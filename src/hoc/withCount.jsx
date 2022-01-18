import React from "react";

function withCount(Component) {
  return class WithCount extends React.Component {
    state = { count: 0 };
    countUp = () => {
      const count = this.state.count + 1;
      this.setState({ count });
    };
    render() {
      return (
        <div onClick={this.countUp}>
          <Component count={this.state.count} />
        </div>
      );
    }
  };
}

export default withCount;
