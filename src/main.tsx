import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import Layout from "./layout";
import Routes from "./routes";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
