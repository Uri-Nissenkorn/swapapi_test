import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, TextField } from "@mui/material";
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
    <Box flex={1}>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
  );
}

export default App;
