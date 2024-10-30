import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
  }, []);

  return (
    <div className="chars">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          location={character.location.name}
          origin={character.origin.name} 
        />
      ))}
    </div>
  );
  
}

export default HomePage;
