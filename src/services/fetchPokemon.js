const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchAllPokemon = async () => {
  const response = await fetch(`${BASE_URL}/?limit=10000`);
  const data = await response.json();
  return data;
};

export const fetchPokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
