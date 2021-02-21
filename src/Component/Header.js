import React, { Component } from "react";
import "../CSS/header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <div>
            <span>.</span>
          </div>
        </div>
        <div className="header__tabs">
          <div className="header__overview header__tabs_active">Overview</div>
          <div className="header__campaigns">Campaigns</div>
          <div className="header__analytics">Analytics</div>
        </div>
        <div className="header__btn">
          <button className="btn btn-primary">Premium</button>
        </div>
      </div>
    );
  }
}

export default Header;
