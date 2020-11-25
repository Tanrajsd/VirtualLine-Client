import React, { Component } from "react";
// import "./App.css";
class TimeElapsed extends Component {
    state = {
        timerStart: 0,
        timerTime: 0
      };
      componentDidMount() {
        console.log("timer started: %d\n", this.state.timerTime);
      this.setState({
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
      });
      this.timer = setInterval(() => {
        this.setState({
          timerTime: Math.round((Date.now() - this.state.timerStart)/60000) // dividing by 60000ms here is what actually converts it into min
        });                                                                 // as long as you save timerStart you can restart this timer as the proper time if the application closes
      }, 60000);   // this number is just how often its updating the time, we do it somewhat fast because if we set it at 60000 it might "unsync" and skip a min
    }

    componentWillUnmount() {
        console.log("Timer Deleted");
        clearInterval(this.timer); // if you dont clear the interval it will keep rerendering and take unecessary resources
      }

  render() {
    return (
      <div className="TimeElapsed">
        <div className="TimeElapsed-header">{this.state.timerTime}min</div>
      </div>
    );
  }
}
export default TimeElapsed;