import dayjs from "dayjs";

export const randomizeArr = (arr) => {
  return arr?.slice().sort(() => 0.5 - Math.random());
};

export const foldBy = (arr, dataToFold) => {
  const foldedData = {};

  arr?.forEach((el) => {
    if (!(el.id in foldedData)) foldedData[el.id] = el[dataToFold];
  });

  return foldedData;
};

export const prettyDate = (date) => {
  const it = dayjs(date);
  return it.isValid() ? it.format("MMM D, YYYY") : "";
};

export const createRowData = (id, name, episode, created) => {
  return { id, name, episode, created };
};

export const createRandomCharactersDataRows = (characters) => {
  const flattenedEpisodes = characters?.map((char) => char.episode).flat();
  const uniqueEpisodes = [...new Set(flattenedEpisodes)];
  const randomEpisodeRows = randomizeArr(uniqueEpisodes)?.map((ep) =>
    createRowData(ep.id, ep.name, ep.episode, ep.created)
  );

  return randomEpisodeRows;
};

export const createCharacterDataRows = (character) => {
  const characterRows = character?.episode?.map((ep) =>
    createRowData(ep.id, ep.name, ep.episode, ep.created)
  );

  return characterRows;
};

export const getCharacterById = (characters, id) =>
  characters?.find((character) => character.id === id);
