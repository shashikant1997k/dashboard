import React, { Component } from "react";
import "../../CSS/table.css";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
    };
  }

  render() {
    return (
      <div className="_table">
        <div className="table__header">
          <span>ID</span>
          <span>USER ID</span>
          <span>TITLE</span>
          <span style={{ textAlign: "center" }}>COMPLETED</span>
        </div>
        <div className="table__body">
          {this.props.item.map((val, i) => (
            <div
              className="table__rows"
              id={"table__rows_" + val.id}
              key={val.id}
            >
              <span>{val.id}</span>
              <span>{val.userId}</span>
              <span>{val.title}</span>
              <span
                style={{ textTransform: "capitalize", textAlign: "center" }}
              >
                <button
                  className={
                    val.completed ? "btn btn-primary" : "btn btn-default"
                  }
                >
                  {String(val.completed)}
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Table;
