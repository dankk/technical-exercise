import { createContext, useEffect, useReducer } from "react";
import { getStoredValue, storeValue } from "../utils/localStorage";

const defaultInitialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  selectedPokemon: null,
};

function formReducer(state, action) {
  if (action.type === "UPDATE") {
    return { ...state, [action.payload.key]: action.payload.value };
  }
  if (action.type === "RESET") {
    return { ...defaultInitialState };
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
