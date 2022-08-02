import { MenuItem, TextField } from "@mui/material";

function TypeFilter({ setTypeFilter, typeFilter }) {
  return (
    <TextField
      select
      value={typeFilter}
      label="Filter by type"
      onChange={(e) => setTypeFilter(e.target.value)}
      sx={{ width: 200 }}
    >
      <MenuItem value={"none"}>-</MenuItem>
      <MenuItem value={"fire"}>Fire</MenuItem>
      <MenuItem value={"water"}>Water</MenuItem>
      <MenuItem value={"normal"}>Normal</MenuItem>
    </TextField>
  );
}

export default TypeFilter;
