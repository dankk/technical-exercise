import { createContext, useReducer } from "react";
import useFormProgress from "../hooks/useFormProgress";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  allPokemon: null,
  selectedPokemon: null,
};

function formReducer(state, action) {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "address":
      return { ...state, address: action.payload };
    case "allPokemon":
      return { ...state, allPokemon: action.payload };
    case "selectedPokemon":
      return { ...state, selectedPokemon: action.payload };
    default:
      return state;
  }
}

export const FormContext = createContext();

export const FormProvider = function ({ children }) {
  const { currentStep, stepForward, stepBack } = useFormProgress();
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider
      value={{ state, dispatch, currentStep, stepForward, stepBack }}
    >
      {children}
    </FormContext.Provider>
  );
};
