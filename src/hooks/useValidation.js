import { useState } from "react";

function useValidation() {
  const [errors, setErrors] = useState({});

  const omit = (value) => {
    if (errors[value]) {
      const { [value]: toRemove, ...rest } = errors;
      setErrors(rest);
    }
  };

  const validateField = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    switch (field) {
      case "firstName":
        if (!value.length) {
          setErrors({ ...errors, firstName: "Please enter your first name" });
        } else {
          omit("firstName");
        }
        break;
      case "lastName":
        if (!value.length) {
          setErrors({ ...errors, lastName: "Please enter your last name" });
        } else {
          omit("lastName");
        }
        break;
      case "phoneNumber":
        if (
          !new RegExp(
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            phoneNumber: "Please enter a valid phone number",
          });
        } else {
          omit("phoneNumber");
        }
        break;
      case "address":
        if (!value.length) {
          setErrors({ ...errors, address: "Please enter your address" });
        } else {
          omit("address");
        }
        break;
      default:
        break;
    }
  };

  return { validateField, errors };
}

export default useValidation;
