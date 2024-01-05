import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { AppTheme } from "./styles/theme";
import { AppRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
