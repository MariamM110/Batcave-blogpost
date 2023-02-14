import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";

import Header from "./Components/Header";
import Welcome from "./Pages/Welcome";
import { theme } from "./Themes";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth={false} disableGutters>
        <ThemeProvider theme={theme}>
          <Header />
          <Welcome />
        </ThemeProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
