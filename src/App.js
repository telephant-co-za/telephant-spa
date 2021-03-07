import React from "react";
import { ThemeProvider } from '@material-ui/styles'
import TemplateHeaderNavbar from "./components/TemplateHeaderNavbar"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }

    },
});

const themeDark = createMuiTheme({
    palette: {
      background: {
        default: "#222222",
      }

    },
});



function App() {
  return (
    <MuiThemeProvider theme={ themeDark }>

        <TemplateHeaderNavbar />


        </MuiThemeProvider>);

}

export default App;
