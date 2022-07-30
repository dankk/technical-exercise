import { Button, Container } from "@mui/material";
import { useState } from "react";
import PokemonSelect from "./PokemonSelect";
import Review from "./Review";
import UserDetails from "./UserDetails";

function UseFormProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  function stepForward() {
    setCurrentStep((step) => step + 1);
  }
  function stepBack() {
    setCurrentStep((step) => step - 1);
  }

  return { currentStep, stepForward, stepBack };
}

function SignupForm() {
  const steps = [<UserDetails />, <PokemonSelect />, <Review />];
  const { currentStep, stepForward, stepBack } = UseFormProgress();
  console.log(currentStep);
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  return (
    <Container maxWidth="md">
      {steps[currentStep]}
      {!isFirst && (
        <Button variant="outlined" onClick={stepBack}>
          Back
        </Button>
      )}
      {!isLast && (
        <Button variant="outlined" onClick={stepForward}>
          Next
        </Button>
      )}
    </Container>
  );
}

export default SignupForm;
