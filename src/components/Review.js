import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { FormContext } from "./FormContext";

const boxStyle = { display: "flex", justifyContent: "space-between" };

function Review() {
  const formContext = useContext(FormContext);
  const {
    state: { firstName, lastName, phoneNumber, address, selectedPokemon },
    stepForward,
    stepBack,
  } = formContext;

  const handleSubmit = () => {
    stepForward();
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
          <Typography>{selectedPokemon.name}</Typography>
        </Box>
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
        <Button variant="outlined" onClick={stepBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Review;
