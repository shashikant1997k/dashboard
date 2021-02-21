import React, { Component } from "react";
import "../../CSS/circleChart.css";

class CircleChart extends Component {
  componentDidMount() {
    // document
    //   .querySelector(".main__circleChart_1 .circleCh__progress")
    //   .classList.add(`cl_${this.props.bCol2}`);
  }
  render() {
    return (
      <div className="circleChart">
        <div className={"circleCh__progress blue cl_" + this.props.bCol2}>
          <span className="circleCh__progress-left">
            <span
              className="circleCh__progress-bar"
              style={{ borderColor: this.props.bCol1 }}
            ></span>
          </span>
          <span className="circleCh__progress-right">
            <span
              className="circleCh__progress-bar"
              style={{ borderColor: this.props.bCol1 }}
            ></span>
          </span>
        </div>
      </div>
    );
  }
}

export default CircleChart;
