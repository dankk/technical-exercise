import { createContext, useReducer } from "react";

const initialState = {
  firstName: null,
  lastName: null,
  phoneNumber: null,
  address: null,
  pokemon: null,
};

function formReducer(state, action) {
  switch (action.type) {
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
