import { createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3A90DC',
    },
    secondary: {
      main: '#363636',
    },
    background: { default: '#FFFFFF' },
    error: {
      main: red.A400,
    },
    type: 'light',
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export default theme;
