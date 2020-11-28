import React, { Component } from "react";

class TimeElapsed extends Component {

  // To get minutes use 60000
  state = {
    time: Math.round((Date.now() - this.props.row.rawTime) / 60000)
  };
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Math.round((Date.now() - this.props.row.rawTime) / 60000) }), 60000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="TimeElapsed">
        <div className="TimeElapsed-header">{this.state.time}min</div>
      </div>
    );
  }
}
export default TimeElapsed;