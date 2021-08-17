import { createTheme } from "@material-ui/core/styles";

// Color Reference
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFB300&secondary.color=ECEFF1

export default createTheme({
  typography: {
    fontFamily: ["Blinker"].join(","),
    htmlFontSize: 15,
  },
  palette: {
    primary: {
      main: "#ed6524",
    },
    secondary: {
      light: "#f6f8fc",
      main: "#cccccc",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
