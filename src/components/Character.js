import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";

function Character({ character_url }) {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(character_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [character_url]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Card flex={1} sx={{ minWidth: 275, maxWidth: 275 }}>
      {character ? (
        <CardContent>
          <h3>{character.name}</h3>
          <p>
            <u>Height: </u>
            <br />
            {character.height}
          </p>
          <p>
            <u>Mass:</u>
            <br />
            {character.mass}
          </p>
          <p>
            <u>Hair color: </u>
            <br />
            {character.hair_color}
          </p>
          <p>
            <u>Skin color: </u>
            <br />
            {character.skin_color}
          </p>
          <p>
            <u>Eye color: </u>
            <br />
            {character.eye_color}
          </p>
          <p>
            <u>Birth Year: </u>
            <br />
            {character.birth_year}
          </p>
        </CardContent>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
  );
}

export default Character;
