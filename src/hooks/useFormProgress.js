import { useState } from "react";

function useFormProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  const setStep = (step) => {
    setCurrentStep(step);
  };

  const stepForward = () => {
    setCurrentStep((step) => step + 1);
  };
  const stepBack = () => {
    setCurrentStep((step) => step - 1);
  };

  return { currentStep, stepForward, stepBack, setStep };
}

export default useFormProgress;
