import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, Divider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Film from "./components/Film";

function App() {
  const [films, setFilms] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data.results);
    setFilms(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box p={2}>
      <h1>Star Wars films</h1>
      <h3>Search:</h3>
      <TextField
        fullWidth
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Divider />
      <h2>Films:</h2>
      <Box display="flex" flexWrap="wrap" gap={2} p={2}>
        {films ? (
          films
            .filter((i) =>
              i.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((i) => <Film key={i.episode_id} film={i} />)
        ) : (
          <Box>Loading...</Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
