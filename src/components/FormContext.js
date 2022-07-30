import { createContext, useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  pokemon: null,
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
    case "pokemon":
      return { ...state, pokemon: action.payload };
    default:
      return state;
  }
}

export const FormContext = createContext();

export const FormProvider = function ({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
