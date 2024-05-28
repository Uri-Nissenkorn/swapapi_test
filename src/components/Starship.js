import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";

function Starship({ starship_url }) {
  const [starship, setStarship] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(starship_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setStarship(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [starship_url]);

  if (error) {
    return (
      <Card>
        <p>Error: {error}</p>{" "}
      </Card>
    );
  }

  if (!starship) {
    return (
      <Card>
        {" "}
        <p>Loading...</p>{" "}
      </Card>
    );
  }

  if (starship.detail == "Not found") {
    return <p>Starship not found</p>;
  }

  return (
    <Card flex={1} sx={{ minWidth: 275, maxWidth: 275 }}>
      <CardContent>
        <h3>{starship.name}</h3>
        <p>
          <u>Model: </u>
          <br />
          {starship.model}
        </p>
        <p>
          <u>Manufacturer:</u>
          <br />
          {starship.manufacturer}
        </p>
        <p>
          <u>Cost:</u>
          <br />
          {starship.cost_in_credits}
        </p>
        <p>
          <u>Passengers:</u>
          <br />
          {starship.passengers}
        </p>
        <p>
          <u>Cargo Capacity:</u>
          <br />
          {starship.cargo_capacity}
        </p>
        <p>
          <u>Consumables:</u>
          <br />
          {starship.consumables}
        </p>
      </CardContent>
    </Card>
  );
}

export default Starship;
