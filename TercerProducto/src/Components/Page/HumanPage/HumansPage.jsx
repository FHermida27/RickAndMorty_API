import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import "../HomePage/HomePage.css";
import CharacterCard from "../HomePage/CharacterCard";

function HumansPage() {
  const [humans, setHumans] = useState([]);

  useEffect(() => {
    const fetchHumans = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
      const humanCharacters = response.data.results.filter(
        (character) => character.species === "Human"
      ); 
      setHumans(humanCharacters);
    };

    fetchHumans();
  }, []);

  return (
    <div className="chars">
      {humans.length > 0 ? (
        humans.map((human) => (
          <Card key={human.id} className="character-card">
            <Link
              to={`/character/${human.id}`}
              style={{ textDecoration: "none" }}
            >
              <CharacterCard
                image={human.image}
                name={human.name}
                status={human.status}
                species={human.species}
                gender={human.gender}
                location={human.location.name}
                origin={human.origin.name}
              />
            </Link>
          </Card>
        ))
      ) : (
        <Typography variant="h6">No human characters found.</Typography>
      )}
    </div>
  );
}

export default HumansPage;
