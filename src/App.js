import React from "react";
import { ThemeProvider } from '@material-ui/styles'
import theme from './Theme'
import TemplateHeaderNavbar from "./components/TemplateHeaderNavbar"
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TemplateHeaderNavbar />
        <Switch>
          <Route exact path="/" component={() => <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Home</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
