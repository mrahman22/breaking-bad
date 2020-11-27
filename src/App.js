import "./App.css";
import React, { Component } from "react";
import * as api from "./utils/api";
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";

class App extends Component {
  state = {
    characters: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getAllCharacters();
  }

  getAllCharacters = () => {
    api.fetchAllCharacters().then((characters) => {
      this.setState({characters, isLoading: false})
    })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CharacterGallery characters={this.state.characters} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
