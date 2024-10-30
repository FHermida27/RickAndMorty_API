import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const { species } = useParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?species=${species}`
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [species]);

  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id}>
          <Link to={`/character/${character.id}`}>
            <CardMedia
              component="img"
              alt={character.name}
              height="250"
              image={character.image}
            />
            <CardContent>
              <Typography variant="h5">{character.name}</Typography>
              <Typography variant="body2" color="textSecondary">{character.species}</Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default CharacterList;
