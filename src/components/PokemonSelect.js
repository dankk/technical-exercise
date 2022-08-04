import { Box, Button, TextField, Typography } from "@mui/material";
import { memo, useContext } from "react";
import { areEqual, FixedSizeGrid } from "react-window";
import usePokemonFilter from "../hooks/usePokemonFilter";
import { FormContext } from "./FormContext";
import TypeFilter from "./TypeFilter";

const columnCount = 4;

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

  if (!allPokemon || !filteredPokemon) return <>Loading...</>;

  const itemData = { filteredPokemon, dispatch, selectedPokemon };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6">Select your favourite Pokemon</Typography>
      <Box sx={{ height: "96px" }}>
        {selectedPokemon ? (
          <img src={selectedPokemon.image} alt={selectedPokemon.name} />
        ) : null}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <TextField
          size="small"
          name="nameFilter"
          label="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <TypeFilter setTypeFilter={setTypeFilter} typeFilter={typeFilter} />
      </Box>
      <FixedSizeGrid
        itemData={itemData}
        columnCount={columnCount}
        columnWidth={120}
        height={400}
        rowCount={Math.ceil(filteredPokemon.length / columnCount)}
        rowHeight={120}
        width={500}
        style={{ marginTop: 8 }}
      >
        {Cell}
      </FixedSizeGrid>
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
    </Box>
  );
}

const Cell = memo(({ data, columnIndex, rowIndex, style }) => {
  const { filteredPokemon, dispatch, selectedPokemon } = data;

  if (!filteredPokemon || filteredPokemon.length === 0) return null;

  const handleSelect = (selectedPokemon) => {
    dispatch({ type: "selectedPokemon", payload: selectedPokemon });
  };

  const index = rowIndex * columnCount + columnIndex;
  const pokemonData = filteredPokemon[index];

  if (!pokemonData) return null;

  return (
    <Box
      style={{
        ...style,
        border: "1px solid gray",
        textAlign: "center",
        backgroundColor:
          selectedPokemon?.id === pokemonData.id ? "lightblue" : "",
      }}
      onClick={() => handleSelect(pokemonData)}
    >
      <>{pokemonData.name}</>
      <img src={pokemonData.image} alt={pokemonData.name} />
    </Box>
  );
}, areEqual);

export default PokemonSelect;
