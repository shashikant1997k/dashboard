import React, { Component } from "react";
import "../../CSS/charts.css";

export class Charts extends Component {
  constructor(props) {
    super(props);
    let arr = props.val;
    this.state = {
      label: props.label,
      value: arr,
      maxVal: Math.max(...arr),
    };
  }

  render() {
    return (
      <div className="charts">
        <div className="charts__bar">
          {this.state.label.map((v, i) => {
            let backgroundCol =
              i % 2 === 0 ? this.props.color1 : this.props.color2;
            let hght = this.state.value[i] * 20 + "px";
            return (
              <React.Fragment key={i}>
                <div
                  className="progress"
                  style={{
                    width: "8px",
                    height: this.state.maxVal * 20 + 25 + "px",
                    marginRight: "7px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: "8px",
                      height: hght,
                      background: backgroundCol,
                    }}
                  ></div>
                  <div className="progress__label">{v}</div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Charts;
