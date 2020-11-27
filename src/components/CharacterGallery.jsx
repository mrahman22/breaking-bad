import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterGallery({characters, isLoading}) {
  return isLoading ? (
    "Loading....."
  ) : (
    <section className="cards">
      {characters.map((character) => {
        return <CharacterCard key={character.char_id} character={character}/>
      })}
    </section>
  );
}

export default CharacterGallery;
