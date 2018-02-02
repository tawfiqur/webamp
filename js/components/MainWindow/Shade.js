import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

import { toggleMainWindowShadeMode } from "../../actionCreators";

class Shade extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  render() {
    return (
      <div
        id="shade"
        className={classnames(this.state)}
        onClick={() => {
          if (!this.state.clicked) {
            this.setState({ clicked: true });
          }
          this.props.handleClick();
        }}
        title="Toggle Windowshade Mode"
      />
    );
  }
}

const mapDispatchToProps = {
  handleClick: toggleMainWindowShadeMode
};

export default connect(() => ({}), mapDispatchToProps)(Shade);
