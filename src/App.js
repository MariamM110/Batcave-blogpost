import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";

import Header from "./Components/Header";
import Welcome from "./Pages/Welcome";
import { theme } from "./Themes";
import { ThemeProviderMode } from "./Provider/useThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth={false} disableGutters>
        <ThemeProviderMode>
          <ThemeProvider theme={theme}>
            <Header />
            <Welcome />
          </ThemeProvider>
        </ThemeProviderMode>
      </Container>
    </BrowserRouter>
  );
}

export default App;
