import React, { Component } from "react";
import {Link} from "@reach/router";
import * as api from "../utils/api";

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
    const { character } = this.state;
    return (
      <>
        <div className="single-character-container">
          <div className="single-character">
            <h2>{character.name}</h2>
            <img src={character.img} alt="" />
            <ul>
              <li>
                <span className="red">Birth Date:</span> {character.birthday}
              </li>
              <li>
                <span className="red">Nickname:</span> {character.nickname}
              </li>
              <li>
                <span className="red">Actor:</span> {character.portrayed}
              </li>
            </ul>
          </div>
        </div>
        <div className="btn-container">
          <Link to={"/"}>
          <button>BACK</button>
          </Link>
        </div>
      </>
    );
  }
}

export default SingleCharacter;
