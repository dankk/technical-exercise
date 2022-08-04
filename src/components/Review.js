import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { FormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";

const boxStyle = { display: "flex", justifyContent: "space-between" };

function Review() {
  const navigate = useNavigate();
  const formContext = useContext(FormContext);
  const {
    state: { firstName, lastName, phoneNumber, address, selectedPokemon },
  } = formContext;

  const isSubmitDisabled = !(
    firstName &&
    lastName &&
    phoneNumber &&
    address &&
    selectedPokemon
  );

  const handleSubmit = () => {
    if (!isSubmitDisabled) {
      navigate("/4");
    } else {
      window.alert("something went wrong!");
    }
  };

  return (
    <>
      <Typography variant="h6" align="center">
        Review
      </Typography>
      <Stack spacing={1}>
        <Box sx={boxStyle}>
          <Typography>First Name</Typography>
          <Typography>{firstName}</Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography>Last Name</Typography>
          <Typography>{lastName}</Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography>Phone Number</Typography>
          <Typography>{phoneNumber}</Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography>Address</Typography>
          <Typography>{address}</Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography>Pokemon</Typography>
          <Typography>{selectedPokemon?.name}</Typography>
        </Box>
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
        <Button
          variant="outlined"
          onClick={() => navigate("/2")}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Review;
