const BASE_URL_DEFAULT = "https://pokeapi.co/api/v2";

class PokemonService {
  constructor(BASE_URL = BASE_URL_DEFAULT) {
    this.BASE_URL = BASE_URL;
  }

  async fetchAllPokemon() {
    const allResponse = await fetch(`${this.BASE_URL}/pokemon?limit=150`);
    const allData = await allResponse.json();

    const promises = [];
    allData.results.forEach((pokemon) => {
      promises.push(this.fetchPokemon(pokemon.url));
    });

    const promiseResults = await Promise.all(promises);
    const result = promiseResults.map((pokemon) => ({
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      type: pokemon.types.map((type) => type.type.name),
      id: pokemon.id,
    }));

    return result;
  }

  async fetchPokemon(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchTypes() {
    const response = await fetch(`${this.BASE_URL}/type`);
    const data = await response.json();
    return data;
  }
}

export default PokemonService;
