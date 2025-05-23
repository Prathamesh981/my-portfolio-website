// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";
import GlobalStyles from "./createGlobalStyle";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ScThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
