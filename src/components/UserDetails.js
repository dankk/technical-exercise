import { Button, Stack, TextField } from "@mui/material";

function UserDetails() {
  return (
    <Stack spacing={1}>
      <TextField label="First Name" name="firstName" />
      <TextField label="Last Name" name="lastName" />
      <TextField label="Phone Number" name="phoneNumber" />
      <TextField label="Address" name="address" />
      <Button variant="outlined">Next</Button>
    </Stack>
  );
}

export default UserDetails;
