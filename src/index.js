import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
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
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
