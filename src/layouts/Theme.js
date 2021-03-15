import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

// Color Reference
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFB300&secondary.color=ECEFF1

export default createMuiTheme({
    palette: {
        primary: {
            main: amber[600]
        },
        secondary: {
            main: blueGrey[50]
        }
    },
    typography: {
        fontFamily: [
          'Blinker'
        ].join(','),
        htmlFontSize: 15,
      }
})

