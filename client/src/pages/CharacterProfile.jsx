import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import CharacterDetail from "../components/CharacterDetail";
import CharacterCard from "../components/CharacterCard";
import TrackTable from "../components/TrackTable";
import {
  randomizeArr,
  createCharacterDataRows,
  getCharacterById,
} from "../helpers/functions";
import "./CharacterProfile.css";

const CharacterProfile = ({ characters }) => {
  const { id } = useParams();

  const charactersData = characters;
  const characterData = getCharacterById(charactersData, id);

  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [randomizedCharacterData, setRandomizedCharacterData] = useState([]);

  useEffect(() => {
    setRandomizedCharacterData(randomizeArr(charactersData));
    setSelectedCharacter(characterData);
  }, [charactersData, characterData]);

  return (
    <div className="Landing">
      <div className="character-detail-header-container">
        <CharacterDetail character={characterData} />
      </div>
      <Stack direction="row" spacing={3} justifyContent="center">
        {randomizedCharacterData?.slice(0, 4).map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Stack>
      <div className="character-detail-table-container">
        <TrackTable rows={createCharacterDataRows(selectedCharacter)} />
      </div>
    </div>
  );
};

export default CharacterProfile;
