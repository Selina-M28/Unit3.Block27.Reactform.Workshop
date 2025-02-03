import React, { useState } from "react";
import Authenticate from "./Components/Authenticate/Authenticate";
import SignUpForm from "./Components/SignUpForm/Signup";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
