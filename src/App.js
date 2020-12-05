import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import CharacterGallery from "./components/CharacterGallery";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <CharacterGallery path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
