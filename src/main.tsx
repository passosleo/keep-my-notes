import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import Routes from "./routes";
import { theme } from "./theme";
import { ProfileProvider } from "./context/ProfileContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProfileProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </ProfileProvider>
  </React.StrictMode>
);
