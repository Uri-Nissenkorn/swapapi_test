import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";

function Vehicle({ vehicle_url }) {
  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(vehicle_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVehicle(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [vehicle_url]);

  if (error) {
    return (
      <Card>
        <p>Error: {error}</p>{" "}
      </Card>
    );
  }

  if (!vehicle) {
    return (
      <Card>
        {" "}
        <p>Loading...</p>{" "}
      </Card>
    );
  }

  if (vehicle.detail === "Not found") {
    return <p>Vehicle not found</p>;
  }

  return (
    <Card flex={1} sx={{ minWidth: 275, maxWidth: 275 }}>
      <CardContent>
        <h3>{vehicle.name}</h3>
        <p>
          <u>Model: </u>
          <br />
          {vehicle.model}
        </p>
        <p>
          <u>Manufacturer:</u>
          <br />
          {vehicle.manufacturer}
        </p>
        <p>
          <u>Cost:</u>
          <br />
          {vehicle.cost_in_credits}
        </p>
        <p>
          <u>Passengers:</u>
          <br />
          {vehicle.passengers}
        </p>
        <p>
          <u>Cargo Capacity:</u>
          <br />
          {vehicle.cargo_capacity}
        </p>
        <p>
          <u>Consumables:</u>
          <br />
          {vehicle.consumables}
        </p>
      </CardContent>
    </Card>
  );
}

export default Vehicle;
