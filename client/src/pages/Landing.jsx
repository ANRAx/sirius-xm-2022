import React, { useState, useEffect} from "react";
import { Stack } from "@mui/material";
import Header from "../components/Header";
import CharacterCard from "../components/CharacterCard";
import TrackTable from "../components/TrackTable";
import {
  randomizeArr,
  createRandomCharactersDataRows,
} from "../helpers/functions";
import "./Landing.css";

const Landing = ({ characters }) => {
  const charactersData = characters;

  const [randomizedCharacterData, setRandomizedCharacterData] = useState([]);

  useEffect(() => {
    setRandomizedCharacterData(randomizeArr(charactersData));
  }, [charactersData]);
  
  return (
    <div className="Landing">
      <div className="landing-header-container">
        <Header />
      </div>
      <Stack direction="row" spacing={3} justifyContent="center">
        {randomizedCharacterData?.slice(0, 4).map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Stack>
      <div className="landing-table-container">
        <TrackTable
          rows={createRandomCharactersDataRows(randomizedCharacterData)}
        />
      </div>
    </div>
  );
}

export default Landing;
