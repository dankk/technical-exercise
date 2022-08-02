import { Container, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { fetchAllPokemon } from "../services/fetchPokemon";
import { FormContext } from "./FormContext";
import PokemonSelect from "./PokemonSelect";
import Review from "./Review";
import UserDetails from "./UserDetails";

function SignupForm() {
  const steps = [<UserDetails />, <PokemonSelect />, <Review />];

  const formContext = useContext(FormContext);
  const { dispatch, currentStep } = formContext;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllPokemon();
      return result;
    };

    fetchData().then((res) => {
      dispatch({ type: "allPokemon", payload: res });
    });
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        {currentStep === steps.length ? <>submitted</> : steps[1]}
      </Paper>
    </Container>
  );
}

export default SignupForm;
