import { MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchTypes } from "../services/fetchTypes";

function TypeFilter({ setTypeFilter, typeFilter }) {
  const [types, setTypes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTypes();
      return result;
    };

    fetchData().then((res) => {
      setTypes(res.results.map((type) => type.name));
    });
  }, []);

  if (!types) return null;

  return (
    <TextField
      size="small"
      select
      value={typeFilter}
      label="Filter by type"
      onChange={(e) => setTypeFilter(e.target.value)}
      sx={{ width: 200 }}
    >
      <MenuItem value={"none"}>-</MenuItem>
      {types.map((type) => (
        <MenuItem key={`type-${type}`} value={type}>
          {type}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default TypeFilter;
