import React from "react";
import { Stack } from "@mui/material";
import Header from "../components/Header";
import CharacterCard from "../components/CharacterCard";
import TrackTable from "../components/TrackTable";
import {
  randomizeArr,
  createRandomCharactersDataRows,
} from "../helpers/functions";
import "./Landing.css";

class Landing extends React.Component {
  state = {
    randomCharacterData: [],
  };

  componentDidMount() {
    const { characters } = this.props;

    this.setState({
      randomCharacterData: randomizeArr(characters),
    });
  }

  render() {
    const { randomCharacterData } = this.state;

    return (
      <div className="Landing">
        <div className="landing-header-container">
          <Header />
        </div>
        <Stack direction="row" spacing={3} justifyContent="center">
          {randomCharacterData?.slice(0, 4).map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Stack>
        <div className="landing-table-container">
          <TrackTable
            rows={createRandomCharactersDataRows(randomCharacterData)}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
