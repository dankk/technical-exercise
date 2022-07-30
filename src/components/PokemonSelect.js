import { memo, useContext, useEffect, useState } from "react";
import { areEqual, FixedSizeGrid as Grid } from "react-window";
import { fetchAllPokemon, fetchPokemon } from "../services/fetchPokemon";
import { FormContext } from "./FormContext";

function PokemonSelect() {
  const formContext = useContext(FormContext);
  const { dispatch } = formContext;
  const [allPokemon, setAllPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllPokemon();
      return result;
    };

    fetchData().then((res) => setAllPokemon(res.results));
  }, []);

  if (!allPokemon) return null;

  const itemData = { allPokemon, dispatch };

  return (
    <Grid
      itemData={itemData}
      columnCount={5}
      columnWidth={100}
      height={500}
      rowCount={allPokemon.length / 5}
      rowHeight={100}
      width={600}
    >
      {Cell}
    </Grid>
  );
}

const Cell = memo(({ data, columnIndex, rowIndex, style }) => {
  const { allPokemon, dispatch } = data;
  const [pokemonData, setPokemonData] = useState();

  function handleSelect(selectedPokemon) {
    dispatch({ type: "pokemon", payload: selectedPokemon });
  }

  useEffect(() => {
    const fetchData = async () => {
      const index = rowIndex * 5 + columnIndex;
      const result = await fetchPokemon(allPokemon[index].url);
      return result;
    };

    fetchData().then((res) => setPokemonData(res));
  }, []);

  if (!pokemonData) return null;

  return (
    <div style={style} onClick={() => handleSelect(pokemonData)}>
      <img src={pokemonData.sprites.front_default} />
      <>{pokemonData.name}</>
    </div>
  );
}, areEqual);

export default PokemonSelect;
