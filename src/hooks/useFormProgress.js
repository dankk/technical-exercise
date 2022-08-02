import { useState } from "react";

function useFormProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  function stepForward() {
    setCurrentStep((step) => step + 1);
  }
  function stepBack() {
    setCurrentStep((step) => step - 1);
  }

  return { currentStep, stepForward, stepBack };
}

export default useFormProgress;
