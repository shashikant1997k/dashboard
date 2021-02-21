import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Main from "./Component/Main/Main";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__content">
          <Sidebar />
          <Router>
            <Switch>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
