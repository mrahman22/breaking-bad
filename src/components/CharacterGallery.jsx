import React, { Component } from "react";
import * as api from "../utils/api";
import CharacterCard from "./CharacterCard";
import Search from "./Search";

class CharacterGallery extends Component {
  state = {
    characters: [],
    isLoading: true,
    query: "",
  };

  componentDidMount() {
    this.getAllCharacters();
  }

  // added comment

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      api.fetchAllCharacters(this.state.query).then((characters) => {
        this.setState({ characters, isLoading: false });
      });
    }
  }

  getQuery = (query) => {
    this.setState({ query });
  };

  getAllCharacters = () => {
    api.fetchAllCharacters(this.state.query).then((characters) => {
      this.setState({ characters, isLoading: false });
    });
  };

  render() {
    return this.state.isLoading ? (
      <h1 className="center">Loading......</h1>
    ) : (
      <>
        <Search getQuery={this.getQuery} />
        <section className="cards">
          {this.state.characters.map((character) => {
            return (
              <CharacterCard key={character.char_id} character={character} />
            );
          })}
        </section>
      </>
    );
  }
}

export default CharacterGallery;
