import { FormProvider } from "./components/FormContext";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <FormProvider>
      <SignupForm />
    </FormProvider>
  );
}

export default App;
