import { createTheme } from '@material-ui/core/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ed6524',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#f6f8fc',
      main: '#cccccc',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});