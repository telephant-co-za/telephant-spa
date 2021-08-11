import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { grey } from '@material-ui/core/colors';

let theme = createTheme();
theme = responsiveFontSizes(theme);

// Color Reference
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFB300&secondary.color=ECEFF1

export default createTheme({
    palette: {
        primary: {
            main: amber[600]
        },
        secondary: {
            main: blueGrey[50]
        },
        background: {
            default: grey[200],
            paper: '#ffffff'
        }
    },
    typography: {
        fontFamily: [
          'Blinker'
        ].join(','),
        htmlFontSize: 15,
      }
})

