import { Container } from "@mui/material";
import { useState } from "react";
import UserDetails from "./UserDetails";

function SignupForm() {
  const [page, setPage] = useState(0);

  return (
    <Container maxWidth="md">
      <UserDetails />
    </Container>
  );
}

export default SignupForm;
