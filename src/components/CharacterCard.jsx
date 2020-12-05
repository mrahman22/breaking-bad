import React from "react";
import { Link } from "@reach/router";

export default function CharacterCard({ character }) {
  return (
    <Link to={`/characters/${character.char_id}`}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={character.img} alt="" />
          </div>
          <div className="card-back">
            <h1>{character.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {character.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {character.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {character.birthday}
              </li>
              <li>
                <strong>Status:</strong> {character.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
