import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { AppTheme } from "./styles/theme";
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={AppTheme}>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
