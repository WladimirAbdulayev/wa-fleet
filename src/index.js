import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1D3557",
      contrastText: "#fff",
    },
    secondary: {
      light: "#A8DADC",
      main: "#f77f00",
      contrastText: "#F1FAEE",
    },
    extra: {
      light: "#D90429",
      main: "#D90429",
      contrastText: "#F1FAEE",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const selTheme = mainTheme;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={selTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
