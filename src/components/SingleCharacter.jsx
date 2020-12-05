import React, { Component } from "react";
import * as api from "../utils/api";
import CharacterCard from "./CharacterCard"

class SingleCharacter extends Component {
  state = {
    character: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getSingleCharacter();
  }

  getSingleCharacter = () => {
    const id = parseInt(this.props.character_id);
    api.fetchSingleCharacter(id).then((character) => {
      this.setState({ character, isLoading: false });
    });
  };

  render() {
      console.log(this.state.character)
    return (
      <div>
          <h1>{this.state.character.name}</h1>
      </div>
    );
  }
}

export default SingleCharacter;
