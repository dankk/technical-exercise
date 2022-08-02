import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import useValidation from "../hooks/useValidation";
import { FormContext } from "./FormContext";

function UserDetails() {
  const { validateField, errors } = useValidation();
  const formContext = useContext(FormContext);
  const {
    state: { firstName, lastName, phoneNumber, address },
    stepForward,
    dispatch,
  } = formContext;

  const isNextDisabled =
    Object.keys(errors).length > 0 ||
    !(firstName && lastName && phoneNumber && address);

  const handleChange = (e) => {
    validateField(e);
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleNext = () => {
    if (!isNextDisabled) {
      stepForward();
    }
  };

  return (
    <>
      <Stack spacing={1}>
        <TextField
          error={!!errors.firstName}
          helperText={errors?.firstName}
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          onBlur={validateField}
        />
        <TextField
          error={!!errors.lastName}
          helperText={errors?.lastName}
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          onBlur={validateField}
        />
        <TextField
          error={!!errors.phoneNumber}
          helperText={errors?.phoneNumber}
          label="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          onBlur={validateField}
        />
        <TextField
          error={!!errors.address}
          helperText={errors?.address}
          label="Address"
          name="address"
          value={address}
          onChange={handleChange}
          onBlur={validateField}
        />
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          Next
        </Button>
      </Box>
    </>
  );
}

export default UserDetails;
