import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";

import Character from "./Character";
import Starship from "./Starship";
import Vehicle from "./Vehicle";
import Species from "./Species";
import ExpandableAccordion from "./ExpandibleAccordion";

export default function Film({ film }) {
  const [charactersExpanded, setCharactersExpanded] = useState(false);
  const [starshipsExpanded, setStarshipsExpanded] = useState(false);
  const [vehiclesExpanded, setVehiclesExpanded] = useState(false);
  const [speciesExpanded, setSpeciesExpanded] = useState(false);

  const handleClickCharacters = (event) => {
    setCharactersExpanded((prev) => !prev);
  };

  const handleClickStarships = (event) => {
    setStarshipsExpanded((prev) => !prev);
  };

  const handleClickVehicles = (event) => {
    setVehiclesExpanded((prev) => !prev);
  };

  const handleClickSpecies = (event) => {
    setSpeciesExpanded((prev) => !prev);
  };

  return (
    <Card border={1} borderColor="black">
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
        <ExpandableAccordion
          title="Characters"
          expanded={charactersExpanded}
          onChange={handleClickCharacters}
          items={film.characters}
          renderItem={(item) => <Character key={item} character_url={item} />}
        />
        <ExpandableAccordion
          title="Starships"
          expanded={starshipsExpanded}
          onChange={handleClickStarships}
          items={film.starships}
          renderItem={(item) => <Starship key={item} starship_url={item} />}
        />
        <ExpandableAccordion
          title="Vehicles"
          expanded={vehiclesExpanded}
          onChange={handleClickVehicles}
          items={film.vehicles}
          renderItem={(item) => <Vehicle key={item} vehicle_url={item} />}
        />
        <ExpandableAccordion
          title="Species"
          expanded={speciesExpanded}
          onChange={handleClickSpecies}
          items={film.species}
          renderItem={(item) => <Species key={item} species_url={item} />}
        />
      </CardContent>
    </Card>
  );
}
