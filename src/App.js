import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import { useEffect } from "react";

function App() {
  const [films, setFilms] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    setFilms(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      {films.map((i) => (
        <Card key={i}>
          <CardContent>
            <h1>{i.title}</h1>
            <p>{i.release_date}</p>
            <p>{i.opening_crawl}</p>
            <p>{i.director}</p>
            <p>{i.producer}</p>
            <p>{i.url}</p>
            <p>{i.episode_id}</p>
            <p>{i.created}</p>
            <p>{i.edited}</p>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default App;
