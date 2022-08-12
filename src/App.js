import { FormProvider } from "./context/FormContext";
import SignupForm from "./components/SignupForm";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <FormProvider>
        <SignupForm />
      </FormProvider>
    </PokemonProvider>
  );
}

export default App;
