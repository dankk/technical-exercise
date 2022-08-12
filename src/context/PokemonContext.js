import { createContext, useEffect, useState } from "react";
import PokemonService from "../services/pokemonService";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [allPokemon, setAllPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const pokemonService = new PokemonService();
      const result = await pokemonService.fetchAllPokemon();
      return result;
    };

    fetchData().then((res) => {
      setAllPokemon(res);
    });
  }, []);

  return (
    <PokemonContext.Provider value={{ allPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
