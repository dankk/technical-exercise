const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchAllPokemon = async () => {
  const allResponse = await fetch(`${BASE_URL}/?limit=150`);
  const allData = await allResponse.json();

  const promises = [];
  allData.results.forEach((pokemon) => {
    promises.push(fetchPokemon(pokemon.url));
  });

  const promiseResults = await Promise.all(promises);
  const result = promiseResults.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    type: pokemon.types.map((type) => type.type.name),
    id: pokemon.id,
  }));

  return result;
};

export const fetchPokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
