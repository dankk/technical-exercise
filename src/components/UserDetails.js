import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import useValidation from "../hooks/useValidation";
import { FormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();
  const { validateField, errors } = useValidation();
  const formContext = useContext(FormContext);
  const { state, dispatch } = formContext;

  const { firstName, lastName, phoneNumber, address } = state;

  const isNextDisabled =
    Object.keys(errors).length > 0 ||
    !(firstName && lastName && phoneNumber && address);

  const handleChange = (e) => {
    validateField(e);
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleBlur = (e) => {
    validateField(e);
  };

  const handleNext = () => {
    if (!isNextDisabled) {
      navigate("/2");
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Contact Info
      </Typography>
      <Stack spacing={1}>
        <TextField
          error={!!errors.firstName}
          helperText={errors?.firstName}
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          error={!!errors.lastName}
          helperText={errors?.lastName}
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          error={!!errors.phoneNumber}
          helperText={errors?.phoneNumber}
          label="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          error={!!errors.address}
          helperText={errors?.address}
          label="Address"
          name="address"
          value={address}
          onChange={handleChange}
          onBlur={handleBlur}
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
    </Box>
  );
}

export default UserDetails;
