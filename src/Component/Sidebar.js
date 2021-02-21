import React, { Component } from "react";
import "../CSS/sidebar.css";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="speedo sidebar__active">
          <i className="las la-tachometer-alt sidebar__active__icon"></i>
        </div>

        <div className="sms">
          <i className="las la-comments"></i>
        </div>

        <div className="folder">
          <i className="lar la-folder-open"></i>
        </div>

        <div className="message">
          <i className="las la-comment-alt"></i>
        </div>

        <div className="setting">
          <i className="las la-cog"></i>
        </div>
      </div>
    );
  }
}

export default Sidebar;
