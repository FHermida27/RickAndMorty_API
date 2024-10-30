import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import "../HomePage/HomePage.css";
import CharacterCard from "../HomePage/CharacterCard";

function AliensPage() {
  const [aliens, setAliens] = useState([]);

  useEffect(() => {
    const fetchAliens = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
      const alienCharacters = response.data.results.filter(
        (character) => character.species === "Alien"
      );
      setAliens(alienCharacters);
    };

    fetchAliens();
  }, []);

  return (
    <div className="chars">
      {aliens.length > 0 ? (
        aliens.map((alien) => (
          <Card key={alien.id} className="character-card">
            <Link
              to={`/character/${alien.id}`}
              style={{ textDecoration: "none" }}
            >
              <CharacterCard
                image={alien.image}
                name={alien.name}
                status={alien.status}
                species={alien.species}
                gender={alien.gender}
                location={alien.location.name}
                origin={alien.origin.name}
              />
            </Link>
          </Card>
        ))
      ) : (
        <Typography variant="h6">No alien characters found.</Typography>
      )}
    </div>
  );
}

export default AliensPage;
