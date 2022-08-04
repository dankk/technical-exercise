import { Button, Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import { fetchAllPokemon } from "../services/fetchPokemon";
import { FormContext } from "./FormContext";
import PokemonSelect from "./PokemonSelect";
import Review from "./Review";
import UserDetails from "./UserDetails";

function SignupForm() {
  const formContext = useContext(FormContext);
  const { state, dispatch } = formContext;

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
        <Router>
          <FormRoutes />
        </Router>
      </Paper>
    </Container>
  );
}

function SubmissionComplete() {
  const navigate = useNavigate();
  const formContext = useContext(FormContext);
  const { dispatch } = formContext;

  useEffect(() => {
    localStorage.removeItem("formInputs");
  });

  const handleReset = () => {
    dispatch({ type: "resetForm" });
    navigate("/");
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

function FormRoutes() {
  return useRoutes([
    { path: "/", element: <UserDetails /> },
    { path: "/1", element: <UserDetails /> },
    { path: "/2", element: <PokemonSelect /> },
    { path: "/3", element: <Review /> },
    { path: "/4", element: <SubmissionComplete /> },
  ]);
}

export default SignupForm;
