import { Button, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "./FormContext";

function UserDetails() {
  const formContext = useContext(FormContext);
  const {
    state: { firstName, lastName, phoneNumber, address },
    dispatch,
  } = formContext;

  function handleChange(e) {
    dispatch({ type: e.target.name, payload: e.target.value });
  }

  return (
    <Stack spacing={1}>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
      />
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={handleChange}
      />
    </Stack>
  );
}

export default UserDetails;
