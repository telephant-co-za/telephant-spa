import React from "react";
import { ThemeProvider } from '@material-ui/styles'
import theme from './Theme'
import TemplateHeaderNavbar from "./components/TemplateHeaderNavbar"
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>

        <TemplateHeaderNavbar />


    </ThemeProvider>
  );
}

export default App;
