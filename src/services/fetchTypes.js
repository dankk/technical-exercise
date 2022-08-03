const BASE_URL = "https://pokeapi.co/api/v2/type";

export const fetchTypes = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};
