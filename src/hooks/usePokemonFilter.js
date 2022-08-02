import { useEffect, useState } from "react";

function usePokemonFilter(allPokemon) {
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("none");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    setFilteredPokemon(allPokemon);
  }, [allPokemon]);

  useEffect(() => {
    if (!allPokemon) return;

    let filteredPokemon = allPokemon;

    if (nameFilter) {
      filteredPokemon = filteredPokemon.filter((p) =>
        p.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    if (typeFilter !== "none") {
      filteredPokemon = filteredPokemon.filter((p) =>
        p.type.includes(typeFilter)
      );
    }

    setFilteredPokemon(filteredPokemon);
  }, [nameFilter, typeFilter, allPokemon]);

  return {
    filteredPokemon,
    setNameFilter,
    setTypeFilter,
    nameFilter,
    typeFilter,
  };
}

export default usePokemonFilter;
