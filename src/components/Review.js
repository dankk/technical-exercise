import { useContext } from "react";
import { FormContext } from "./FormContext";

function Review() {
  const formContext = useContext(FormContext);
  const { state } = formContext;
  console.log(state);
  return <>review</>;
}

export default Review;
