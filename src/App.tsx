import React from "react";

import Routes from "./routes";

import SignupProvider from "./context/Register";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <SignupProvider>
      <GlobalStyles />
      <Routes />
    </SignupProvider>
  );
}

export default App;
