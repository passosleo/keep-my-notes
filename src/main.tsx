import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyles";
import { Routes } from "./routes";
import { theme } from "./theme";
import { ProfileProvider } from "./context/ProfileContext";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ProfileProvider>
          <GlobalStyle />
          <Layout>
            <Routes />
          </Layout>
        </ProfileProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
