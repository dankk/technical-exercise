import { Button, Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { fetchAllPokemon } from "../services/fetchPokemon";
import { FormContext } from "./FormContext";
import PokemonSelect from "./PokemonSelect";
import Review from "./Review";
import UserDetails from "./UserDetails";

function SignupForm() {
  const steps = [<UserDetails />, <PokemonSelect />, <Review />];

  const formContext = useContext(FormContext);
  const { state, dispatch, currentStep } = formContext;

  useEffect(() => {
    if (state.allPokemon) return;
    const fetchData = async () => {
      const result = await fetchAllPokemon();
      return result;
    };

    fetchData().then((res) => {
      dispatch({ type: "allPokemon", payload: res });
    });
  }, [dispatch, state.allPokemon]);

  return (
    <Container maxWidth="sm">
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        {currentStep === steps.length ? (
          <SubmissionComplete />
        ) : (
          steps[currentStep]
        )}
      </Paper>
    </Container>
  );
}

function SubmissionComplete() {
  const formContext = useContext(FormContext);
  const { dispatch, setStep } = formContext;

  useEffect(() => {
    localStorage.removeItem("formInputs");
  });

  const handleReset = () => {
    dispatch({ type: "resetForm" });
    setStep(0);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography>Submission Complete!</Typography>
      <Button variant="outlined" onClick={handleReset} sx={{ mt: 1 }}>
        New Entry
      </Button>
    </Box>
  );
}

export default SignupForm;
