import { createContext, useEffect, useReducer } from "react";
import { getStoredValue, storeValue } from "../utils/localStorage";

const defaultInitialState = {
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
    case "resetForm":
      return { ...defaultInitialState, allPokemon: state.allPokemon };
    default:
      return state;
  }
}

const getInitialState = () => {
  const storedValues = getStoredValue("formInputs");
  return { ...defaultInitialState, ...storedValues };
};

export const FormContext = createContext();

export function FormProvider({ children }) {
  const initialState = getInitialState();
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    storeValue("formInputs", {
      firstName: state.firstName,
      lastName: state.lastName,
      phoneNumber: state.phoneNumber,
      address: state.address,
      selectedPokemon: state.selectedPokemon,
    });
  }, [state]);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
