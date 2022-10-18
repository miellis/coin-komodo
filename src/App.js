import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      {" "}
      <Navbar></Navbar>{" "}
    </ThemeProvider>
  );
}

export default App;
