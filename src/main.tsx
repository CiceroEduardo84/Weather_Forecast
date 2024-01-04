import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App";
import { GlobalStyle } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { AppTheme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
