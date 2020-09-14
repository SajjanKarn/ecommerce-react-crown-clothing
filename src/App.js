import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";

class App extends Component {
  render() {
    const HatsPage = () => (
      <div className="hatsPage">
        <h1>HATS Page</h1>
      </div>
    );
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/hats" exact component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
