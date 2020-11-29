import "./App.css";
import React, { Component } from "react";
import * as api from "./utils/api";
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import Search from "./components/Search";

class App extends Component {
  state = {
    characters: [],
    isLoading: true,
    query: "",
  };

  componentDidMount() {
    this.getAllCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query) {
      api.fetchAllCharacters(this.state.query).then((characters) => {
        this.setState({ characters, isLoading: false });
      });
    }
  }

  getQuery = (query) => {
    this.setState({query})
  }


  getAllCharacters = () => {
    api.fetchAllCharacters(this.state.query).then((characters) => {
      this.setState({ characters, isLoading: false });
    });
  };




  render() {
    return (
      <div>
        <Header />
        <Search getQuery={this.getQuery}/>
        <CharacterGallery
          characters={this.state.characters}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
