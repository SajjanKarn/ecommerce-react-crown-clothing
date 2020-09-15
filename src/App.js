import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shoppage/shoppage.component";

import Header from "./components/header/header.component";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeUserAuth = null;

  componentDidMount() {
    this.unSubscribeUserAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    // close the subscription to avoid memory leaks.
    this.unSubscribeUserAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/signin" exact component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
