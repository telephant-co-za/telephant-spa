import React from "react";
import { ThemeProvider } from '@material-ui/styles'
import theme from './Theme'
import TemplateHeaderNavbar from "./components/TemplateHeaderNavbar"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TemplateHeaderNavbar />
      {[...new Array(121)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
    </ThemeProvider>
  );
}

export default App;
