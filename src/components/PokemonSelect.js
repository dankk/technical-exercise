import { Box, Button, TextField } from "@mui/material";
import { memo, useContext } from "react";
import { areEqual, FixedSizeGrid as Grid } from "react-window";
import usePokemonFilter from "../hooks/usePokemonFilter";
import { FormContext } from "./FormContext";
import TypeFilter from "./TypeFilter";

function PokemonSelect() {
  const formContext = useContext(FormContext);
  const {
    state: { allPokemon, selectedPokemon },
    stepForward,
    stepBack,
    dispatch,
  } = formContext;

  const {
    filteredPokemon,
    setNameFilter,
    setTypeFilter,
    nameFilter,
    typeFilter,
  } = usePokemonFilter(allPokemon);

  const handleNext = () => {
    if (selectedPokemon) {
      stepForward();
    }
  };

  if (!filteredPokemon) return <>Loading...</>;

  const itemData = { filteredPokemon, dispatch };

  return (
    <>
      <TextField
        name="nameFilter"
        label="Filter by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <TypeFilter setTypeFilter={setTypeFilter} typeFilter={typeFilter} />
      <Grid
        itemData={itemData}
        columnCount={5}
        columnWidth={100}
        height={500}
        rowCount={filteredPokemon.length / 5}
        rowHeight={100}
        width={600}
      >
        {Cell}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
        <Button variant="outlined" onClick={stepBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={!selectedPokemon}
        >
          Next
        </Button>
      </Box>
    </>
  );
}

const Cell = memo(({ data, columnIndex, rowIndex, style }) => {
  const { filteredPokemon, dispatch } = data;

  if (!filteredPokemon || filteredPokemon.length === 0) return null;

  function handleSelect(selectedPokemon) {
    dispatch({ type: "selectedPokemon", payload: selectedPokemon });
  }

  const index = rowIndex * 5 + columnIndex;
  const pokemonData = filteredPokemon[index];

  if (!pokemonData) return null;

  return (
    <div style={style} onClick={() => handleSelect(pokemonData)}>
      <img src={pokemonData.image} alt={pokemonData.name} />
      <>{pokemonData.name}</>
    </div>
  );
}, areEqual);

export default PokemonSelect;
