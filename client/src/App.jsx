import React from "react";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import LoadingState from "./components/LoadingState";
import CharacterProfile from "./pages/CharacterProfile";
import { foldBy } from "./helpers/functions";
import { CHARACTERS_QUERY } from "./helpers/api";
import "./App.css";
// import * as pages from './pages'; // also create a pages/index.js that exports every component

function App() {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY);

  const charactersData = data?.characters.results;
  const episodesDataMap = foldBy(charactersData, "episode");

  return (
    <>
      {loading && !data ? (
        <LoadingState />
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  characters={charactersData}
                  episodes={episodesDataMap}
                  loading={loading}
                />
              }
            />
            <Route
              path="/about/:id"
              element={
                <CharacterProfile
                  characters={charactersData}
                  loading={loading}
                />
              }
            ></Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
