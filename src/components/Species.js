import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";

function Species({ species_url }) {
  const [species, setSpecies] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(species_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      setSpecies(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [species_url]);

  if (error) {
    return (
      <Card>
        <p>Error: {error}</p>{" "}
      </Card>
    );
  }

  if (!species) {
    return (
      <Card>
        {" "}
        <p>Loading...</p>{" "}
      </Card>
    );
  }

  if (species.detail == "Not found") {
    return <p>Species not found</p>;
  }

  return (
    <Card flex={1} sx={{ minWidth: 275, maxWidth: 275 }}>
      <CardContent>
        <h3>{species.name}</h3>
        <p>
          <u>Classification: </u>
          <br />
          {species.classification}
        </p>
        <p>
          <u>Designation: </u>
          <br />
          {species.designation}
        </p>
        <p>
          <u>Average Height: </u>
          <br />
          {species.average_height}
        </p>
        <p>
          <u>Average Lifespan: </u>
          <br />
          {species.average_lifespan}
        </p>
        <p>
          <u>Hair Colors: </u>
          <br />
          {species.hair_colors}
        </p>
        <p>
          <u>Skin Colors: </u>
          <br />
          {species.skin_colors}
        </p>
        <p>
          <u>Eye Colors: </u>
          <br />
          {species.eye_colors}
        </p>
        <p>
          <u>Language: </u>
          <br />
          {species.language}
        </p>
      </CardContent>
    </Card>
  );
}

export default Species;
