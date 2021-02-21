import React, { Component } from "react";
import "../../CSS/main.css";
import Charts from "./Charts";
import CircleChart from "./CircleChart";
import Table from "./Table";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
      ],
      val: [1.5, 1.8, 1.5, 2, 1, 2.2, 2.8, 1.5, 1.8, 1.6, 2, 1, 2.2, 2.6, 2.8],
      item: [],
      currentItem: [],
      activePage: 1,
      min: 1,
      max: 25,
    };

    this.pageClicked = this.pageClicked.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          item: data,
          currentItem: data.filter((v) => v.id <= 25),
        })
      );
  }

  pageClicked(e) {
    let page = Number(e.target.dataset.id) + 1;
    console.log(page);
    let max = page * 25;
    let min = Number(max) - 24;
    console.log(min, max);
    this.setState({
      currentItem: this.state.item.filter(
        (val) => val.id > min && val.id <= max
      ),
      min: min,
      max: max,
    });
    const elems = Array.from(document.querySelectorAll(".page__no"));
    elems.forEach((elem) => elem.classList.remove("active"));
    e.target.classList.add("active");
  }

  render() {
    return (
      <div className="main">
        <div className="main__top">
          <div className="main__top__h">Data Overview</div>
          <div className="progress__div">
            <div className="main__progress">
              <div className="progress-bar"></div>
            </div>
            <div className="main__progress__txt">
              <span>643 </span>insertions needed to complete{" "}
            </div>
          </div>
        </div>

        <div className="mainwith__table">
          <div className="main__content">
            <div className="main__charts">
              <div className="main__info">
                <div className="__info_title">General Results</div>
                <div className="__info_con">
                  <span>9.401</span> <span>Followers</span>
                </div>
              </div>
              <div className="__charts">
                <div className="main__barChart">
                  <Charts
                    color1="#007bff"
                    color2="#B2D6FF"
                    label={this.state.label}
                    val={this.state.val}
                  />
                </div>

                <div className="main__circleChart main__circleChart_1">
                  <CircleChart bCol1="#0077ff" bCol2="b2d6ff" />
                </div>
              </div>
            </div>

            <div className="main__charts">
              <div className="main__info">
                <div className="__info_title">Rating by category</div>
                <div className="__info_con">
                  <span>3.900</span> <span>Followers</span>
                </div>
              </div>
              <div className="__charts">
                <div className="main__barChart">
                  <Charts
                    color1="#f0166d"
                    color2="#F78AB6"
                    label={this.state.label}
                    val={this.state.val}
                  />
                </div>

                <div className="main__circleChart main__circleChart_2">
                  <CircleChart bCol1="#f0166d" bCol2="f78ab6" />
                </div>
              </div>
            </div>

            <div className="main__sideTable">
              <div className="main__row">
                <span className="__title">TERM 1</span>
                <span className="__value">85.08</span>
              </div>
              <div className="main__row">
                <span className="__title">TERM 2</span>
                <span className="__value">1.76</span>
              </div>

              <div className="main__row">
                <span className="__title">TERM 3</span>
                <span className="__value">33.42</span>
              </div>
              <div className="main__row">
                <span className="__title">TERM 4</span>
                <span className="__value">75.11</span>
              </div>
            </div>
          </div>
          <div className="main__Table">
            <p>Tasks</p>
            <Table
              activePage={this.state.activePage}
              item={this.state.currentItem}
            />

            <div className="table__pagignation">
              <div className="current__page_n">
                Showing <span>{this.state.min}</span> to{" "}
                <span>{this.state.max}</span> of {this.state.item.length}{" "}
                elements
              </div>
              <div className="pagignation__div">
                <span>&laquo;</span>
                {Array(Number(this.state.item.length / 25))
                  .fill()
                  .map((v, i) => (
                    <span
                      className={i + 1 === 1 ? "page__no active" : "page__no"}
                      onClick={this.pageClicked}
                      data-id={i}
                      key={i}
                    >
                      {i + 1}
                    </span>
                  ))}
                <span>&raquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
