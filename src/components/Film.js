import {
  Box,
  Button,
  Card,
  CardContent,
  Popover,
  Popper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Character from "./Character";
import Starship from "./Starship";

export default function Film({ film }) {
  const [charactersExpanded, setCharactersExpanded] = useState(false);
  const [starshipsExpanded, setStarshipsExpanded] = useState(false);

  const handleClickCharacters = (event) => {
    setCharactersExpanded((prev) => !prev);
  };

  const handleClickStarships = (event) => {
    setStarshipsExpanded((prev) => !prev);
  };

  return (
    <Card>
      <CardContent>
        <h1>{film.title}</h1>
        <p>
          <u>Released: </u>
          <br />
          {film.release_date}
        </p>
        <p>
          <u>Opening Crawl: </u>
          <br />
          {film.opening_crawl}
        </p>
        <p>
          <u>Director: </u>
          <br />
          {film.director}
        </p>
        <p>
          <u>Producers:</u>
          <br />
          {film.producer}
        </p>
        <Accordion
          expanded={charactersExpanded}
          onChange={handleClickCharacters}
        >
          <AccordionSummary
            expandIcon={<Button>{charactersExpanded ? "-" : "+"}</Button>}
          >
            <Typography>Characters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box display={"flex"} flexWrap={"wrap"} gap={2}>
              {charactersExpanded &&
                film.characters.map((c) => (
                  <Character key={c} character_url={c} />
                ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={starshipsExpanded} onChange={handleClickStarships}>
          <AccordionSummary
            expandIcon={<Button>{starshipsExpanded ? "-" : "+"}</Button>}
          >
            <Typography>Starships</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box display={"flex"} flexWrap={"wrap"} gap={2}>
              {starshipsExpanded &&
                film.starships.map((s) => (
                  <Starship key={s} starship_url={s} />
                ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
