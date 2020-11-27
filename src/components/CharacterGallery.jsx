import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterGallery({ characters, isLoading }) {
  return isLoading ? (
    <h1 className="center">Loading......</h1>
  ) : (
    <section className="cards">
      {characters.map((character) => {
        return <CharacterCard key={character.char_id} character={character} />;
      })}
    </section>
  );
}

export default CharacterGallery;
